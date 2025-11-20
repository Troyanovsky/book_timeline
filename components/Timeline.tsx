import React, { useRef, useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { Book, CountryCode, HistoricalPeriod, CountryGroup } from '../types';
import { 
  getX, 
  getWidth, 
  processDataIntoGroups, 
  ROW_HEIGHT, 
  PERIOD_ROW_HEIGHT, 
  GROUP_PADDING 
} from '../utils/timelineUtils';

interface TimelineProps {
  books: Book[];
  periods: HistoricalPeriod[];
  selectedBookIds: Set<string>;
  zoomLevel: number; // pixels per year
  onBookClick: (book: Book) => void;
  visibleCountries: Set<CountryCode> | null;
}

const Timeline: React.FC<TimelineProps> = ({ 
  books, 
  periods, 
  selectedBookIds, 
  zoomLevel,
  onBookClick,
  visibleCountries
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate total range based on data, or fixed? Fixed is safer for scrolling.
  const minYear = 1200;
  const maxYear = 2020;
  const yearRange = d3.range(minYear, maxYear + 10, 10);

  // Center view around 1950 on-load
  useEffect(() => {
    if (containerRef.current) {
      const centerYear = 1950;
      const centerPosition = getX(centerYear, minYear, zoomLevel);
      const containerWidth = containerRef.current.clientWidth;
      const scrollLeft = centerPosition - containerWidth / 2;
      
      containerRef.current.scrollLeft = Math.max(0, scrollLeft);
    }
  }, [zoomLevel]);
  
  // Process Data
  const groups = useMemo(() => 
    processDataIntoGroups(books, periods, selectedBookIds, visibleCountries), 
    [books, periods, selectedBookIds, visibleCountries]
  );

  const totalWidth = (maxYear - minYear) * zoomLevel;
  const totalHeight = groups.reduce((acc, g) => acc + g.height, 0) + 60; // +60 for axis

  // Color scales
  const periodColorMap: Record<string, string> = {
    war: '#fca5a5', // red-300
    era: '#cbd5e1', // slate-300
    political: '#fcd34d' // amber-300
  };

  const countryColorMap: Record<string, string> = {
    [CountryCode.FR]: 'bg-blue-100 text-blue-800 border-blue-300',
    [CountryCode.UK]: 'bg-red-100 text-red-800 border-red-300',
    [CountryCode.US]: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    [CountryCode.RU]: 'bg-green-100 text-green-800 border-green-300',
    [CountryCode.DE]: 'bg-gray-200 text-gray-800 border-gray-400',
    [CountryCode.ES]: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    [CountryCode.CO]: 'bg-red-100 text-red-800 border-red-300',
    [CountryCode.MX]: 'bg-blue-100 text-blue-800 border-blue-300',
  };
  
  const countryBookColor: Record<string, string> = {
    [CountryCode.FR]: '#93c5fd',
    [CountryCode.UK]: '#fca5a5',
    [CountryCode.US]: '#a5b4fc',
    [CountryCode.RU]: '#86efac',
    [CountryCode.DE]: '#d1d5db',
    [CountryCode.ES]: '#fde047',
    [CountryCode.CO]: '#fecaca',
    [CountryCode.MX]: '#bfdbfe',
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full overflow-auto bg-white relative timeline-scroll shadow-inner"
    >
      <div 
        style={{ width: `${totalWidth}px`, height: `${Math.max(totalHeight, 600)}px` }} 
        className="relative"
      >
        {/* Background Grid */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {yearRange.map(year => (
            <React.Fragment key={year}>
              <line 
                x1={getX(year, minYear, zoomLevel)} 
                y1={0} 
                x2={getX(year, minYear, zoomLevel)} 
                y2="100%" 
                stroke="#e2e8f0" 
                strokeWidth={1} 
                strokeDasharray="4 4"
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Sticky Year Header */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-slate-200 flex h-12 items-center shadow-sm">
          {yearRange.map(year => (
            <div 
              key={year}
              className="absolute text-xs font-semibold text-slate-500 select-none"
              style={{ left: getX(year, minYear, zoomLevel), transform: 'translateX(-50%)' }}
            >
              {year}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative mt-4">
          {groups.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center pt-20">
              <p className="text-slate-400 text-lg">Select books to begin visualization</p>
            </div>
          )}

          {groups.map(group => (
            <div 
              key={group.country} 
              className="relative border-b border-slate-100 group"
              style={{ height: group.height }}
            >
              {/* Sticky Country Label (Vertical) - Simulated by absolute positioning on left of scroll view if possible?
                  Since we are inside a horizontal scroll, standard sticky left is tricky without grid.
                  We will place a label at the start of the viewable area or just at x=0 for now.
               */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-slate-50 border-r border-slate-200 z-10 flex items-center justify-center">
                 <span className="transform -rotate-90 text-xs font-bold text-slate-400 whitespace-nowrap tracking-widest uppercase">
                   {group.country}
                 </span>
              </div>

              <div className="ml-10 relative h-full">
                {/* Historical Periods Row */}
                {group.periods.length > 0 && (
                  <div className="absolute w-full h-8 top-0 overflow-hidden">
                     {group.periods.map(period => {
                       const x = getX(period.startYear, minYear, zoomLevel);
                       const width = getWidth(period.startYear, period.endYear, zoomLevel);
                       if (x + width < 0 || x > totalWidth) return null;

                       return (
                         <div
                           key={period.id}
                           className="absolute h-6 top-1 rounded-sm px-2 text-[10px] flex items-center justify-center overflow-hidden whitespace-nowrap text-slate-700 border border-black/5 shadow-sm opacity-80 hover:opacity-100 transition-opacity cursor-help"
                           style={{ 
                             left: x, 
                             width: width, 
                             backgroundColor: periodColorMap[period.type] 
                           }}
                           title={`${period.name} (${period.startYear}-${period.endYear})`}
                         >
                           {period.name}
                         </div>
                       )
                     })}
                  </div>
                )}

                {/* Book Lanes */}
                <div className="absolute w-full top-8">
                  {group.lanes.map(lane => (
                     <React.Fragment key={lane.laneIndex}>
                       {lane.books.map(book => {
                          const x = getX(book.startYear, minYear, zoomLevel);
                          const width = getWidth(book.startYear, book.endYear, zoomLevel);
                          
                          // Optimization: Don't render if way off screen (basic culling could be added here if needed)

                          return (
                            <div
                              key={book.id}
                              onClick={() => onBookClick(book)}
                              className={`absolute h-8 top-0 rounded shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center px-2 overflow-hidden border-l-4 border-black/20 hover:-translate-y-0.5 active:translate-y-0`}
                              style={{
                                left: x,
                                width: width,
                                top: lane.laneIndex * ROW_HEIGHT,
                                backgroundColor: countryBookColor[book.country]
                              }}
                              title={`${book.title} by ${book.author}`}
                            >
                              <span className="text-xs font-medium text-slate-900 truncate">
                                {book.title}
                              </span>
                            </div>
                          );
                       })}
                     </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;