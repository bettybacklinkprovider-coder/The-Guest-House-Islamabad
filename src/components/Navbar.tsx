import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { Phone, Menu, X, CalendarCheck, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'rooms-and-services', label: 'Rooms & Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-2 text-center sm:text-left">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-md sm:max-w-none">
              F-15/2, Jammu Kashmir Housing Scheme, Islamabad, Pakistan
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center space-x-1.5 hover:text-amber-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-emerald-700 hidden sm:inline">|</span>
            <span className="text-emerald-300 font-medium text-[11px] bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-800">
              24/7 Guest Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
            : 'bg-white border-b border-emerald-900/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none"
            aria-label="The Guest House Islamabad Home"
          >
            <Logo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-emerald-900 font-semibold bg-emerald-50'
                      : 'text-slate-700 hover:text-emerald-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-md border border-emerald-800/20 text-emerald-900 hover:bg-emerald-50 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Now</span>
            </a>
            
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-emerald-900 text-amber-300 hover:bg-emerald-800 font-medium text-sm shadow-sm hover:shadow transition-all border border-amber-400/30 active:scale-95"
            >
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-md bg-emerald-900 text-amber-400 text-xs font-semibold flex items-center space-x-1"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-emerald-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-emerald-900 text-amber-300 font-semibold'
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber-400"></span>}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-emerald-900 text-emerald-950 font-semibold text-center hover:bg-emerald-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg bg-emerald-900 text-amber-300 font-bold text-center shadow-md flex items-center justify-center space-x-2"
              >
                <CalendarCheck className="w-5 h-5 text-amber-400" />
                <span>Book Your Stay Now</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
