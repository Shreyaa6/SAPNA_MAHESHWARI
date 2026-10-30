import { useState, type FormEvent } from 'react';
import { Calendar, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Bridal Couture',
    eventDate: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#ebe5d8] border-t border-[#2c2825]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase font-outfit text-[#ec5395] inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Direct Inquiry
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#2c2825] mt-2 mb-4">
            Reserve Your Date With Sapna
          </h2>
          <p className="text-sm text-[#2c2825]/75 font-sans leading-relaxed">
            Please share the details of your upcoming event or campaign. My studio team responds within 24 hours with package availability and next steps.
          </p>
        </div>

        <div className="rounded-2xl bg-[#ded6c7]/80 border border-[#2c2825]/15 p-6 sm:p-10 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#ec5395]/20 text-[#ec5395] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#2c2825]">
                Inquiry Received With Love!
              </h3>
              <p className="text-sm text-[#2c2825]/80 max-w-md mx-auto">
                Thank you, <strong className="text-[#2c2825]">{formData.name}</strong>! Sapna&apos;s team has received your request for <strong>{formData.eventType}</strong> on <strong>{formData.eventDate || 'your date'}</strong>. We will get back to your email shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-[#2c2825]/20 text-xs font-outfit uppercase tracking-wider text-[#2c2825] hover:bg-[#ebe5d8]"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors placeholder:text-[#2c2825]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. radhika@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors placeholder:text-[#2c2825]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors placeholder:text-[#2c2825]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                    Service Required
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors"
                  >
                    <option value="Bridal Couture">Bridal Couture</option>
                    <option value="Editorial & Campaign">Editorial & Campaign</option>
                    <option value="Red Carpet / Event">Red Carpet / Event Glam</option>
                    <option value="1-on-1 Masterclass">1-on-1 Masterclass</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                  Event Location / City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. The Oberoi Udaivilas, Udaipur (or Mumbai studio)"
                  className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors placeholder:text-[#2c2825]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-outfit uppercase tracking-wider text-[#2c2825] mb-2 font-semibold">
                  Tell Sapna About Your Vision & Number of Functions
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your outfit designer, event timings, how many guests need styling, or any specific reference looks..."
                  className="w-full px-4 py-3 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/15 text-sm text-[#2c2825] focus:outline-hidden focus:border-[#ec5395] transition-colors placeholder:text-[#2c2825]/40"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Consultation Request</span>
                </button>

                <div className="flex items-center gap-3 text-xs text-[#2c2825]/70">
                  <span>Or quick inquiry:</span>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#ec5395] font-semibold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
