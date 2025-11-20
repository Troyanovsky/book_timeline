import React, { useState, useEffect } from 'react';
import { BOOKS, PERIODS } from './constants';
import { Book, HistoricalPeriod } from './types';
import Timeline from './components/Timeline';
import SearchSidebar from './components/SearchSidebar';
import BookModal from './components/BookModal';
import PeriodModal from './components/PeriodModal';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

const App: React.FC = () => {
  // Initialize with a few popular books selected
  const [selectedBookIds, setSelectedBookIds] = useState<Set<string>>(new Set(['1', '2', '5', '7']));
  const [zoomLevel, setZoomLevel] = useState<number>(10); // pixels per year
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<HistoricalPeriod | null>(null);

  const handleToggleBook = (id: string) => {
    const newSet = new Set(selectedBookIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedBookIds(newSet);
  };

  const handleRemoveBook = (id: string) => {
    const newSet = new Set(selectedBookIds);
    newSet.delete(id);
    setSelectedBookIds(newSet);
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handlePeriodClick = (period: HistoricalPeriod) => {
    setSelectedPeriod(period);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.max(2, Math.min(50, prev + delta)));
  };

  const handleReset = () => {
    setZoomLevel(10);
    setSelectedBookIds(new Set(['1', '2', '5', '7']));
  };

  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      {/* Sidebar */}
      <SearchSidebar
        books={BOOKS}
        selectedBookIds={selectedBookIds}
        onToggleBook={handleToggleBook}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 relative">

        {/* Toolbar */}
        <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Timeline View</h2>
            <div className="h-4 w-px bg-slate-300 mx-2"></div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleZoom(-2)}
                className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-400 w-12 text-center">{(zoomLevel * 10).toFixed(0)}%</span>
              <button
                onClick={() => handleZoom(2)}
                className="p-1.5 rounded hover:bg-slate-100 text-slate-600 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset View
          </button>
        </div>

        {/* Timeline Canvas */}
        <div className="flex-1 overflow-hidden relative bg-slate-50/50">
          <Timeline
            books={BOOKS}
            periods={PERIODS}
            selectedBookIds={selectedBookIds}
            zoomLevel={zoomLevel}
            onBookClick={handleBookClick}
            onPeriodClick={handlePeriodClick}
            visibleCountries={null}
          />

          {/* Floating Legend */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-3 rounded-lg shadow border border-slate-200 text-xs flex flex-col gap-2 pointer-events-none select-none">
            <div className="font-semibold text-slate-500 mb-1">Period Types</div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-red-300"></div>
              <span>War / Conflict</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-slate-300"></div>
              <span>Era / Period</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-amber-300"></div>
              <span>Political Event</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BookModal
        book={selectedBook}
        onClose={() => setSelectedBook(null)}
        onRemove={handleRemoveBook}
      />

      <PeriodModal
        period={selectedPeriod}
        onClose={() => setSelectedPeriod(null)}
      />
    </div>
  );
};

export default App;