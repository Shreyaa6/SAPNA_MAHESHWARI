import { Sparkles, Check, ArrowRight, Star } from 'lucide-react';

interface ServicesProps {
  onBookClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const packages = [
    {
      title: 'The Signature Bridal Couture',
      subtitle: 'Complete bespoke experience for the modern bride',
      popular: true,
      features: [
        'Detailed In-Person/Virtual Skin & Moodboard Consultation',
        'Bridal Day HD/Airbrush Makeup + Hair Architecture',
        'Luxury Pre-Event Skin Glow Ritual (Hydra-infusion prep)',
        'Dupatta Draping, Jewelry Setting & Veil Fixing',
        'Custom Bride Emergency Touch-Up Kit (Lashes, Lip, Blotting)',
        'On-location touch-ups until the pheras/first look',
      ],
      idealFor: 'Brides seeking effortless, tear-proof royal radiance',
    },
    {
      title: 'Editorial & Campaign Day',
      subtitle: 'High-fashion lookbooks, runways & magazine covers',
      popular: false,
      features: [
        'Half Day (up to 4 hours) or Full Day (up to 8 hours) coverage',
        'Multiple look transitions & creative moodboard execution',
        'High-definition camera calibrated for studio strobe & sunlight',
        'Skin sheen management & micro-contouring on set',
        'Seamless collaboration with creative directors & stylists',
      ],
      idealFor: 'Brands, modeling agencies & fashion designers',
    },
    {
      title: 'Red Carpet & Cocktail Glam',
      subtitle: 'Statement evening glam for galas & milestone events',
      popular: false,
      features: [
        'Full evening glam transformation (1.5 - 2 hours)',
        'Custom-blended mink or faux-mink cluster lashes',
        'Decolletage & body shimmer highlighter application',
        '18-hour transfer-resistant setting seal',
        'Includes signature hair styling collaboration',
      ],
      idealFor: 'Cocktail receptions, sangeets, red carpets & award nights',
    },
    {
      title: 'Private 1-on-1 Masterclass',
      subtitle: 'Master the art of sculpting your unique bone structure',
      popular: false,
      features: [
        '3-Hour comprehensive hands-on private studio session',
        'Vanity Audit: We edit your existing kit and identify gaps',
        'Day-to-Night skin-first application techniques',
        'Mastering eyeliner symmetry, skin matching & soft sculpting',
        'Curated shopping wishlist tailored to your undertone',
      ],
      idealFor: 'Beauty enthusiasts & aspiring professional artists',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#ebe5d8] border-t border-[#2c2825]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase font-outfit text-[#ec5395] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Artistry Experiences
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c2825] mt-2 mb-4">
            Services & Investment
          </h2>
          <p className="text-sm text-[#2c2825]/75 font-sans leading-relaxed">
            Every booking is handled with meticulous care, highest hygiene standards, and world-class beauty products. Destination travel fees quoted upon inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 border ${
                pkg.popular
                  ? 'bg-[#ded6c7]/90 border-[#ec5395] shadow-xl shadow-[#ec5395]/10'
                  : 'bg-[#e4ddd0]/70 border-[#2c2825]/10 hover:border-[#2c2825]/25 hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#ec5395] text-white text-[10px] font-bold uppercase tracking-wider font-outfit flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-white" /> Most Requested
                </div>
              )}

              <div>
                <h3 className="font-editorial text-2xl font-bold text-[#2c2825]">
                  {pkg.title}
                </h3>
                <p className="text-xs font-outfit text-[#2c2825]/70 mt-1 mb-6">
                  {pkg.subtitle}
                </p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#2c2825]/85">
                      <div className="p-0.5 rounded-full bg-[#ec5395]/20 text-[#ec5395] shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed font-sans">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#2c2825]/10">
                <div className="text-[11px] font-outfit text-[#2c2825]/60 mb-4">
                  <strong className="text-[#2c2825]">Best suited for:</strong> {pkg.idealFor}
                </div>

                <button
                  onClick={onBookClick}
                  className={`w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs ${
                    pkg.popular
                      ? 'bg-[#ec5395] hover:bg-[#d94182] text-white'
                      : 'bg-[#2c2825] hover:bg-[#1a1816] text-[#ebe5d8]'
                  }`}
                >
                  <span>Inquire For Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
