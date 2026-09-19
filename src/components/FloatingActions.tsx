import React from 'react';
import { BUSINESS_INFO } from '../data/guestHouseData';
import { Phone, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-3">
      
      {/* WhatsApp Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border-2 border-white group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Inquiry
        </span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 flex items-center justify-center shadow-xl hover:scale-110 transition-all border-2 border-white group relative"
        aria-label="Call Phone Number"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call {BUSINESS_INFO.phone}
        </span>
      </a>

    </div>
  );
};
