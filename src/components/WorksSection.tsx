import { useState } from 'react';
import { Volume2, VolumeX, X } from 'lucide-react';

// Real Videos from assets/WORKS
import videoNamita from '../assets/WORKS/video_namita_thapar.mp4';
import videoCleanContours from '../assets/WORKS/video_clean_contours.mp4';
import videoBridalEyes from '../assets/WORKS/video_bridal_eyes.mp4';
import videoSoftPinkBride from '../assets/WORKS/video_soft_pink_bride.mp4';
import videoBrideIsha from '../assets/WORKS/video_bride_isha.mp4';

// Video Thumbnails
import thumbNamita from '../assets/WORKS/video_namita_thapar_thumb.jpg';
import thumbCleanContours from '../assets/WORKS/video_clean_contours_thumb.jpg';
import thumbBridalEyes from '../assets/WORKS/video_bridal_eyes_thumb.jpg';
import thumbSoftPinkBride from '../assets/WORKS/video_soft_pink_bride_thumb.jpg';
import thumbBrideIsha from '../assets/WORKS/video_bride_isha_thumb.jpg';

// Real Photos from assets/WORKS (photo11 removed as requested)
import photo1 from '../assets/WORKS/photo_1.jpg';
import photo2 from '../assets/WORKS/photo_2.jpg';
import photo3 from '../assets/WORKS/photo_3.jpg';
import photo4 from '../assets/WORKS/photo_4.jpg';
import photo5 from '../assets/WORKS/photo_5.jpg';
import photo6 from '../assets/WORKS/photo_6.jpg';
import photo7 from '../assets/WORKS/photo_7.jpg';
import photo8 from '../assets/WORKS/photo_8.jpg';
import photo9 from '../assets/WORKS/photo_9.jpg';
import photo10 from '../assets/WORKS/photo_10.jpg';

interface WorksSectionProps {
  onBookClick: () => void;
}

interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  type: 'video' | 'photo';
  src: string;
  thumbnail?: string;
  description: string;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onBookClick }) => {
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  const [unmutedVideoId, setUnmutedVideoId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');

  // Interleaved Mix of Videos and Photos (Photo 11 removed)
  const allWorks: WorkItem[] = [
    {
      id: 1,
      title: 'Namita Thapar',
      subtitle: 'Shark Tank India Celebrity Glam',
      tag: 'Celebrity Reel',
      type: 'video',
      src: videoNamita,
      thumbnail: thumbNamita,
      description: 'Honored to have styled makeup for @namitathapar, one of the incredible sharks on Shark Tank India! Clean, sophisticated television HD glow.',
    },
    {
      id: 2,
      title: 'Clean Base & Soft Contours',
      subtitle: 'Editorial Skin Transformation',
      tag: 'Transformation Reel',
      type: 'video',
      src: videoCleanContours,
      thumbnail: thumbCleanContours,
      description: 'A clean base, soft contours, and eyes that hold attention without asking for it. Nothing loud. Nothing excessive.',
    },
    {
      id: 3,
      title: 'The Royal Heritage Bride',
      subtitle: 'Antiquity & Golden Skin Prep',
      tag: 'Couture Bride',
      type: 'photo',
      src: photo1,
      description: 'Intricate gold matha patti styling paired with velvet terracotta lips and glowing golden skin prep.',
    },
    {
      id: 4,
      title: 'Soft Defined Bridal Eyes',
      subtitle: 'Smoky Cashmere & Winged Liner',
      tag: 'Eye Artistry Reel',
      type: 'video',
      src: videoBridalEyes,
      thumbnail: thumbBridalEyes,
      description: 'Soft yet defined eyes for the royal bride. Delicate winged liner, cashmere smoke, and micro-lash placement.',
    },
    {
      id: 5,
      title: 'Ethereal Sangeet Glam',
      subtitle: 'Blush Cheeks & Diffused Kohl',
      tag: 'Occasion Beauty',
      type: 'photo',
      src: photo2,
      description: 'Glazed blush cheekbones with diffused kohl liner and a nude pink satin lip for evening celebrations.',
    },
    {
      id: 6,
      title: 'Dewy Glass Skin Minimal',
      subtitle: 'Lightweight Breathable Prep',
      tag: 'Glass Skin',
      type: 'photo',
      src: photo3,
      description: 'Breathable complexion prep that shines under natural sunlight with bespoke hydration cocktails.',
    },
    {
      id: 7,
      title: 'Soft Pink Luminous Bride',
      subtitle: 'Effortless Modern Romance',
      tag: 'Bridal Reel',
      type: 'video',
      src: videoSoftPinkBride,
      thumbnail: thumbSoftPinkBride,
      description: 'Soft pink tones, luminous skin, and minimal elegance — for the bride who loves effortless, modern beauty.',
    },
    {
      id: 8,
      title: 'Bride Isha — Pure Grace',
      subtitle: 'The Heartfelt Smile & Warmth',
      tag: 'Bride Feature Reel',
      type: 'video',
      src: videoBrideIsha,
      thumbnail: thumbBrideIsha,
      description: 'Some brides make your work beautiful. Isha is truly one of those rare gems. Her calm presence and regal warmth.',
    },
    {
      id: 9,
      title: 'Sunset Terracotta Glow',
      subtitle: 'Monochromatic Amber Wash',
      tag: 'Daylight Glam',
      type: 'photo',
      src: photo4,
      description: 'Monochromatic warm amber washes across eyes, cheeks, and lips designed for outdoor daylight photography.',
    },
    {
      id: 10,
      title: 'Vogue Inspired Portrait',
      subtitle: 'Sculpted Cheek Architecture',
      tag: 'Fashion Lookbook',
      type: 'photo',
      src: photo5,
      description: 'Sculpted cheek architecture, feathered brushed brows, and high-shine gloss finish.',
    },
    {
      id: 11,
      title: 'Velvet Smokey Reception',
      subtitle: 'Sculpted Cream Cheek Contour',
      tag: 'Reception Look',
      type: 'photo',
      src: photo7,
      description: 'Smoked espresso liner, micro-lash clusters, and sculpting cream contour.',
    },
    {
      id: 12,
      title: 'Golden Hour Radiance',
      subtitle: 'Champagne Decolletage Melt',
      tag: 'Cocktail Glam',
      type: 'photo',
      src: photo9,
      description: 'Champagne liquid highlighter melt on collarbones and cheekbones with soft nude pout.',
    },
    {
      id: 13,
      title: 'Regal Jewel Tone Glam',
      subtitle: 'Feline Flick & Satin Skin',
      tag: 'Royal Wedding',
      type: 'photo',
      src: photo10,
      description: 'Deep jewel tones complemented by soft matte skin and crisp feline flick eye definition.',
    },
    {
      id: 14,
      title: 'Modern Classic Elegance',
      subtitle: 'Traditional Jewelry & Radiant Base',
      tag: 'Bridal Portrait',
      type: 'photo',
      src: photo8,
      description: 'Timeless Indian bridal glow honoring traditional jewelry while keeping skin lightweight and fresh.',
    },
    {
      id: 15,
      title: 'Subtle Day Bridal Glow',
      subtitle: 'Humidity-Proof Airbrush',
      tag: 'Destination Wedding',
      type: 'photo',
      src: photo6,
      description: 'Lightweight airbrush formulation calibrated to withstand outdoor summer ceremonies.',
    },
  ];

  const filteredWorks = allWorks.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const toggleSound = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setUnmutedVideoId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="works-gallery"
      className="w-full bg-[#ebe5d8] text-[#2c2825] pt-14 pb-24 px-4 sm:px-6 lg:px-8 border-t border-[#2c2825]/10 select-none relative"
    >
      {/* Paper texture grain background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(rgba(44, 40, 37, 0.15) 0.75px, transparent 0.75px)`,
          backgroundSize: '12px 12px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-outfit uppercase tracking-widest text-[#ec5395] font-bold block mb-1">
              Portfolio & Selected Works
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2c2825]">
              Works in Motion & Stills
            </h2>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#f48cb5] mt-1 -rotate-1">
              raw textures, continuous reels & bridal portraits on loop ♡
            </p>
          </div>

          {/* Minimal Editorial Filter Navigation */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-[0.18em] font-outfit">
            <button
              onClick={() => setFilter('all')}
              className={`pb-1 transition-all cursor-pointer ${
                filter === 'all'
                  ? 'text-[#2c2825] font-bold border-b-2 border-[#2c2825]'
                  : 'text-[#2c2825]/50 hover:text-[#2c2825]'
              }`}
            >
              All Archive
            </button>
            <span className="text-[#2c2825]/25">/</span>
            <button
              onClick={() => setFilter('video')}
              className={`pb-1 transition-all cursor-pointer ${
                filter === 'video'
                  ? 'text-[#2c2825] font-bold border-b-2 border-[#2c2825]'
                  : 'text-[#2c2825]/50 hover:text-[#2c2825]'
              }`}
            >
              Motion Reels
            </button>
            <span className="text-[#2c2825]/25">/</span>
            <button
              onClick={() => setFilter('photo')}
              className={`pb-1 transition-all cursor-pointer ${
                filter === 'photo'
                  ? 'text-[#2c2825] font-bold border-b-2 border-[#2c2825]'
                  : 'text-[#2c2825]/50 hover:text-[#2c2825]'
              }`}
            >
              Stills & Portraits
            </button>
          </div>
        </div>

        {/* Clean, Pure Vertical Grid: NO TITLES ON CARDS, NO BORDERS, PURE VISUALS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWorks.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1f1c1a] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer border-0"
              title="Click to view details"
            >
              {/* Media: Real Always-Looping Video OR High-Res Photo (Completely clean, no text overlays) */}
              {item.type === 'video' ? (
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src={item.src}
                    poster={item.thumbnail}
                    autoPlay
                    loop
                    muted={unmutedVideoId !== item.id}
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Sound Toggle for Videos */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={(e) => toggleSound(e, item.id)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                        unmutedVideoId === item.id
                          ? 'bg-[#ec5395] text-white shadow-md'
                          : 'bg-black/40 text-white/80 hover:bg-black/60'
                      }`}
                      title={unmutedVideoId === item.id ? 'Mute' : 'Unmute Sound'}
                      aria-label="Toggle Sound"
                    >
                      {unmutedVideoId === item.id ? (
                        <Volume2 className="w-3.5 h-3.5" />
                      ) : (
                        <VolumeX className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Player Modal — TITLES & DETAILS APPEAR HERE ON CLICK ONLY */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#ebe5d8] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh] border-0">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#ebe5d8]/90 hover:bg-[#ebe5d8] text-[#2c2825] transition-colors cursor-pointer shadow-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Box */}
            <div className="w-full md:w-3/5 aspect-[9/16] md:aspect-auto md:h-[620px] bg-black relative flex items-center justify-center overflow-hidden">
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Content Sidebar with Look Details */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#f4ece0] overflow-y-auto">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#faedf3] text-[#ec5395] text-[10px] font-bold uppercase tracking-wider font-outfit">
                  {selectedItem.tag}
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2c2825] mt-3">
                  {selectedItem.title}
                </h3>
                <p className="text-xs font-semibold text-[#ec5395] uppercase tracking-wider font-outfit mt-0.5">
                  {selectedItem.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#2c2825]/85 mt-4 leading-relaxed font-sans">
                  {selectedItem.description}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-[#ebe5d8] border border-[#2c2825]/10">
                  <span className="text-[11px] font-outfit font-bold uppercase tracking-wider text-[#2c2825] block mb-1">
                    Sapna Maheshwari Artistry
                  </span>
                  <p className="text-xs text-[#2c2825]/75 leading-relaxed">
                    Customized skin cocktail prep, HD flash-proof micro-contouring, and sweat-resistant luxury finish.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2c2825]/10">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onBookClick();
                  }}
                  className="w-full py-3 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Book Look For Your Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
