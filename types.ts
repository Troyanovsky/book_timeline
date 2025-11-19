export enum CountryCode {
  FR = 'France',
  UK = 'United Kingdom',
  RU = 'Russia',
  US = 'United States',
  DE = 'Germany',
  ES = 'Spain'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  country: CountryCode;
  startYear: number;
  endYear: number;
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