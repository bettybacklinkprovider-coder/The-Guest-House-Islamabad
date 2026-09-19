import React, { useState } from 'react';
import { PageId } from '../types';
import { ROOMS, ALL_SERVICES, BUSINESS_INFO } from '../data/guestHouseData';
import { Phone, CalendarCheck, CheckCircle2, Bed, Wifi, Bath, Wind, Car, Headphones, Sparkles, Compass, Zap, Shield, ArrowRight } from 'lucide-react';

interface RoomsServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsServicesPage: React.FC<RoomsServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'rooms' | 'services'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-current" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-current" />;
      case 'Bath': return <Bath className="w-6 h-6 text-current" />;
      case 'Wind': return <Wind className="w-6 h-6 text-current" />;
      case 'Car': return <Car className="w-6 h-6 text-current" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-current" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-current" />;
      case 'Compass': return <Compass className="w-6 h-6 text-current" />;
      case 'Zap': return <Zap className="w-6 h-6 text-current" />;
      default: return <Shield className="w-6 h-6 text-current" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-amber-500">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-900 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block">
            Accommodations & Guest Amenities
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Rooms & Services
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover our clean, comfortable room options and guest house amenities carefully tailored for a restful stay in Islamabad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* ROOMS SECTION */}
        <section className="space-y-8">
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Our Accommodation Categories
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Featuring modern sleeping arrangements, clean attached bathrooms, and AC/heating.
              </p>
            </div>

            <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-200 text-xs font-semibold text-amber-900">
              Check-in: {BUSINESS_INFO.checkInTime} | Check-out: {BUSINESS_INFO.checkOutTime}
            </div>
          </div>

          {/* Rooms List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ROOMS.map((room) => (
              <div 
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Large Room Image */}
                <div className="sm:w-2/5 relative min-h-[220px] sm:min-h-full overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-950/90 backdrop-blur text-amber-400 text-xs font-bold px-2.5 py-1 rounded">
                    {room.size}
                  </div>
                </div>

                {/* Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                        {room.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="font-bold text-emerald-900 text-base block">
                          PKR {room.pricePKR.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-500 block">per night</span>
                      </div>
                    </div>

                    <p className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block">
                      {room.tagline}
                    </p>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {room.description}
                    </p>

                    <div className="text-xs text-slate-700 space-y-1 pt-1 font-medium">
                      <div className="flex items-center space-x-1.5 text-emerald-900">
                        <Bed className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span><strong>Bed arrangement:</strong> {room.bedType}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-slate-600">
                        <Shield className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span><strong>Capacity:</strong> {room.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600">
                      {room.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-1 truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="w-full py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <CalendarCheck className="w-4 h-4 text-amber-400" />
                      <span>Book {room.name}</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SERVICES & FACILITIES SECTION */}
        <section className="space-y-8 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-2">
              Guest Services
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Services & Facilities
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Every facility at The Guest House Islamabad is operated with attention to cleanliness, reliability, and guest satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_SERVICES.map((service) => (
              <div 
                key={service.id}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all space-y-2.5"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {service.highlightText || 'Included Service'}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed pl-1">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* BOOK YOUR STAY CTA BANNER */}
        <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-2xl p-8 sm:p-12 shadow-2xl border-2 border-amber-500/40 text-center sm:text-left flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              Reserve Accommodation
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Ready to Book Your Comfortable Stay in Islamabad?
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              Contact our desk directly or place an instant reservation inquiry online. We look forward to hosting you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-base shadow-xl transition-all flex items-center justify-center space-x-2"
            >
              <CalendarCheck className="w-5 h-5 text-emerald-950" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur border border-white/30 transition-all flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </section>

      </div>

    </div>
  );
};
