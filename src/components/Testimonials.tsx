import { Star, Quote, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ananya Singhania',
      role: 'Bride • Destination Wedding at Lake Como',
      text: "Booking Sapna was hands down the single best decision of my wedding! In 35-degree summer heat, my makeup didn't budge even after hours of dancing and crying happy tears. Everyone kept saying my skin looked like glass.",
      stars: 5,
    },
    {
      id: 2,
      name: 'Meera Kapoor',
      role: 'Fashion Director & Stylist',
      text: 'Sapna is the quickest, most intuitive makeup artist I have worked with on set. She understands studio lighting better than most photographers. Her base work is second to none.',
      stars: 5,
    },
    {
      id: 3,
      name: 'Roshni Mehta',
      role: 'Bride • Umaid Bhawan Palace, Jodhpur',
      text: 'I was terrified of looking cakey or unrecognizable. Sapna listened so patiently and gave me the most ethereal, regal look. My husband couldn’t take his eyes off me. She is pure magic ♡',
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#e8e2d4] border-t border-[#2c2825]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase font-outfit text-[#ec5395] inline-flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-[#ec5395]" /> Love Letters
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-[#2c2825] mt-2 mb-4">
            Words from My Brides & Clients
          </h2>
          <p className="text-sm text-[#2c2825]/75 font-sans leading-relaxed">
            Nothing brings me greater joy than hearing how confident and radiant my clients felt on the most important days of their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-2xl bg-[#ebe5d8] border border-[#2c2825]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-[#ec5395]/30 mb-4" />

              <p className="text-sm text-[#2c2825]/85 italic leading-relaxed font-sans mb-6">
                &ldquo;{rev.text}&rdquo;
              </p>

              <div className="pt-4 border-t border-[#2c2825]/10">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h4 className="font-editorial text-base font-bold text-[#2c2825]">
                  {rev.name}
                </h4>
                <p className="text-[11px] font-outfit uppercase tracking-wider text-[#2c2825]/60 mt-0.5">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
