import React from 'react';
import { siteData } from '../data/siteData';
import { Maximize2 } from 'lucide-react';

interface DealroomProps {
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const Dealroom: React.FC<DealroomProps> = ({ onOpenLightbox }) => {
  return (
    <section
      id="dealroom"
      className="py-14 sm:py-18 lg:py-24 border-t border-[#2a2220] transition-colors"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <h2 className="section-title-fluid font-heading font-extrabold tracking-tight text-[#f5efec]">
            Dealroom
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#b3a7a2]">
            Real paid partnerships and real payments from projects I&apos;ve worked with. Tap any screenshot to see it full size.
          </p>
        </div>

        {/* Proof Grid: 2 columns (base), 3 columns (sm and up) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {siteData.dealroom.map((item) => (
            <div
              key={item.id}
              className="proof-card overflow-hidden flex flex-col justify-between group hover:border-[rgba(196,128,95,0.45)] hover:shadow-[0_0_40px_rgba(196,128,95,0.14)] transition-all min-w-0"
            >
              <button
                type="button"
                onClick={() => onOpenLightbox(item.image, item.title, item.caption)}
                className="w-full text-left flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] rounded-2xl cursor-pointer min-h-[44px]"
                aria-label={`View full proof for ${item.title}`}
              >
                {/* 4:5 Aspect Ratio Thumbnail (top-aligned crop) */}
                <div className="relative w-full aspect-[4/5] bg-[#120e0d] overflow-hidden border-b border-[#2a2220] shrink-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    loading="lazy"
                  />
                  {/* Hover expansion cue */}
                  <div className="absolute inset-0 bg-[#120e0d]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-semibold text-[#f5efec] backdrop-blur-[1px]">
                    <Maximize2 className="w-4 h-4 text-[#c4805f]" />
                    <span className="hidden sm:inline">Tap to view</span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-3 sm:p-5 flex flex-col flex-1 justify-between min-w-0">
                  {/* Title & Amount row: if title is long, amount stays on its own line instead of overflowing */}
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-2 min-w-0">
                    <h3 className="font-heading font-extrabold text-xs sm:text-base lg:text-lg text-[#f5efec] group-hover:text-[#c4805f] transition-colors [overflow-wrap:anywhere] min-w-0">
                      {item.title}
                    </h3>
                    <span className="font-heading font-extrabold text-xs sm:text-base lg:text-lg text-[#c4805f] shrink-0 tabular-nums">
                      {item.amount}
                    </span>
                  </div>

                  {/* Secondary caption */}
                  <p className="text-[11px] sm:text-xs text-[#b3a7a2] leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.caption}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
