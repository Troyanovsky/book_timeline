import { Book, CountryCode, HistoricalPeriod, LaneData, CountryGroup } from '../types';

export const YEAR_PIXEL_WIDTH_DEFAULT = 20; // Pixels per year
export const MIN_YEAR = 1200;
export const MAX_YEAR = 2030;
export const ROW_HEIGHT = 40;
export const HEADER_HEIGHT = 40;
export const PERIOD_ROW_HEIGHT = 30;
export const GROUP_PADDING = 20;

// Helper to check if a book overlaps with a lane's last book
const doesOverlap = (book: Book, lastBookInLane: Book) => {
  // Add a small buffer (e.g. 1 year) for visual spacing
  return book.startYear < lastBookInLane.endYear + 2;
};

export const processDataIntoGroups = (
  books: Book[],
  periods: HistoricalPeriod[],
  selectedBookIds: Set<string>,
  visibleCountries: Set<CountryCode> | null, // null means all
  zoomLevel: number
): CountryGroup[] => {

  // 1. Filter active books
  const activeBooks = books.filter(b => selectedBookIds.has(b.id));

  // 2. Identify relevant countries (either filtered or from active books)
  const countriesWithBooks = new Set(activeBooks.map(b => b.country));

  let targetCountries = Array.from(Object.values(CountryCode));

  if (visibleCountries && visibleCountries.size > 0) {
    targetCountries = targetCountries.filter(c => visibleCountries.has(c));
  } else {
    if (selectedBookIds.size > 0) {
      targetCountries = targetCountries.filter(c => countriesWithBooks.has(c));
    } else {
      return [];
    }
  }

  let currentYOffset = 0;
  const groups: CountryGroup[] = [];

  targetCountries.forEach(country => {
    // Get books for this country
    const countryBooks = activeBooks.filter(b => b.country === country);
    // Sort by start year
    countryBooks.sort((a, b) => a.startYear - b.startYear);

    // Calculate Lanes (Greedy packing with visual width)
    // We need to track the "visual" end year of the last book in each lane
    // to prevent text from overlapping the next book.
    const lanes: { laneIndex: number; books: Book[]; visualEndYear: number }[] = [];

    countryBooks.forEach(book => {
      // Estimate text width: approx 7px per char + 20px padding
      const textWidthPx = book.title.length * 7 + 20;
      const bookDurationPx = (book.endYear - book.startYear) * zoomLevel;

      // The visual width is the max of the actual bar width and the text width
      const visualWidthPx = Math.max(bookDurationPx, textWidthPx);

      // Convert visual width back to years to find the "visual end year"
      const visualDurationYears = visualWidthPx / zoomLevel;
      const visualEndYear = book.startYear + visualDurationYears;

      let placed = false;
      for (let i = 0; i < lanes.length; i++) {
        // Check overlap against the VISUAL end year of the last book
        // Add a small buffer (e.g. 2 years) for spacing
        if (book.startYear >= lanes[i].visualEndYear + 0.5) {
          lanes[i].books.push(book);
          lanes[i].visualEndYear = visualEndYear;
          placed = true;
          break;
        }
      }
      if (!placed) {
        lanes.push({
          laneIndex: lanes.length,
          books: [book],
          visualEndYear: visualEndYear
        });
      }
    });

    // Convert back to standard LaneData
    const finalLanes: LaneData[] = lanes.map(l => ({
      laneIndex: l.laneIndex,
      books: l.books
    }));

    // Get Periods for this country
    const countryPeriods = periods.filter(p => p.country === country);

    // Calculate Height
    const periodHeight = countryPeriods.length > 0 ? PERIOD_ROW_HEIGHT : 0;
    const lanesHeight = Math.max(finalLanes.length * ROW_HEIGHT, ROW_HEIGHT);
    const totalHeight = periodHeight + lanesHeight + GROUP_PADDING;

    groups.push({
      country,
      lanes: finalLanes,
      periods: countryPeriods,
      height: totalHeight,
      yOffset: currentYOffset
    });

    currentYOffset += totalHeight;
  });

  return groups;
};

export const getX = (year: number, minYear: number, pixelsPerYear: number) => {
  return (year - minYear) * pixelsPerYear;
};

export const getWidth = (start: number, end: number, pixelsPerYear: number) => {
  return Math.max((end - start) * pixelsPerYear, 5); // Min width 5px
};
