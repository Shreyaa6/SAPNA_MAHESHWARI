import { useState } from 'react';
import { X, Sparkles, Heart, ArrowRight, ArrowLeft, CheckCircle2, Calendar, Star } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose, onBookClick }) => {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: "Hi, since you're new here!",
      subtitle: "Welcome to my creative sanctuary",
      icon: <Sparkles className="w-6 h-6 text-[#ec5395]" />,
      content: (
        <div className="space-y-3 text-sm text-[#2c2825]/85">
          <p>
            I am <strong className="text-[#2c2825] font-semibold">Sapna Maheshwari</strong>, an editorial and celebrity makeup artist based between Mumbai and destination weddings across Europe, Dubai, and Rajasthan.
          </p>
          <p>
            I believe makeup shouldn't hide your character—it should amplify the radiant, confident soul within you.
          </p>
          <div className="flex items-center gap-3 py-2 border-y border-[#2c2825]/10 mt-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#2c2825]">500+ Luxury Brides & Editorial Shoots</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Skin-First Beauty Philosophy',
      subtitle: 'Effortless radiance that lasts 18+ hours',
      icon: <Heart className="w-6 h-6 text-[#ec5395] fill-[#ec5395]" />,
      content: (
        <div className="space-y-3 text-sm text-[#2c2825]/85">
          <p>
            My trademark is the <em>&quot;Glass Skin Couture&quot;</em> look: breathable, lightweight complexion prep paired with seamless sculpting and hypnotic eyes.
          </p>
          <ul className="space-y-2 text-xs font-medium text-[#2c2825]/80">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ec5395] shrink-0" />
              <span>100% Cruelty-free, hypoallergenic luxury skin prep</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ec5395] shrink-0" />
              <span>Flash-proof & HD-camera calibrated for 4K photography</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ec5395] shrink-0" />
              <span>Customized to your facial anatomy, lighting & outfit tones</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'What Service Are You Looking For?',
      subtitle: 'Tailored beauty experiences for every milestone',
      icon: <Sparkles className="w-6 h-6 text-[#ec5395]" />,
      content: (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="p-3 rounded-lg border border-[#2c2825]/15 bg-[#e8e2d4]">
            <span className="font-semibold text-[#2c2825] block text-sm">👑 Bridal Experience</span>
            <span className="text-[#2c2825]/70 block mt-1">Full wedding trousseau, trials, veil draping & touch-up kit.</span>
          </div>
          <div className="p-3 rounded-lg border border-[#2c2825]/15 bg-[#e8e2d4]">
            <span className="font-semibold text-[#2c2825] block text-sm">📸 Fashion Editorial</span>
            <span className="text-[#2c2825]/70 block mt-1">Magazine covers, runway campaigns, lookbooks & commercial.</span>
          </div>
          <div className="p-3 rounded-lg border border-[#2c2825]/15 bg-[#e8e2d4]">
            <span className="font-semibold text-[#2c2825] block text-sm">✨ Red Carpet & Gala</span>
            <span className="text-[#2c2825]/70 block mt-1">Cocktails, awards nights, receptions & statement events.</span>
          </div>
          <div className="p-3 rounded-lg border border-[#2c2825]/15 bg-[#e8e2d4]">
            <span className="font-semibold text-[#2c2825] block text-sm">💄 1-on-1 Masterclass</span>
            <span className="text-[#2c2825]/70 block mt-1">Personal vanity audit, pro artist techniques & hands-on coaching.</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Ready to bring your vision to life?',
      subtitle: "Let's lock in your date or craft your moodboard",
      icon: <Heart className="w-6 h-6 text-[#ec5395] fill-[#ec5395]" />,
      content: (
        <div className="space-y-4 text-center py-2">
          <p className="text-sm text-[#2c2825]/85">
            Wedding seasons and editorial calendars book 3 to 9 months in advance. Click below to check available dates or request a complimentary consultation!
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="w-full py-3 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Inquire & Reserve Date</span>
            </button>
            <a
              href="#work"
              onClick={onClose}
              className="text-xs text-[#2c2825]/70 hover:text-[#ec5395] underline underline-offset-4 py-1"
            >
              Or browse the full lookbook gallery first
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#ebe5d8] border border-[#2c2825]/15 rounded-2xl p-6 sm:p-8 shadow-2xl text-[#2c2825] font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#2c2825]/60 hover:text-[#2c2825] hover:bg-[#ded6c7] transition-colors"
          aria-label="Close guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-full bg-[#e3dcd0] border border-[#2c2825]/10">
            {steps[currentStep].icon}
          </div>
          <div>
            <div className="text-[11px] font-outfit uppercase tracking-widest text-[#ec5395] font-semibold">
              Sapna&apos;s Guide • Step {currentStep + 1} of {steps.length}
            </div>
            <h3 className="font-editorial text-xl font-bold tracking-tight text-[#2c2825]">
              {steps[currentStep].title}
            </h3>
          </div>
        </div>

        <p className="text-xs text-[#2c2825]/70 mb-5 font-outfit">
          {steps[currentStep].subtitle}
        </p>

        {/* Step Body */}
        <div className="min-h-[170px] flex flex-col justify-center">
          {steps[currentStep].content}
        </div>

        {/* Navigation Controls */}
        <div className="mt-6 pt-4 border-t border-[#2c2825]/10 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-outfit uppercase tracking-wider transition-colors ${
              currentStep === 0
                ? 'opacity-30 cursor-not-allowed text-[#2c2825]'
                : 'text-[#2c2825] hover:bg-[#ded6c7]'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentStep ? 'w-6 bg-[#ec5395]' : 'w-2 bg-[#2c2825]/20 hover:bg-[#2c2825]/40'
                }`}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ec5395] hover:bg-[#d94182] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2c2825] hover:bg-[#1a1816] text-[#ebe5d8] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>Got it!</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
