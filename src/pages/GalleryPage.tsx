import React, { useState } from 'react';
import { PageId } from '../types';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/guestHouseData';
import { LightboxModal } from '../components/LightboxModal';
import { Maximize2, Image as ImageIcon, Camera, Phone, CalendarCheck } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior', 'Rooms', 'Interior', 'Facilities'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (itemId: string) => {
    const index = GALLERY_ITEMS.findIndex(item => item.id === itemId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Gallery Banner */}
      <div className="bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-900 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block">
            Photo Tour & Visuals
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of The Guest House Islamabad — exploring our exterior building, clean bedroom interiors, cozy common lounges, and well-maintained facilities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Category Filters Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center space-x-2 text-slate-700">
            <Camera className="w-5 h-5 text-emerald-800" />
            <span className="font-serif font-bold text-sm">Filter Photos:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-emerald-900 text-amber-300 shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${GALLERY_ITEMS.length})` : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-emerald-950/90 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider backdrop-blur border border-amber-400/20">
                  {item.category}
                </div>

                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-amber-500/90 text-emerald-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-100 flex justify-between items-center text-[11px] text-emerald-800 font-semibold">
                  <span>Click to view photo</span>
                  <span className="text-slate-400 font-normal">The Guest House Islamabad</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox */}
        <LightboxModal
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />

        {/* CTA Banner */}
        <div className="bg-emerald-950 text-white rounded-2xl p-8 border-2 border-amber-500/40 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Like What You See? Experience It in Person
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl mx-auto">
            Book your room at The Guest House Islamabad today or contact us for special family/group rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-amber-500 text-emerald-950 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors shadow"
            >
              Book Your Stay Now
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-6 py-3 bg-white/10 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
