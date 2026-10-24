import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowDown, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 [overflow-x:clip]"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Desktop: 2 columns, text left, portrait right. Mobile: Portrait top, text below */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center landscape-short-2col">
          {/* Portrait Column (rendered first on mobile, right on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center landscape-short-right">
            {/* Floating Card Container */}
            <div className="relative hero-float-anim transition-transform duration-300 w-full flex flex-col items-center">
              {/* Rotating Badge pinned to top-right */}
              <div
                className="absolute -top-4 -right-2 min-[380px]:-right-4 sm:-top-6 sm:-right-6 z-20 pointer-events-none"
                aria-hidden="true"
              >
                <div className="spin-badge-anim w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                  >
                    {/* Dark backing circle with accent border */}
                    <circle
                      cx="50"
                      cy="50"
                      r="46"
                      fill="#1b1615"
                      stroke="#c4805f"
                      strokeWidth="1.5"
                    />

                    {/* Circular text path */}
                    <path
                      id="badgeCirclePath"
                      d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                      fill="none"
                    />

                    {/* Rotating curved text */}
                    <text className="fill-[#c4805f] text-[7.8px] font-bold tracking-[0.14em] uppercase select-none">
                      <textPath
                        href="#badgeCirclePath"
                        startOffset="0%"
                        textLength="205"
                        lengthAdjust="spacingAndGlyphs"
                      >
                        {siteData.profile.badgeText}
                      </textPath>
                    </text>

                    {/* Center 4-point star flare */}
                    <path
                      d="M 50 39 Q 50 50 61 50 Q 50 50 50 61 Q 50 50 39 50 Q 50 50 50 39 Z"
                      fill="#c4805f"
                    />
                  </svg>
                </div>
              </div>

              {/* Portrait Image Card (centered, about 80% width, max 320px below lg; 380px to 440px on lg+) */}
              <div className="w-[80%] max-w-[320px] aspect-square lg:w-[400px] lg:h-[400px] lg:max-w-none rounded-3xl p-1.5 bg-[#1b1615] border-2 border-[#c4805f] shadow-[0_0_45px_rgba(196,128,95,0.18)] landscape-short-portrait shrink-0">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#241c1a]">
                  <img
                    src={siteData.profile.pfpUrl}
                    alt={`${siteData.profile.name} portrait`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Status pill below the portrait */}
              <div className="mt-4 sm:mt-5 flex justify-center w-full px-2">
                <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#1b1615] border border-[rgba(196,128,95,0.35)] shadow-md text-xs sm:text-sm font-medium max-w-full">
                  <span className="text-[#f5efec] font-semibold truncate [overflow-wrap:anywhere]">
                    {siteData.profile.handle}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#2a2220] shrink-0"
                    aria-hidden="true"
                  />
                  <div className="flex items-center gap-1.5 text-[#f5efec] shrink-0">
                    <span
                      className="w-2 h-2 rounded-full bg-[#3ecf8e]"
                      aria-label="Available status indicator"
                    />
                    <span>{siteData.profile.availability}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column (rendered second on mobile, left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start min-w-0 landscape-short-left">
            {/* Headline with fluid clamp */}
            <h1 className="hero-headline-fluid font-heading font-extrabold tracking-tight text-[#f5efec] text-balance break-words">
              Hey, I&apos;m {siteData.profile.name}{' '}
              <span
                className="inline-block transform hover:rotate-12 transition-transform origin-bottom-right"
                role="img"
                aria-label="Waving hand"
              >
                👋
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-6 text-base text-[#b3a7a2] max-w-xl leading-[1.6]">
              <strong className="text-[#f5efec] font-bold">
                {siteData.profile.tagline}
              </strong>{' '}
              {siteData.profile.subtagline}
            </p>

            {/* Action Buttons: side by side, wrap to stack under 340px, touch target >= 44px */}
            <div className="mt-7 sm:mt-8 flex flex-col min-[340px]:flex-row items-stretch min-[340px]:items-center gap-3 sm:gap-4 w-full min-[340px]:w-auto">
              {/* Primary button */}
              <a
                href="#work"
                onClick={handleScrollToWork}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 min-h-[44px] text-sm sm:text-base font-bold rounded-full bg-[#c4805f] text-[#120e0d] hover:bg-[#d99273] active:scale-95 transition-all shadow-[0_0_25px_rgba(196,128,95,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0d] focus-visible:ring-[#c4805f] cursor-pointer text-center"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Secondary button */}
              <a
                href={siteData.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 min-h-[44px] text-sm sm:text-base font-semibold rounded-full border border-[#c4805f] text-[#f5efec] hover:bg-[#c4805f]/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0d] focus-visible:ring-[#c4805f] cursor-pointer text-center"
              >
                <Send className="w-4 h-4 text-[#c4805f]" />
                <span>Message on Telegram</span>
              </a>
            </div>

            {/* Small underlined text links */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-[#b3a7a2]">
              <a
                href={siteData.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center underline underline-offset-4 hover:text-[#c4805f] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c4805f] rounded [overflow-wrap:anywhere]"
              >
                X {siteData.profile.handle}
              </a>
              <span className="text-[#2a2220] select-none" aria-hidden="true">
                •
              </span>
              <a
                href={siteData.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center underline underline-offset-4 hover:text-[#c4805f] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c4805f] rounded"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
