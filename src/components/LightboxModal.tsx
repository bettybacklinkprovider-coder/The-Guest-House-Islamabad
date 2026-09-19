import React from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-20">
        <div className="flex items-center space-x-2">
          <span className="bg-amber-500 text-emerald-950 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
            {currentItem.category}
          </span>
          <span className="text-xs text-slate-300">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Close photo viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrow Left */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20 hidden sm:flex items-center justify-center"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Main Image Container */}
      <div 
        className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption */}
        <div className="bg-slate-900/80 p-4 rounded-xl border border-white/10 max-w-xl text-center text-white space-y-1">
          <h3 className="font-serif text-lg font-bold text-amber-300">
            {currentItem.title}
          </h3>
          <p className="text-xs text-slate-300">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* Navigation Arrow Right */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-20 hidden sm:flex items-center justify-center"
        aria-label="Next photo"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Mobile Swipe / Click Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 sm:hidden">
        <button onClick={handlePrev} className="px-3 py-1.5 rounded bg-white/20 text-xs font-semibold text-white">
          ← Prev
        </button>
        <button onClick={handleNext} className="px-3 py-1.5 rounded bg-white/20 text-xs font-semibold text-white">
          Next →
        </button>
      </div>

    </div>
  );
};
