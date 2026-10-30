import { useState, useRef, useEffect } from 'react';
import { Star, ArrowRight, ArrowLeft, Sparkles, CheckCircle2, Heart } from 'lucide-react';

// Real Bride & Client Portraits from assets/WORKS
import photo1 from '../assets/WORKS/photo_1.jpg';
import photo2 from '../assets/WORKS/photo_2.jpg';
import photo3 from '../assets/WORKS/photo_3.jpg';
import photo5 from '../assets/WORKS/photo_5.jpg';
import photo7 from '../assets/WORKS/photo_7.jpg';
import photo8 from '../assets/WORKS/photo_8.jpg';
import photo9 from '../assets/WORKS/photo_9.jpg';
import thumbNamita from '../assets/WORKS/video_namita_thapar_thumb.jpg';

interface ReviewsAndServicesProps {
  onBookClick: () => void;
}

interface ReviewCard {
  id: number;
  serviceTag: string;
  category: string;
  brideName: string;
  weddingLocation: string;
  avatar: string;
  rotation: string;
  quote: string;
  features: string[];
  duration: string;
  price: string;
}

export const ReviewsAndServices: React.FC<ReviewsAndServicesProps> = ({ onBookClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // 8 English Real Bride & Celebrity Client Reviews with Tilted Layouts
  const reviews: ReviewCard[] = [
    {
      id: 1,
      serviceTag: 'Bridal Couture Experience',
      category: 'Destination Wedding',
      brideName: 'Ananya Singhania',
      weddingLocation: 'Villa del Balbianello, Lake Como',
      avatar: photo1,
      rotation: '-rotate-4 hover:-rotate-1',
      quote:
        'My makeup did not budge in 35°C Lake Como heat. In high-definition closeups my skin looked like pure lit-from-within glass! Sapna is an absolute magician.',
      features: [
        'Custom sweat-resistant luminous skincare prep',
        'Smoked feline wing & individual mink lash clusters',
        '18-hour tear-proof velvet lip finish',
      ],
      duration: 'Duration: 1.5 - 2 Hours',
      price: 'Bespoke Package • ₹45,000 / $550',
    },
    {
      id: 2,
      serviceTag: 'Red Carpet & Celebrity Glam',
      category: 'Shark Tank Gala & Media',
      brideName: 'Namita Thapar',
      weddingLocation: 'Shark Tank India & Executive Gala',
      avatar: thumbNamita,
      rotation: 'rotate-3 hover:rotate-1 mt-3 sm:mt-6',
      quote:
        'Sapna understands studio lighting better than anyone I have worked with. The camera loved the effortless contour and natural dewy finish!',
      features: [
        'Micro-sculpted HD cheekbone contouring',
        'Satin-sheen camera-ready complexion',
        'Featherweight touchup-free wear for 12+ hours',
      ],
      duration: 'Duration: 1 Hour',
      price: 'Signature Occasion • ₹35,000 / $420',
    },
    {
      id: 3,
      serviceTag: 'Royal Heritage Bridal Glow',
      category: 'Palace Wedding',
      brideName: 'Isha Merchant',
      weddingLocation: 'Umaid Bhawan Palace, Jodhpur',
      avatar: photo2,
      rotation: '-rotate-3 hover:rotate-0',
      quote:
        'I was terrified of heavy cakey bridal foundations. Sapna gave me sheer radiance that breathed effortlessly through 6 hours of phere and fireworks.',
      features: [
        'Lightweight moisture-barrier airbrush base',
        'Rose-gold foiled lid & kohl rimmed eyes',
        'Veil fixing, jewelry draping & luxury touchup kit',
      ],
      duration: 'Duration: 2 Hours (Full Suite)',
      price: 'Palace Bridal Suite • Bespoke',
    },
    {
      id: 4,
      serviceTag: 'Sun-Kissed Minimalist Bride',
      category: 'Sunset Ceremony',
      brideName: 'Dr. Tanya Verma',
      weddingLocation: 'Raffles Udaipur, Rajasthan',
      avatar: photo3,
      rotation: 'rotate-4 hover:rotate-1 mt-2 sm:mt-8',
      quote:
        'Every single guest asked who did my makeup! It felt like I was wearing nothing at all, yet every photograph looks straight out of Vogue Weddings.',
      features: [
        'Monochromatic peach & flush cream blush melt',
        'Laminated fluffy brows & natural skin freckles',
        'Transfer-resistant glossy lip tint',
      ],
      duration: 'Duration: 1.5 Hours',
      price: 'Sunset Ceremony • ₹40,000 / $480',
    },
    {
      id: 5,
      serviceTag: 'High-Octane Sangeet Glam',
      category: 'Sangeet & Cocktail',
      brideName: 'Radhika Kapoor',
      weddingLocation: 'The St. Regis, Mumbai',
      avatar: photo5,
      rotation: '-rotate-4 hover:-rotate-1',
      quote:
        'I danced for 5 hours straight under hot stage lights and did not lose a single lash or sweat off my base. She is truly the undisputed best!',
      features: [
        'Prismatic shimmer eye pigments & tightline',
        'Collarbone golden liquid champagne melt',
        'Waterproof setting shield technology',
      ],
      duration: 'Duration: 1 Hour 15 Mins',
      price: 'Sangeet Glam • ₹35,000 / $420',
    },
    {
      id: 6,
      serviceTag: 'Editorial Fashion Campaign',
      category: 'Fashion Week & Covers',
      brideName: 'Natasha D’Souza',
      weddingLocation: 'Dubai Fashion Week & Commercials',
      avatar: photo7,
      rotation: 'rotate-3 hover:rotate-0 mt-3 sm:mt-6',
      quote:
        'Her speed, precision, and skin prep techniques are unmatched. One of the few artists who honors real skin texture while delivering sheer editorial perfection.',
      features: [
        'Dewy glass skin skincare-cocktail infusion',
        'Architectural brow styling & wet-look lids',
        'Modern stained blurred lip aesthetic',
      ],
      duration: 'Duration: 45 Mins - 1 Hour',
      price: 'Editorial Campaign • ₹35,000 / $420',
    },
    {
      id: 7,
      serviceTag: 'Boho Radiant Sundowner',
      category: 'Beach Ceremony',
      brideName: 'Sanya Malhotra',
      weddingLocation: 'Alila Diwa, South Goa',
      avatar: photo9,
      rotation: '-rotate-3 hover:rotate-0',
      quote:
        'The soft dewy look she created for my coastal sundowner was so fresh and youthful. I could not stop smiling looking in the mirror all day!',
      features: [
        'Ultra-hydrating sheer peptide base',
        'Dewy humidity-proof cheek flush',
        'Delicate fluttering demi-lash accents',
      ],
      duration: 'Duration: 1 Hour',
      price: 'Intimate Ceremony • ₹32,000 / $380',
    },
    {
      id: 8,
      serviceTag: 'Grand Reception Evening',
      category: 'Royal Reception',
      brideName: 'Kavita & Dev',
      weddingLocation: 'The Taj Mahal Palace, Colaba',
      avatar: photo8,
      rotation: 'rotate-4 hover:rotate-1 mt-2 sm:mt-8',
      quote:
        'From morning pheras to the midnight reception, my makeup transitioned seamlessly. The compliments have not stopped even months later!',
      features: [
        'Sculpted velvet-matte evening complexion',
        'Timeless vintage Hollywood crimson pout',
        'Full jewelry draping & veil styling assistance',
      ],
      duration: 'Duration: 2 Hours',
      price: 'Grand Reception • ₹42,000 / $500',
    },
  ];

  // Update scroll progress bar on scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  // Arrow controls for slide right / slide left
  const slide = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.75;
    sliderRef.current.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  // Mouse drag-to-slide handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section
      id="services-reviews"
      className="relative w-full bg-[#fcdde8] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-[#f48cb5]/40"
    >
      {/* Background ambient blush tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcdde8] via-[#fce4ec] to-[#fcdde8] pointer-events-none" />

      {/* Looping Hand-Drawn Pink Ribbon SVG Path extending horizontally behind cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center">
        <svg
          viewBox="0 0 2400 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[200%] sm:w-[150%] lg:w-full h-full object-cover opacity-75"
          preserveAspectRatio="none"
        >
          {/* Continuous graceful looping ribbon line */}
          <path
            d="M -50,220 
               C 180,90 260,390 420,220 
               C 490,140 540,430 470,460 
               C 400,480 390,320 500,250 
               C 680,140 760,510 930,370 
               C 1060,260 1140,160 1280,220 
               C 1420,280 1480,500 1620,360 
               C 1760,220 1840,480 2000,290 
               C 2140,120 2280,440 2450,260"
            stroke="#f48cb5"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Secondary delicate parallel accent ribbon */}
          <path
            d="M 50,270 
               C 220,340 340,490 480,360 
               C 620,230 720,480 900,420 
               C 1080,360 1200,490 1380,330 
               C 1520,200 1640,460 1820,380 
               C 1980,300 2120,460 2380,320"
            stroke="#f48cb5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header (100% In English) with Slide Navigation Controls */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#f48cb5]/40 text-[#ec5395] text-[11px] font-semibold uppercase tracking-widest mb-3">
              <Heart className="w-3 h-3 fill-current" />
              <span>Real Brides & Celebrity Musings</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-[#352530] tracking-tight">
              Love Letters & Experiences
            </h2>

            <p className="font-handwriting text-2xl sm:text-3xl text-[#ec5395] mt-1.5 -rotate-1">
              flawless skin-first glow & memories that last forever ♡
            </p>
          </div>

          {/* Navigation Controls: Slide Right / Left + Pill Progress Indicator */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs font-outfit font-semibold text-[#ec5395] hidden sm:inline-flex items-center gap-1.5 mr-2">
              <span>Slide right to explore</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </span>

            {/* Slide Left Button */}
            <button
              onClick={() => slide('left')}
              aria-label="Slide reviews left"
              className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-[#ec5395] hover:text-[#d94182] border border-[#f48cb5]/40 shadow-sm hover:shadow-md transition-all flex items-center justify-center cursor-pointer active:scale-90"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Slide Right Button */}
            <button
              onClick={() => slide('right')}
              aria-label="Slide reviews right"
              className="w-11 h-11 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white shadow-md shadow-[#ec5395]/30 hover:shadow-lg transition-all flex items-center justify-center cursor-pointer active:scale-90"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Sliding Track: As user slides right, more and more reviews appear! */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 sm:gap-8 overflow-x-auto pb-10 pt-4 px-2 snap-x snap-mandatory scroll-smooth no-scrollbar cursor-grab ${
            isDragging ? 'cursor-grabbing select-none' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((card) => (
            <div
              key={card.id}
              onClick={onBookClick}
              className={`shrink-0 w-[300px] sm:w-[350px] md:w-[380px] snap-center transform ${card.rotation} transition-all duration-300 rounded-[28px] bg-white p-7 sm:p-8 shadow-xl shadow-[#f48cb5]/20 hover:shadow-2xl hover:scale-105 border border-[#f48cb5]/40 cursor-pointer flex flex-col justify-between min-h-[440px] relative group`}
            >
              <div>
                {/* Rounded Pink Pill Header Badge */}
                <div className="rounded-full border-2 border-[#f48cb5] bg-[#fff6f9] py-2 px-4 text-center mb-6 group-hover:border-[#ec5395] transition-colors">
                  <h3 className="font-outfit text-sm sm:text-base font-bold text-[#ec5395] leading-snug">
                    {card.serviceTag}
                  </h3>
                  <span className="text-[10px] font-outfit uppercase tracking-widest text-[#352530]/50 block mt-0.5 font-medium">
                    {card.category}
                  </span>
                </div>

                {/* Bride / Client Avatar & Name */}
                <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#f48cb5]/20">
                  <div className="relative">
                    <img
                      src={card.avatar}
                      alt={card.brideName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#ec5395] shadow-xs"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 fill-[#ec5395] text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-outfit font-bold text-sm sm:text-base text-[#352530] leading-tight">
                      {card.brideName}
                    </h4>
                    <span className="text-[11px] font-outfit text-[#ec5395] font-medium block">
                      {card.weddingLocation}
                    </span>
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-outfit font-bold text-[#352530]/70 ml-1.5">
                    5.0 • Verified Bride
                  </span>
                </div>

                {/* Real Bride Quote */}
                <p className="text-xs sm:text-[13px] italic text-[#352530]/90 font-outfit leading-relaxed mb-6 bg-[#fff8fa] p-3.5 rounded-2xl border border-[#f48cb5]/20">
                  &ldquo;{card.quote}&rdquo;
                </p>

                {/* Bullet Points with dashes (-) matching reference style */}
                <div className="space-y-2.5 text-xs text-[#352530]/80 font-outfit leading-relaxed mb-4">
                  {card.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <span className="text-[#ec5395] font-bold text-sm leading-none shrink-0 mt-0.5">
                        -
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-2 text-[#ec5395] font-medium pt-1">
                    <span className="font-bold text-sm leading-none shrink-0 mt-0.5">-</span>
                    <span>{card.duration}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Book Action */}
              <div className="pt-4 border-t border-[#f48cb5]/25 mt-auto flex items-center justify-between">
                <span className="text-xs font-outfit font-bold text-[#ec5395]">
                  {card.price}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookClick();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-[11px] font-semibold uppercase tracking-wider transition-all shadow-xs cursor-pointer active:scale-95 group-hover:shadow-md"
                >
                  <span>Book Look</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}

          {/* End of Carousel Card: Direct Invitation */}
          <div
            onClick={onBookClick}
            className="shrink-0 w-[280px] sm:w-[320px] snap-center rounded-[28px] bg-gradient-to-br from-white to-[#ffeef4] p-8 shadow-xl shadow-[#f48cb5]/20 hover:shadow-2xl hover:scale-105 border-2 border-dashed border-[#ec5395]/50 cursor-pointer flex flex-col items-center justify-center text-center transition-all min-h-[440px] group"
          >
            <div className="w-16 h-16 rounded-full bg-[#ec5395]/10 text-[#ec5395] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>

            <h3 className="font-outfit font-bold text-xl text-[#352530] mb-2">
              Ready for your dream bridal look?
            </h3>

            <p className="text-xs text-[#352530]/75 font-outfit mb-6 leading-relaxed">
              Limited 2026/2027 wedding season dates remaining for Mumbai, Rajasthan & International Destination Weddings.
            </p>

            <button
              type="button"
              onClick={onBookClick}
              className="px-6 py-3 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-[#ec5395]/30 cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>Inquire Dates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive Progress Scrubber / Indicator */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto">
          <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden border border-[#f48cb5]/30 p-0.5">
            <div
              className="bg-[#ec5395] h-full rounded-full transition-all duration-150"
              style={{ width: `${Math.max(12, Math.min(100, scrollProgress))}%` }}
            />
          </div>

          <div className="text-[11px] font-outfit uppercase tracking-widest text-[#ec5395] font-semibold shrink-0">
            Slide to see more reviews →
          </div>
        </div>

        {/* Global CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs sm:text-sm font-semibold uppercase tracking-widest shadow-lg shadow-[#ec5395]/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Your Bridal Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
