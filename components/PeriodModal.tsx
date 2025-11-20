import React from 'react';
import { HistoricalPeriod } from '../types';
import { X, Calendar, MapPin, Info } from 'lucide-react';

interface PeriodModalProps {
    period: HistoricalPeriod | null;
    onClose: () => void;
}

const PeriodModal: React.FC<PeriodModalProps> = ({ period, onClose }) => {
    if (!period) return null;

    const typeColors: Record<string, string> = {
        war: 'bg-red-100 text-red-800',
        era: 'bg-slate-100 text-slate-800',
        political: 'bg-amber-100 text-amber-800'
    };

    const typeLabels: Record<string, string> = {
        war: 'War / Conflict',
        era: 'Historical Era',
        political: 'Political Event'
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">

                {/* Header with Type Badge */}
                <div className="p-6 pb-0 flex items-start justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${typeColors[period.type]}`}>
                        {typeLabels[period.type]}
                    </span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors -mr-2 -mt-2"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col">

                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{period.name}</h2>
                        <div className="flex items-center gap-4 text-slate-600">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{period.startYear} - {period.endYear}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span className="font-medium">{period.country}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-2 flex-1">
                        <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                            <div>
                                <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Description</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {period.detailedDescription || period.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end pt-4 border-t border-slate-100">
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

export default PeriodModal;
