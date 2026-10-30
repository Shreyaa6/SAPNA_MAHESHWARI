import { Heart, Mail, Phone, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2c2825] text-[#ebe5d8] py-16 relative overflow-hidden border-t border-[#ec5395]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Handwritten Note */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-2xl font-bold tracking-tight text-white block">
              SAPNA MAHESHWARI
            </span>
            <p className="text-xs font-outfit uppercase tracking-widest text-[#ebe5d8]/60">
              Celebrity & Editorial Makeup Artist
            </p>
            <div className="pt-2">
              <span className="font-handwriting text-3xl text-[#ec5395] block -rotate-2">
                &ldquo;let me be your guide.&rdquo;
              </span>
              <span className="text-[11px] font-outfit uppercase tracking-wider text-[#ebe5d8]/50 mt-1 block">
                Mumbai • Delhi • Jaipur • Lake Como • London
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white font-outfit mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-outfit text-[#ebe5d8]/75">
              <a href="#" className="hover:text-[#ec5395] transition-colors">Hero Artwork</a>
              <a href="#work" className="hover:text-[#ec5395] transition-colors">Lookbook</a>
              <a href="#services" className="hover:text-[#ec5395] transition-colors">Bridal Services</a>
              <a href="#about" className="hover:text-[#ec5395] transition-colors">About Sapna</a>
              <a href="#testimonials" className="hover:text-[#ec5395] transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-[#ec5395] transition-colors">Contact / Book</a>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white font-outfit mb-3">
              Connect With Studio
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#ec5395] text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:studio@sapnamaheshwari.com"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#ec5395] text-white transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#ec5395] text-white transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <div className="text-xs text-[#ebe5d8]/60 font-sans pt-1">
              <span>Studio: bookings@sapnamaheshwari.com</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-outfit text-[#ebe5d8]/60">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Sapna Maheshwari. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-[#ec5395] fill-[#ec5395]" /> for Sapna
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#ebe5d8]/75 hover:text-[#ec5395] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
