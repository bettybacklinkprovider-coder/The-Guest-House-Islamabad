import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { RoomsServicesPage } from './pages/RoomsServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'rooms-and-services') return 'rooms-and-services';
    if (hash === 'gallery') return 'gallery';
    if (hash === 'contact-us') return 'contact-us';
    return 'home';
  };

  const [activePage, setActivePage] = useState<PageId>(getPageFromHash());
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.location.hash = `#/${page === 'home' ? '' : page}`;
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomForBooking(roomId);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-800 selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page View Renderer */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'rooms-and-services' && (
          <RoomsServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {activePage === 'contact-us' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Interactive Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preSelectedRoomId={selectedRoomForBooking}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
