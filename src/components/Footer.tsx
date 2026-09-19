import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { Phone, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/60">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNav('home')} 
              className="group text-left focus:outline-none"
              aria-label="The Guest House Islamabad Home"
            >
              <Logo size="md" variant="light" />
            </button>

            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Providing comfortable, clean, and peaceful accommodation for guests, business travelers, and families visiting Islamabad, Pakistan.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-amber-300 font-medium bg-emerald-900/60 p-2.5 rounded-md border border-emerald-800">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Verified Guest House • Peaceful Environment</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Pages */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 pb-1 border-b border-amber-500/30 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="flex items-center space-x-2 text-emerald-100/80 hover:text-amber-300 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rooms-and-services')}
                  className="flex items-center space-x-2 text-emerald-100/80 hover:text-amber-300 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>Rooms & Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="flex items-center space-x-2 text-emerald-100/80 hover:text-amber-300 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>Photo Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact-us')}
                  className="flex items-center space-x-2 text-emerald-100/80 hover:text-amber-300 transition-colors group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 pb-1 border-b border-amber-500/30 inline-block">
              Contact Information
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-start space-x-3 text-emerald-100/90 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Call / Inquiries:</span>
                  <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-start space-x-3 text-emerald-100/90">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="block font-semibold text-white text-sm mb-0.5">Address:</span>
                  {BUSINESS_INFO.address}
                </div>
              </div>

              <div className="flex items-start space-x-3 text-emerald-100/90">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-semibold text-white text-sm">Timings:</span>
                  Check-in: {BUSINESS_INFO.checkInTime} | Check-out: {BUSINESS_INFO.checkOutTime}
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Action & WhatsApp */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white mb-4 pb-1 border-b border-amber-500/30 inline-block">
              Guest Services
            </h4>
            
            <p className="text-xs text-emerald-100/80">
              Need immediate booking assistance or have room inquiries? Contact us directly or book online.
            </p>

            <div className="space-y-2.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded bg-amber-500 text-emerald-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow flex items-center justify-center space-x-2"
              >
                <span>Book Your Stay Now</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded bg-emerald-800 text-white font-medium text-xs hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 border border-emerald-600"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Footer Note */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-emerald-200/60 gap-4">
          <p>© {new Date().getFullYear()} The Guest House Islamabad. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Clean & Comfortable Guest Accommodation</span>
            <span>•</span>
            <span>Islamabad, Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
