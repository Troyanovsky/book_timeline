export enum CountryCode {
  FR = 'France',
  UK = 'United Kingdom',
  RU = 'Russia',
  US = 'United States',
  DE = 'Germany',
  ES = 'Spain',
  CO = 'Colombia',
  MX = 'Mexico'
  // need to update colors in Timeline.tsx if adding more countries
}

export interface Book {
  id: string;
  title: string;
  author: string;
  country: CountryCode; // the country where the book is primarily set
  startYear: number; // the year the book's story events begin
  endYear: number; // the year the book's story events end
  pubYear: number;
  description: string;
  tags: string[];
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  country: CountryCode;
  startYear: number;
  endYear: number;
  type: 'era' | 'war' | 'political';
  description: string;
  detailedDescription?: string;
}

export interface LaneData {
  laneIndex: number;
  books: Book[];
}

export interface CountryGroup {
  country: CountryCode;
  lanes: LaneData[];
  periods: HistoricalPeriod[];
  height: number;
  yOffset: number;
}