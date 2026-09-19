import React, { useState } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, ROOMS, ISLAMABAD_LANDMARKS } from '../data/guestHouseData';
import { Phone, MapPin, Mail, Calendar, Users, Send, CheckCircle, MessageSquare, Clock, Hotel, Navigation } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDateStr = (date: Date) => date.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    checkInDate: formatDateStr(tomorrow),
    checkOutDate: formatDateStr(dayAfter),
    guestsCount: 2,
    selectedRoom: 'Deluxe Room',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRef = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    setRefNo(newRef);
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello The Guest House Islamabad,\n\nI am sending a website inquiry:\n` +
      `*Ref:* ${refNo}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phoneNumber}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Dates:* ${formData.checkInDate} to ${formData.checkOutDate}\n` +
      `*Guests:* ${formData.guestsCount}\n` +
      `*Preferred Room:* ${formData.selectedRoom}\n` +
      (formData.message ? `*Message:* ${formData.message}` : '')
    );
    window.open(`https://wa.me/923043633536?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Banner */}
      <div className="bg-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-900 px-3.5 py-1 rounded-full border border-amber-400/30 inline-block">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about your stay, room availability, or directions? Call us directly, send an inquiry, or visit our guest house in F-15/2 Islamabad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Business Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Hotel className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Comfortable & Peaceful Guest Accommodation
              </p>
            </div>
            <p className="text-xs text-slate-600 border-t border-slate-100 pt-2">
              Serving solo travelers, families, and business guests visiting Islamabad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Phone Number
              </h3>
              <a 
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="text-base font-bold text-emerald-900 hover:text-emerald-700 block mt-0.5"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-slate-600 border-t border-slate-100 pt-2">
              Available 24/7 for room inquiries and bookings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Address & Location
              </h3>
              <p className="text-xs text-slate-700 font-medium leading-relaxed mt-0.5">
                {BUSINESS_INFO.address}
              </p>
            </div>
            <p className="text-xs text-slate-600 border-t border-slate-100 pt-2">
              Located in F-15/2, Jammu Kashmir Housing Scheme.
            </p>
          </div>

        </div>


        {/* Contact Form & Side Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 inline-block mb-1">
                Reservation & General Inquiries
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Send Us an Inquiry
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Fill out the details below and our guest reception will respond promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-900 text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Reference ID: <strong className="text-emerald-900">{refNo}</strong>. Thank you <strong>{formData.fullName}</strong>, we have received your inquiry for <strong>{formData.selectedRoom}</strong>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-300" />
                    <span>Send via WhatsApp ({BUSINESS_INFO.phone})</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+92 304 0000000"
                      value={formData.phoneNumber}
                      onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Check-in Date</label>
                    <input
                      type="date"
                      required
                      value={formData.checkInDate}
                      onChange={e => setFormData({ ...formData, checkInDate: e.target.value })}
                      className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Check-out Date</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOutDate}
                      onChange={e => setFormData({ ...formData, checkOutDate: e.target.value })}
                      className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Number of Guests</label>
                    <select
                      value={formData.guestsCount}
                      onChange={e => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
                      className="w-full px-2.5 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Family</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Room Type</label>
                  <select
                    value={formData.selectedRoom}
                    onChange={e => setFormData({ ...formData, selectedRoom: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  >
                    {ROOMS.map(r => (
                      <option key={r.id} value={r.name}>
                        {r.name} — PKR {r.pricePKR.toLocaleString()}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your stay timing or any specific requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-800 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-amber-300 font-bold text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Send Inquiry</span>
                </button>

              </form>
            )}

          </div>


          {/* Side Info & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-amber-500/30 space-y-4">
              <h3 className="font-serif text-xl font-bold text-white">
                Direct Contact Desk
              </h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                For urgent room reservations or late check-ins, call or WhatsApp our staff directly.
              </p>

              <div className="space-y-3 text-xs pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="flex items-center space-x-3 bg-emerald-900/80 p-3 rounded-xl border border-emerald-800 hover:bg-emerald-800 transition-colors"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-300 block">Phone Call Hotline:</span>
                    <span className="font-bold text-sm text-white">{BUSINESS_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-emerald-900/80 p-3 rounded-xl border border-emerald-800 hover:bg-emerald-800 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-300 block">WhatsApp Direct:</span>
                    <span className="font-bold text-sm text-white">Chat on WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Timings & House Policies */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs text-slate-700">
              <h4 className="font-serif font-bold text-slate-900 text-sm">
                Check-in & Guest Policies
              </h4>
              <ul className="space-y-2 list-disc list-inside text-slate-600">
                <li>Check-in: 12:00 PM | Check-out: 11:00 AM</li>
                <li>Valid Original CNIC or Passport required at check-in</li>
                <li>Family-friendly & peaceful environment maintained</li>
                <li>Free parking available inside compound</li>
              </ul>
            </div>

          </div>

        </div>


        {/* GOOGLE MAPS / LOCATION SECTION */}
        <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200 inline-block mb-1">
              Interactive Location
            </span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Google Maps & Location
            </h2>
            <p className="text-slate-600 text-xs mt-1">
              {BUSINESS_INFO.address}
            </p>
          </div>

          {/* Styled Custom Map Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-300 shadow-inner h-96 bg-slate-100">
            <iframe
              title="The Guest House Islamabad Location Map"
              src="https://maps.google.com/maps?q=F-15/2%20Jammu%20Kashmir%20Housing%20Scheme%20Islamabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200 text-xs max-w-xs space-y-1">
              <div className="flex items-center space-x-1.5 font-bold text-emerald-950">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>The Guest House Islamabad</span>
              </div>
              <p className="text-[11px] text-slate-600">
                F-15/2, Jammu Kashmir Housing Scheme, Islamabad
              </p>
            </div>
          </div>

          {/* Distance quick reference */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {ISLAMABAD_LANDMARKS.slice(0, 4).map((lm, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                <span className="block font-bold text-slate-900 text-xs truncate">{lm.name}</span>
                <span className="text-[11px] font-semibold text-emerald-800">{lm.distance} ({lm.driveTime})</span>
              </div>
            ))}
          </div>
        </section>


        {/* CALL TO ACTION SECTION */}
        <section className="bg-emerald-950 text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 border-2 border-amber-500/40">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
            Have Questions About Your Stay?
          </h2>
          <p className="text-slate-200 text-sm max-w-lg mx-auto">
            Our guest assistance team is always ready to answer questions regarding room rates, long stays, and directions.
          </p>

          <div className="pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-lg shadow-xl transition-all transform hover:scale-105"
            >
              <Phone className="w-6 h-6 text-emerald-950" />
              <span>Call Now: +92 304 3633536</span>
            </a>
          </div>
        </section>

      </div>

    </div>
  );
};
