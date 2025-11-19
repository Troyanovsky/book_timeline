import React from 'react';
import { Book } from '../types';
import { X, Calendar, MapPin, Book as BookIcon, Tag } from 'lucide-react';

interface BookModalProps {
  book: Book | null;
  onClose: () => void;
  onRemove: (id: string) => void;
}

const BookModal: React.FC<BookModalProps> = ({ book, onClose, onRemove }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
        
        {/* Image Section */}
        <div className="md:w-1/3 h-64 md:h-auto relative bg-slate-100">
          <img 
            src={book.coverUrl} 
            alt={book.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 text-white md:hidden">
             <h2 className="text-2xl font-bold shadow-black drop-shadow-md">{book.title}</h2>
             <p className="text-sm opacity-90">{book.author}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="hidden md:block mb-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-1">{book.title}</h2>
            <p className="text-lg text-slate-600 font-medium">{book.author}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Story Setting</span>
                <span className="text-sm font-medium text-slate-800">{book.startYear} - {book.endYear}</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BookIcon className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Published</span>
                <span className="text-sm font-medium text-slate-800">{book.pubYear}</span>
              </div>
            </div>
            <div className="flex items-start gap-3 col-span-2">
              <MapPin className="w-5 h-5 text-indigo-500 mt-0.5" />
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Country</span>
                <span className="text-sm font-medium text-slate-800">{book.country}</span>
              </div>
            </div>
          </div>

          <div className="mb-6 flex-1">
             <h3 className="text-sm font-bold text-slate-900 mb-2">Synopsis</h3>
             <p className="text-slate-600 text-sm leading-relaxed">
               {book.description}
             </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {book.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex justify-end gap-3 border-t border-slate-100 pt-4">
            <button 
              onClick={() => {
                onRemove(book.id);
                onClose();
              }}
              className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              Remove from Timeline
            </button>
            <button 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;