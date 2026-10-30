import { Sparkles, Heart, Award, Check } from 'lucide-react';
import heroOriginal from '../assets/hero_original.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#e8e2d4] border-t border-[#2c2825]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait & Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#2c2825]/15 bg-[#ebe5d8]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={heroOriginal}
                  alt="Sapna Maheshwari Portrait"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              </div>
              <div className="p-4 bg-[#ebe5d8] border-t border-[#2c2825]/10 flex items-center justify-between">
                <div>
                  <span className="font-editorial text-sm font-bold block text-[#2c2825]">
                    Sapna Maheshwari
                  </span>
                  <span className="text-[11px] font-outfit uppercase tracking-widest text-[#2c2825]/60 block">
                    Beauty Director & Editorial Lead
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#ec5395]">
                  <Heart className="w-4 h-4 fill-[#ec5395]" />
                  <span className="text-xs font-semibold">8+ Yrs Exp</span>
                </div>
              </div>
            </div>

            {/* Floating stamp */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 rounded-xl bg-[#2c2825] text-[#ebe5d8] shadow-xl border border-white/10 max-w-[200px]">
              <span className="font-handwriting text-2xl text-[#ec5395] block leading-none">
                &ldquo;Enhance, never mask&rdquo;
              </span>
              <span className="text-[10px] font-outfit uppercase tracking-wider opacity-75 mt-1 block">
                The Sapna Promise
              </span>
            </div>
          </div>

          {/* Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec5395]/15 text-[#ec5395] text-xs font-semibold uppercase tracking-wider font-outfit">
              <Sparkles className="w-3.5 h-3.5" /> Meet the Artist
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c2825] leading-tight">
              Crafting timeless elegance with modern risograph soul.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2c2825]/80 leading-relaxed font-sans">
              <p>
                Trained across premier academies in London and Mumbai, Sapna Maheshwari has spent over eight years sculpting runway faces, dressing bridal royalty, and directing high-concept beauty shoots for magazines like <em>Vogue, Harper&apos;s Bazaar,</em> and <em>Elle</em>.
              </p>
              <p>
                Her philosophy balances the drama of editorial lighting with the delicate truth of real human skin. Instead of heavy layers, she uses custom skin-cocktails, micro-concealing, and light-reflecting powders that breathe in 40°C humidity and look breathtaking in daylight and candlelight alike.
              </p>
            </div>

            {/* Four Pillar Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 rounded-full bg-[#ec5395] text-white">
                    <Check className="w-3 h-3" />
                  </div>
                  <h4 className="font-outfit text-xs uppercase font-bold tracking-wider text-[#2c2825]">
                    Luxury Vanity Kit
                  </h4>
                </div>
                <p className="text-xs text-[#2c2825]/70">
                  Curated exclusively with Pat McGrath, Charlotte Tilbury, Tom Ford, and Chanel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#ebe5d8] border border-[#2c2825]/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 rounded-full bg-[#ec5395] text-white">
                    <Award className="w-3 h-3" />
                  </div>
                  <h4 className="font-outfit text-xs uppercase font-bold tracking-wider text-[#2c2825]">
                    Global Destinations
                  </h4>
                </div>
                <p className="text-xs text-[#2c2825]/70">
                  Available for bookings across Mumbai, Delhi, Udaipur, Lake Como, and Dubai.
                </p>
              </div>
            </div>

            {/* Handwritten Signature */}
            <div className="pt-4 flex items-center justify-between border-t border-[#2c2825]/10">
              <div>
                <span className="font-handwriting text-3xl text-[#2c2825] block -rotate-2">
                  Sapna Maheshwari
                </span>
                <span className="text-[11px] font-outfit uppercase tracking-widest text-[#2c2825]/50 block">
                  Signature Artistry • Mumbai & Beyond
                </span>
              </div>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-[#2c2825] hover:bg-[#1a1816] text-[#ebe5d8] text-xs font-semibold uppercase tracking-wider transition-all"
              >
                Inquire For Dates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
