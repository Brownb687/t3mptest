import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = siteData.navItems.map((item) => item.href.replace('#', ''));

    const handleScroll = () => {
      // Dynamic header offset based on breakpoint (96px mobile, 68px desktop + small buffer)
      const headerOffset = window.innerWidth >= 900 ? 76 : 104;
      const scrollPosition = window.scrollY + headerOffset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection(sectionIds[0]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#120e0d]/95 backdrop-blur-md border-b border-[#2a2220] transition-colors pt-[env(safe-area-inset-top,0px)] landscape-short-header">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (single row at lg+) & Mobile Row 1 (<lg) */}
        <div className="flex items-center justify-between h-14 min-[360px]:h-16 lg:h-[68px]">
          {/* Left: Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Temp3st Home"
            className="group flex items-center min-h-[44px] text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-[#f5efec] hover:text-[#c4805f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] rounded"
          >
            <span>{siteData.profile.name}</span>
            <span
              className="w-2 h-2 ml-1 rounded-full bg-[#c4805f] inline-block transition-transform group-hover:scale-125"
              aria-hidden="true"
            />
          </a>

          {/* Desktop Nav (hidden below lg, shown on lg+) */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-xs font-semibold tracking-wider uppercase text-[#b3a7a2]"
          >
            {siteData.navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative min-h-[44px] flex items-center py-1 transition-colors hover:text-[#f5efec] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] rounded ${
                    isActive ? 'text-[#f5efec]' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-2 left-0 right-0 h-[2px] bg-[#c4805f] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Accent "Hire me" pill */}
          <div className="flex items-center">
            <a
              href={siteData.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 min-h-[44px] text-xs sm:text-sm font-semibold rounded-full bg-[#c4805f] text-[#120e0d] hover:bg-[#d99273] active:scale-95 transition-all shadow-[0_0_20px_rgba(196,128,95,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0d] focus-visible:ring-[#c4805f] cursor-pointer shrink-0"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile Row 2: Five nav links in one line (<lg only, fits at 320px with no sideways scroll) */}
        <div className="lg:hidden border-t border-[#2a2220]/60">
          <nav
            aria-label="Mobile Navigation"
            className="flex items-center justify-between text-[10.5px] min-[360px]:text-[11px] font-semibold tracking-wider uppercase text-[#b3a7a2] w-full"
          >
            {siteData.navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative min-h-[44px] flex items-center justify-center py-2 px-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#f5efec] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c4805f] ${
                    isActive ? 'text-[#c4805f] font-bold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-1.5 left-1 right-1 h-[2px] bg-[#c4805f] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
