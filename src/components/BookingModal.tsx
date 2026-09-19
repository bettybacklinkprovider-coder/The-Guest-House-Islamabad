import React, { useState, useEffect } from 'react';
import { ROOMS, BUSINESS_INFO } from '../data/guestHouseData';
import { BookingFormData } from '../types';
import { X, Calendar, Users, Phone, User, Mail, MessageSquare, CheckCircle, Info, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedRoomId,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDateStr = (date: Date) => date.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    checkInDate: formatDateStr(tomorrow),
    checkOutDate: formatDateStr(dayAfter),
    guestsCount: 2,
    selectedRoomId: preSelectedRoomId || ROOMS[1].id,
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedRoomId) {
      setFormData(prev => ({ ...prev, selectedRoomId: preSelectedRoomId }));
    }
  }, [preSelectedRoomId]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find(r => r.id === formData.selectedRoomId) || ROOMS[0];

  // Calculate stay duration
  const checkIn = new Date(formData.checkInDate);
  const checkOut = new Date(formData.checkOutDate);
  const diffTime = checkOut.getTime() - checkIn.getTime();
  const nightsCount = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  const estimatedTotal = selectedRoom.pricePKR * nightsCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refNumber = 'GHI-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refNumber);
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello The Guest House Islamabad,\n\nI want to book an accommodation inquiry:\n` +
      `*Ref:* ${bookingRef}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Room:* ${selectedRoom.name}\n` +
      `*Check-in:* ${formData.checkInDate}\n` +
      `*Check-out:* ${formData.checkOutDate} (${nightsCount} Night${nightsCount > 1 ? 's' : ''})\n` +
      `*Guests:* ${formData.guestsCount}\n` +
      `*Estimated Cost:* PKR ${estimatedTotal.toLocaleString()}\n` +
      (formData.specialRequests ? `*Note:* ${formData.specialRequests}` : '')
    );
    window.open(`https://wa.me/923043633536?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-emerald-900/20 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white p-6 sticky top-0 z-10 flex justify-between items-start border-b border-amber-500/40">
          <div className="flex items-start space-x-3">
            <Logo size="md" variant="light" showText={false} />
            <div>
              <div className="inline-flex items-center space-x-2 text-xs text-amber-400 font-semibold uppercase tracking-widest mb-0.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Reservation Inquiry</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">
                Book Your Stay at The Guest House
              </h2>
              <p className="text-xs text-emerald-200/80 mt-1">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </div>
          
          <button
            onClick={resetAndClose}
            className="text-emerald-300 hover:text-white p-1 rounded-full hover:bg-emerald-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Inquiry Received
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Your reservation request reference number is <strong className="text-emerald-900">{bookingRef}</strong>. Our guest desk team will contact you shortly on <strong>{formData.phoneNumber}</strong> to confirm room availability.
                </p>
              </div>

              {/* Booking Details Summary */}
              <div className="bg-slate-50 rounded-xl p-4 text-left border border-slate-200 max-w-md mx-auto text-xs space-y-2">
                <div className="flex justify-between border-b pb-1.5 font-semibold text-slate-700">
                  <span>Selected Accommodation:</span>
                  <span className="text-emerald-900">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5 text-slate-600">
                  <span>Dates:</span>
                  <span>{formData.checkInDate} to {formData.checkOutDate} ({nightsCount} night{nightsCount > 1 ? 's' : ''})</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-slate-900 pt-1">
                  <span>Estimated Room Charge:</span>
                  <span className="text-emerald-800">PKR {estimatedTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Send via WhatsApp ({BUSINESS_INFO.phone})</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-5 py-3 rounded-xl border border-emerald-800 text-emerald-900 font-bold text-sm hover:bg-emerald-50 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call Desk Now</span>
                </a>
              </div>

              <button
                onClick={resetAndClose}
                className="text-xs text-slate-500 underline hover:text-slate-800 pt-2 block mx-auto"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Room Selection Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Room Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS.map(room => {
                    const isSelected = room.id === formData.selectedRoomId;
                    return (
                      <button
                        type="button"
                        key={room.id}
                        onClick={() => setFormData(prev => ({ ...prev, selectedRoomId: room.id }))}
                        className={`p-3 rounded-xl border text-left transition-all relative flex space-x-3 items-center ${
                          isSelected
                            ? 'border-emerald-800 bg-emerald-50/80 ring-2 ring-emerald-800/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <img 
                          src={room.image} 
                          alt={room.name} 
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold text-sm block truncate text-slate-900">
                            {room.name}
                          </span>
                          <span className="text-xs font-bold text-emerald-800 block">
                            PKR {room.pricePKR.toLocaleString()} <span className="text-[10px] text-slate-500 font-normal">/ night</span>
                          </span>
                          <span className="text-[11px] text-slate-500 truncate block">
                            {room.capacity}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Check-In Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkInDate}
                    onChange={e => setFormData(prev => ({ ...prev, checkInDate: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Check-Out Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOutDate}
                    onChange={e => setFormData(prev => ({ ...prev, checkOutDate: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={formData.guestsCount}
                    onChange={e => setFormData(prev => ({ ...prev, guestsCount: Number(e.target.value) }))}
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Family Group</option>
                  </select>
                </div>
              </div>

              {/* Guest Personal Information */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Guest Contact Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Phone / Mobile Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 0000000"
                        value={formData.phoneNumber}
                        onChange={e => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-600 mb-1">Special Notes / Requests</label>
                    <input
                      type="text"
                      placeholder="e.g. Early check-in, ground floor room..."
                      value={formData.specialRequests}
                      onChange={e => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Estimation Summary Box */}
              <div className="bg-emerald-950 text-white p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-emerald-200">
                    Stay Duration: {nightsCount} Night{nightsCount > 1 ? 's' : ''} ({selectedRoom.name})
                  </span>
                  <div className="font-serif text-lg font-bold text-amber-400">
                    Est. Total: PKR {estimatedTotal.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-emerald-300/80">
                    No payment required now. Pay directly at the guest house upon arrival.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-sm transition-colors shadow-lg shrink-0"
                >
                  Submit Inquiry
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
