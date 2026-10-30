import { useRef } from 'react';
import heroMasterWebp from '../assets/hero_master_2x.webp';
import heroMasterPng from '../assets/hero_master_2x.png';
import heroOriginal from '../assets/hero_original.jpg';

interface HeroProps {
  onOpenGuide: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuide }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full aspect-[1024/558] bg-[#ebe5d8] overflow-hidden p-0 m-0 select-none">
      {/* Edge-to-Edge Pure Artwork - Exactly 0 padding, 0 margin, 0 card borders */}
      <div
        ref={containerRef}
        className="relative w-full h-full p-0 m-0 overflow-hidden"
      >
        <picture className="w-full h-full block p-0 m-0">
          <source srcSet={heroMasterWebp} type="image/webp" />
          <source srcSet={heroMasterPng} type="image/png" />
          <img
            src={heroOriginal}
            alt="Sapna Maheshwari Makeup Artist Hero Artwork"
            className="w-full h-full object-cover block p-0 m-0 select-none"
            loading="eager"
          />
        </picture>

        {/* Clean, Invisible Click Hotspot: "let me be your guide." */}
        <button
          type="button"
          onClick={onOpenGuide}
          className="absolute top-[13%] left-[57%] w-[40%] h-[18%] cursor-pointer z-20 bg-transparent border-0 outline-hidden hover:bg-[#ec5395]/5 transition-colors rounded-lg"
          title="Click to view guide"
          aria-label="Open guide"
        />

        {/* Clean, Invisible Click Hotspot: Bottom-Left "Makeup Artist" */}
        <a
          href="#works-gallery"
          className="absolute bottom-[5%] left-[5%] w-[18%] h-[10%] z-20 cursor-pointer hover:bg-[#ec5395]/5 transition-colors rounded-sm"
          title="View Services"
          aria-label="View services"
        />

        {/* Clean, Invisible Click Hotspot: Bottom-Right "By Sapna Maheshwari" */}
        <a
          href="#about"
          className="absolute bottom-[5%] right-[5%] w-[22%] h-[10%] z-20 cursor-pointer hover:bg-[#ec5395]/5 transition-colors rounded-sm"
          title="About Sapna Maheshwari"
          aria-label="About Sapna Maheshwari"
        />
      </div>
    </section>
  );
};
