import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide, onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ebe5d8]/95 backdrop-blur-md border-b border-[#2c2825]/10 transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-15 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 text-left group">
          <div className="w-7 h-7 rounded-full bg-[#ec5395] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-2xs group-hover:scale-105 transition-transform">
            SM
          </div>
          <div>
            <span className="font-editorial text-base sm:text-lg tracking-tight font-bold text-[#2c2825] block leading-none">
              SAPNA MAHESHWARI
            </span>
            <span className="text-[9px] tracking-widest uppercase font-outfit text-[#2c2825]/60 block mt-0.5">
              Makeup Artist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-widest font-outfit font-medium text-[#2c2825]/80">
          <a
            href="#works-gallery"
            className="hover:text-[#ec5395] transition-colors py-1 hover:border-b-2 hover:border-[#ec5395]"
          >
            Works
          </a>
          <a
            href="#services-reviews"
            className="hover:text-[#ec5395] transition-colors py-1 hover:border-b-2 hover:border-[#ec5395]"
          >
            Services & Reviews
          </a>
          <a
            href="#about"
            className="hover:text-[#ec5395] transition-colors py-1 hover:border-b-2 hover:border-[#ec5395]"
          >
            About
          </a>
          <button
            onClick={onOpenGuide}
            className="hover:text-[#ec5395] transition-colors py-1 cursor-pointer font-semibold text-[#ec5395]"
          >
            Guide
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onBookClick}
            className="px-5 py-2 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-[11px] font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2c2825] hover:text-[#ec5395] focus:outline-hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ebe5d8] border-b border-[#2c2825]/10 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3 text-xs font-outfit uppercase tracking-wider text-[#2c2825]">
            <a
              href="#works-gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ec5395]"
            >
              Works
            </a>
            <a
              href="#services-reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ec5395]"
            >
              Services & Reviews
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#ec5395]"
            >
              About
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="py-1.5 text-left text-[#ec5395] font-semibold"
            >
              Guide Tour
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="mt-2 w-full py-2.5 rounded-full bg-[#ec5395] text-white font-semibold text-xs uppercase tracking-wider"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
