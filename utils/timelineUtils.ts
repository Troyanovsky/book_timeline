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
  visibleCountries: Set<CountryCode> | null // null means all
): CountryGroup[] => {
  
  // 1. Filter active books
  const activeBooks = books.filter(b => selectedBookIds.has(b.id));
  
  // 2. Identify relevant countries (either filtered or from active books)
  // If specific countries are selected in filter, use those.
  // Otherwise, show countries that have at least one active book, OR show all if no filter?
  // Let's go with: Show all countries that have at least one active book OR period.
  
  const countriesWithBooks = new Set(activeBooks.map(b => b.country));
  
  // To make the chart useful, we usually want to see the periods even if no book is there yet? 
  // Let's restrict to countries present in the filtered view or active books.
  let targetCountries = Array.from(Object.values(CountryCode));
  
  if (visibleCountries && visibleCountries.size > 0) {
    targetCountries = targetCountries.filter(c => visibleCountries.has(c));
  } else {
      // If no specific country filter, only show countries that have active books to keep view clean.
      // If no books selected, show nothing or show all? 
      // Strategy: If selectedBookIds is empty, show nothing. If not empty, show relevant countries.
      if (selectedBookIds.size > 0) {
        targetCountries = targetCountries.filter(c => countriesWithBooks.has(c));
      } else {
        // Empty state
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

    // Calculate Lanes (Greedy packing)
    const lanes: LaneData[] = [];
    
    countryBooks.forEach(book => {
      let placed = false;
      for (let i = 0; i < lanes.length; i++) {
        const lastBook = lanes[i].books[lanes[i].books.length - 1];
        if (!doesOverlap(book, lastBook)) {
          lanes[i].books.push(book);
          placed = true;
          break;
        }
      }
      if (!placed) {
        lanes.push({ laneIndex: lanes.length, books: [book] });
      }
    });

    // Get Periods for this country
    const countryPeriods = periods.filter(p => p.country === country);

    // Calculate Height
    // 1 row for Periods (if any) + n rows for book lanes
    const periodHeight = countryPeriods.length > 0 ? PERIOD_ROW_HEIGHT : 0;
    const lanesHeight = Math.max(lanes.length * ROW_HEIGHT, ROW_HEIGHT); // Min 1 row height for empty state visual
    const totalHeight = periodHeight + lanesHeight + GROUP_PADDING;

    groups.push({
      country,
      lanes,
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
