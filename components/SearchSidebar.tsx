import React, { useState, useMemo } from 'react';
import { Book, CountryCode } from '../types';
import { Search, X, BookOpen, Plus, Check, Filter } from 'lucide-react';

interface SearchSidebarProps {
  books: Book[];
  selectedBookIds: Set<string>;
  onToggleBook: (id: string) => void;
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({ books, selectedBookIds, onToggleBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState<string>('ALL');
  const [filterActive, setFilterActive] = useState<boolean>(false); // if true, show only selected

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry = filterCountry === 'ALL' || book.country === filterCountry;
      const matchesActive = filterActive ? selectedBookIds.has(book.id) : true;

      return matchesSearch && matchesCountry && matchesActive;
    });
  }, [books, searchTerm, filterCountry, filterActive, selectedBookIds]);

  return (
    <div className="w-80 flex-shrink-0 bg-white border-r border-slate-200 h-full flex flex-col shadow-xl z-30">
      <div className="p-4 border-b border-slate-200 bg-slate-50">
        <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          Chronos Books
        </h1>

        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search title or author..."
            className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <select
            className="flex-1 bg-white border border-slate-300 text-slate-700 text-xs rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
          >
            <option value="ALL">All Countries</option>
            {Object.values(CountryCode).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <button
            onClick={() => setFilterActive(!filterActive)}
            className={`p-1.5 rounded-md border ${filterActive ? 'bg-indigo-100 border-indigo-300 text-indigo-700' : 'bg-white border-slate-300 text-slate-500'}`}
            title="Show Selected Only"
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-sm">
            No books found matching your criteria.
          </div>
        ) : (
          filteredBooks.map(book => {
            const isSelected = selectedBookIds.has(book.id);
            return (
              <div
                key={book.id}
                className={`group flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${isSelected ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-100 hover:border-slate-300'}`}
                onClick={() => onToggleBook(book.id)}
              >
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-indigo-900' : 'text-slate-800'}`}>
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 truncate">{book.author}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                      {book.startYear}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200 max-w-[80px] truncate">
                      {book.country}
                    </span>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors ${isSelected ? 'bg-indigo-500 border-indigo-500 text-white' : 'bg-transparent border-slate-300 text-slate-300 group-hover:border-indigo-400 group-hover:text-indigo-400'}`}>
                  {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="p-3 border-t border-slate-200 bg-slate-50 text-xs text-center text-slate-500">
        Showing {filteredBooks.length} books
      </div>
    </div>
  );
};

export default SearchSidebar;