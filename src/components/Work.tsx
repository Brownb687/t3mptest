import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, ArrowRight, Maximize2 } from 'lucide-react';

interface WorkProps {
  onOpenLightbox: (imageUrl: string, title?: string, caption?: string) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenLightbox }) => {
  const handleScrollToDealroom = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('dealroom');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="work"
      className="py-14 sm:py-18 lg:py-24 border-t border-[#2a2220] transition-colors"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <h2 className="section-title-fluid font-heading font-extrabold tracking-tight text-[#f5efec]">
            Work
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#b3a7a2]">
            Paid partnerships and the posts behind them.
          </p>
        </div>

        {/* 1. Projects Section: 1 col (base), 2 cols (sm), 3 cols (lg), works for single card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 sm:mb-16">
          {siteData.projects.map((project) => (
            <div
              key={project.id}
              className="proof-card p-5 sm:p-7 flex flex-col justify-between hover:border-[rgba(196,128,95,0.45)] transition-all group min-w-0"
            >
              <div className="min-w-0">
                {/* Header row: Project Name & Status pill */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#f5efec] truncate">
                      {project.name}
                    </h3>
                    <p className="text-[#c4805f] font-semibold text-sm mt-0.5 truncate">
                      {project.role}
                    </p>
                  </div>
                  {/* Status chip: outlined pill */}
                  <span className="shrink-0 text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[rgba(196,128,95,0.4)] text-[#f5efec] bg-[#120e0d]/60 font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Date */}
                <p className="text-xs text-[#b3a7a2]">
                  {project.date}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-[#b3a7a2] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* View proof link */}
              <div className="mt-6 pt-4 border-t border-[#2a2220]">
                <a
                  href={project.proofLinkTarget}
                  onClick={handleScrollToDealroom}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#c4805f] hover:text-[#d99273] transition-colors group-hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c4805f] rounded"
                >
                  <span>{project.proofLinkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Post Samples Subtitle & 6 Link Rows (1 col base, 2 cols sm and up) */}
        <div className="mb-14 sm:mb-16">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#f5efec] mb-4 sm:mb-5">
            Post samples
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {siteData.postSamples.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="proof-card p-3.5 sm:p-4.5 min-h-[44px] flex items-center justify-between group hover:border-[rgba(196,128,95,0.45)] hover:bg-[#201918] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] min-w-0"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  {/* X Icon Tile */}
                  <div className="w-10 h-10 rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] flex items-center justify-center shrink-0 text-[#f5efec] group-hover:text-[#c4805f] group-hover:border-[#c4805f] transition-colors">
                    <svg
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>

                  {/* Title & subtitle */}
                  <div className="min-w-0">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#f5efec] group-hover:text-[#c4805f] transition-colors truncate">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#b3a7a2] truncate">
                      {post.label}
                    </p>
                  </div>
                </div>

                {/* External link arrow */}
                <div className="shrink-0 text-[#b3a7a2] group-hover:text-[#c4805f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. Account Reach Block: 2 Cards (stack below lg, 2 columns at lg) */}
        <div>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#f5efec] mb-4 sm:mb-5">
            Account reach
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {siteData.accountReach.map((reach) => (
              <div
                key={reach.id}
                className="proof-card p-4 sm:p-6 flex flex-col justify-between overflow-hidden min-w-0"
              >
                {/* Header with Title and Chip */}
                <div>
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#f5efec] truncate">
                      {reach.title}
                    </h4>
                    {/* Outlined chip */}
                    <span className="text-xs px-2.5 sm:px-3 py-1 rounded-full border border-[rgba(196,128,95,0.35)] text-[#b3a7a2] bg-[#120e0d]/50 font-medium shrink-0">
                      {reach.chip}
                    </span>
                  </div>

                  {/* Two Stat Tiles: Numbers only, 2 across at every width */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {reach.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[#14100f] border border-[rgba(196,128,95,0.18)] rounded-xl p-3 sm:p-3.5 text-left min-w-0"
                      >
                        <p className="text-xs text-[#b3a7a2] font-medium truncate">
                          {stat.label}
                        </p>
                        <p className="text-lg sm:text-2xl font-heading font-extrabold text-[#f5efec] mt-1 tabular-nums truncate">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Screenshot cropped to fixed height, top-aligned, clickable for lightbox */}
                <div className="relative group rounded-xl overflow-hidden border border-[rgba(196,128,95,0.2)] bg-[#120e0d]">
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox(
                        reach.screenshotUrl,
                        `${reach.title} Reach Analytics`,
                        `Verified X analytics report: ${reach.stats
                          .map((s) => `${s.label} ${s.value}`)
                          .join(' · ')} (${reach.chip})`
                      )
                    }
                    className="w-full text-left block relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] cursor-pointer"
                    aria-label={`View full ${reach.title} analytics screenshot`}
                  >
                    <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={reach.screenshotUrl}
                        alt={reach.screenshotAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>

                    {/* Subtle hover overlay hint */}
                    <div className="absolute inset-0 bg-[#120e0d]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-[#f5efec] backdrop-blur-[1px]">
                      <Maximize2 className="w-4 h-4 text-[#c4805f]" />
                      <span>Tap to expand full analytics</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
