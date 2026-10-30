import { useState } from 'react';
import { Sparkles, Eye, X, ArrowUpRight } from 'lucide-react';

interface LookItem {
  id: number;
  title: string;
  category: 'Bridal' | 'Editorial' | 'Red Carpet' | 'Clean Glam';
  image: string;
  client: string;
  description: string;
  techniques: string[];
}

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedLook, setSelectedLook] = useState<LookItem | null>(null);

  const looks: LookItem[] = [
    {
      id: 1,
      title: 'The Royal Rajputana Bride',
      category: 'Bridal',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      client: 'Vogue Weddings Feature',
      description: 'Luminous honey-gold skin prep, winged velvet kohl, and soft rose terracotta lips to match antique zardozi lehengas.',
      techniques: ['HD Airbrush Complexion', 'Waterproof Kohl', 'Antique Gold Foil Lid'],
    },
    {
      id: 2,
      title: 'Sunlit Mirage Editorial',
      category: 'Editorial',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
      client: "Harper's Bazaar Cover Story",
      description: 'High-gloss dewy glass cheekbones, brushed-up feathered brows, and editorial glass tint finish under harsh studio lighting.',
      techniques: ['Glass Skin Hydration', 'Feathered Micro-Brows', 'Editorial Wet Finish'],
    },
    {
      id: 3,
      title: 'Midnight Velvet Glam',
      category: 'Red Carpet',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
      client: 'Film & Awards Gala',
      description: 'Sculpted cheek contours, deep plum velvet matte lip, and dramatic smoked almond eyes designed for red carpet flash photography.',
      techniques: ['Flash-Proof Contour', 'Matte Lip Stain', 'Custom Mink Lashes'],
    },
    {
      id: 4,
      title: 'Dewy Minimalist Aura',
      category: 'Clean Glam',
      image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=900&q=80',
      client: 'Luxury Skincare Campaign',
      description: 'Barely-there sheer coverage highlighting freckles and natural bone structure with cream blush and peach hydration glaze.',
      techniques: ['Skin Tint Veil', 'Cream Cheek Flush', 'Hydrating Lip Oil'],
    },
    {
      id: 5,
      title: 'Cannes Riviera Chic',
      category: 'Red Carpet',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
      client: 'European Film Festival',
      description: 'Sun-kissed bronze complexion with graphic floating espresso liner and pearlescent champagne inner corners.',
      techniques: ['Liquid Bronzer Sculpt', 'Graphic Waterline', 'Champagne Pearl Dust'],
    },
    {
      id: 6,
      title: 'Avant-Garde Chroma Dream',
      category: 'Editorial',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
      client: 'Fashion Week Paris Runways',
      description: 'Daring rose quartz foil placement, bleeding blush contour, and micro-shimmer accents creating living runway art.',
      techniques: ['Pigment Stippling', 'Blush Draping', 'Foil Stamping'],
    },
  ];

  const categories = ['All', 'Bridal', 'Editorial', 'Red Carpet', 'Clean Glam'];

  const filteredLooks = activeTab === 'All'
    ? looks
    : looks.filter((item) => item.category === activeTab);

  return (
    <section id="work" className="py-24 bg-[#ebe5d8] border-t border-[#2c2825]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase font-outfit text-[#ec5395] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Selected Artistry
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#2c2825] mt-2 mb-4">
            Lookbook & Editorial Works
          </h2>
          <p className="text-sm text-[#2c2825]/75 font-sans leading-relaxed">
            Every look is an intimate conversation between light, facial architecture, and skin texture. Crafted to stun in person and translate flawlessly on high-resolution cameras.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-outfit uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? 'bg-[#2c2825] text-[#ebe5d8] shadow-md'
                  : 'bg-[#e4ddd0] text-[#2c2825]/80 hover:bg-[#ded6c7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => setSelectedLook(look)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#e4ddd0]/80 border border-[#2c2825]/10 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ded6c7]">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="inline-flex items-center gap-1 text-white text-xs font-medium uppercase tracking-wider font-outfit">
                    <Eye className="w-4 h-4 text-[#ec5395]" /> Inspect Look Details
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#ebe5d8]/90 backdrop-blur-xs text-[10px] font-semibold uppercase tracking-wider font-outfit text-[#2c2825] shadow-xs">
                    {look.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-[11px] font-outfit uppercase tracking-widest text-[#ec5395] font-semibold mb-1">
                    {look.client}
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-[#2c2825] group-hover:text-[#ec5395] transition-colors">
                    {look.title}
                  </h3>
                  <p className="text-xs text-[#2c2825]/70 mt-2 line-clamp-2">
                    {look.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2c2825]/10 flex items-center justify-between text-xs text-[#2c2825]/75">
                  <span className="text-[11px] font-outfit">{look.techniques[0]}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ec5395] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedLook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#ebe5d8] border border-[#2c2825]/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setSelectedLook(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/70 hover:bg-white text-[#2c2825] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-1/2 aspect-[4/5] bg-[#ded6c7]">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ec5395]/15 text-[#ec5395] text-[10px] font-bold uppercase tracking-wider font-outfit">
                  {selectedLook.category}
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#2c2825] mt-3">
                  {selectedLook.title}
                </h3>
                <p className="text-xs font-semibold text-[#2c2825]/60 uppercase tracking-widest font-outfit mt-1">
                  {selectedLook.client}
                </p>

                <p className="text-sm text-[#2c2825]/85 mt-4 leading-relaxed font-sans">
                  {selectedLook.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#2c2825] font-outfit mb-2">
                    Key Artistry Techniques
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLook.techniques.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#e4ddd0] text-xs font-medium text-[#2c2825]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2c2825]/10 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setSelectedLook(null)}
                  className="w-full py-3 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs font-semibold uppercase tracking-wider text-center transition-all shadow-md"
                >
                  Request Look For Your Event
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
