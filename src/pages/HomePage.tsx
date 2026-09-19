import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, ROOMS, HOME_FACILITIES, WHY_STAY_POINTS, ISLAMABAD_LANDMARKS } from '../data/guestHouseData';
import { Phone, CalendarCheck, CheckCircle2, ArrowRight, MapPin, Bed, Wifi, Bath, Wind, Car, Headphones, ShieldCheck, Star, Navigation } from 'lucide-react';
import { Logo } from '../components/Logo';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed': return <Bed className="w-6 h-6 text-current" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-current" />;
      case 'Bath': return <Bath className="w-6 h-6 text-current" />;
      case 'Wind': return <Wind className="w-6 h-6 text-current" />;
      case 'Car': return <Car className="w-6 h-6 text-current" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-current" />;
      default: return <Bed className="w-6 h-6 text-current" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Hero Image with dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.pinimg.com/736x/61/73/52/617352260dc6e1bbee80fa0f7ba506e3.jpg"
            alt="The Guest House Islamabad Interior"
            className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-10000 filter brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left my-auto">
          <div className="max-w-3xl space-y-6">
            
            {/* Logo Emblem & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-amber-400/40 inline-flex items-center">
                <Logo size="sm" variant="dark" showText={false} />
                <span className="ml-2 font-serif font-bold text-emerald-950 text-xs tracking-wider uppercase">GH Islamabad</span>
              </div>

              <div className="inline-flex items-center space-x-2 bg-emerald-900/80 backdrop-blur-md border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-300 shadow-lg">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>F-15/2, Jammu Kashmir Housing Scheme, Islamabad</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Welcome to <span className="text-amber-400 block sm:inline">The Guest House Islamabad</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
              A Comfortable and Peaceful Stay in Islamabad
            </p>

            {/* Highlight Badges */}
            <div className="pt-2 flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-emerald-100">
              <span className="flex items-center space-x-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Clean & Welcoming</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>24/7 Power & Hot Water</span>
              </span>
              <span className="flex items-center space-x-1.5 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Free Parking & Wi-Fi</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-3 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <CalendarCheck className="w-5 h-5 text-emerald-950" />
                <span>Book Your Stay</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md border border-white/30 transition-all flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call Now ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 2 — ABOUT THE GUEST HOUSE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block">
                  About Our Accommodation
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Your Peaceful Home Away From Home in Islamabad
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                Welcome to <strong>The Guest House Islamabad</strong>, a comfortable, clean, and peaceful haven located in the well-connected F-15/2 sector of Islamabad. Designed specifically for visitors who value tranquility, spotless hygiene, and warm hospitality, our guest house provides a relaxing retreat whether you are visiting for business, family trips, or tourism.
              </p>

              {/* Mentioned key features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-900/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Comfortable Accommodation</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Furnished with plush beds, clean linens, and climate control.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-900/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Clean & Welcoming Environment</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Daily housekeeping maintaining supreme hygiene standards.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-900/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Peaceful Atmosphere</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Quiet residential area ensuring sound sleep and privacy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-900/10">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Convenient Location</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Quick access to Airport, Motorway interchanges, and Blue Area.</p>
                  </div>
                </div>

              </div>

              {/* Friendly Guest Experience Note */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 text-sm flex items-center space-x-3">
                <Star className="w-5 h-5 text-amber-600 shrink-0" />
                <span>
                  <strong>Friendly Guest Experience:</strong> Our dedicated 24/7 staff ensures personalized assistance from check-in to farewell.
                </span>
              </div>

            </div>

            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://i.pinimg.com/1200x/77/9d/b8/779db86c4cc6e37270940a27ed8b5ce9.jpg"
                  alt="The Guest House Islamabad Interior Lounge"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="bg-amber-500 text-emerald-950 text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    Guest Lounge
                  </span>
                  <p className="font-serif text-lg font-bold text-white">
                    Clean, Elegant & Welcoming Spaces
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white p-4 rounded-2xl shadow-xl border border-amber-400/30 hidden sm:flex items-center space-x-3">
                <div className="text-amber-400 font-bold text-2xl font-serif">4.9★</div>
                <div className="text-xs text-emerald-100">
                  <span className="font-semibold block text-white">Guest Satisfaction</span>
                  Clean, quiet & convenient
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SECTION 3 — ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-2">
                Accommodation Options
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Rooms & Accommodation
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Choose from our well-appointed room categories designed for comfort and restful stays.
              </p>
            </div>

            <button
              onClick={() => onNavigate('rooms-and-services')}
              className="inline-flex items-center space-x-2 text-emerald-900 font-bold text-sm hover:text-emerald-700 group"
            >
              <span>Explore All Rooms & Rates</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.filter(r => r.isFeaturedOnHome).map((room) => (
              <div 
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-emerald-950/90 backdrop-blur-md text-amber-400 font-bold text-sm px-3 py-1 rounded-lg border border-amber-400/30">
                    PKR {room.pricePKR.toLocaleString()} <span className="text-[10px] text-slate-300 font-normal">/ night</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-900 transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3 font-medium">
                      {room.capacity} • {room.bedType}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {room.description}
                    </p>
                  </div>

                  {/* Room Facilities preview */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {room.features.slice(0, 3).map((feat, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-1 rounded font-medium">
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('rooms-and-services')}
                      className="w-full py-2.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-xs transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>View Rooms & Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 4 — GUEST HOUSE FACILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block">
              Amenities & Conveniences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Guest House Facilities
            </h2>
            <p className="text-slate-600 text-sm">
              We provide essential, high-quality amenities to ensure a comfortable and hassle-free stay.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_FACILITIES.map((facility) => (
              <div 
                key={facility.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-900/30 transition-all space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-amber-400 transition-colors">
                  {getFacilityIcon(facility.iconName)}
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-emerald-900 transition-colors">
                    {facility.title}
                  </h3>
                  {facility.highlightText && (
                    <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded inline-block my-1">
                      {facility.highlightText}
                    </span>
                  )}
                  <p className="text-slate-600 text-xs leading-relaxed mt-1">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5 — WHY STAY WITH US */}
      <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Supporting Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-800 group">
                <img
                  src="https://i.pinimg.com/736x/91/35/ac/9135ac758f5547e7296bc2b73613ace3.jpg"
                  alt="Why Stay With Us - The Guest House Islamabad"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="bg-amber-500 text-emerald-950 text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    Islamabad Hospitality
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    Tranquil Surroundings & Prompt Service
                  </h3>
                </div>
              </div>
            </div>

            {/* Highlights List Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-900 px-3 py-1 rounded-md border border-emerald-800 inline-block">
                  Guest Choice
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Why Stay With Us
                </h2>
                <p className="text-emerald-100/80 text-sm">
                  We focus on the fundamentals that make every stay pleasant and memorable.
                </p>
              </div>

              <div className="space-y-4">
                {WHY_STAY_POINTS.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/80">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base">
                        {point.title}
                      </h3>
                      <p className="text-xs text-emerald-200/80 leading-relaxed mt-1">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SECTION 6 — LOCATION & CALL TO ACTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Address & Map Card */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-lg space-y-6 flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Guest House Address</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Located in Peaceful F-15/2, Islamabad
                </h3>

                <p className="text-slate-700 text-sm font-semibold bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              {/* Distances Table */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Nearby Key Locations & Travel Times:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {ISLAMABAD_LANDMARKS.slice(0, 4).map((lm, i) => (
                    <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="font-medium text-slate-800">{lm.name}</span>
                      <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        {lm.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Preview Graphic Box */}
              <div className="rounded-xl overflow-hidden border border-slate-200 relative h-48 bg-slate-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80" 
                  alt="Islamabad Map Preview" 
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center shadow-lg animate-bounce mb-2">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-sm bg-slate-900/80 px-3 py-1 rounded-full border border-white/20">
                    The Guest House Islamabad (F-15/2)
                  </span>
                </div>
              </div>

            </div>

            {/* Strong Call to Action Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-white p-8 rounded-2xl shadow-xl border border-amber-500/30 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-800/80 px-3 py-1 rounded-md border border-amber-400/30 inline-block">
                  Ready to Visit?
                </span>

                <h3 className="font-serif text-3xl font-bold text-white leading-tight">
                  Plan Your Comfortable Stay in Islamabad
                </h3>

                <p className="text-emerald-100/90 text-sm leading-relaxed">
                  Book directly with us for guaranteed room availability, peaceful surroundings, and attentive guest service in Islamabad.
                </p>

                <div className="space-y-2 pt-2 text-xs text-amber-200">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Instant room availability check</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>No pre-payment required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>24/7 Phone & WhatsApp support</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-emerald-800">
                <button
                  onClick={() => onNavigate('contact-us')}
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-base transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
