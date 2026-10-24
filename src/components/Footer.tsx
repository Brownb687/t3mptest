import React from 'react';
import { siteData } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#2a2220] pt-8 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] text-center transition-colors">
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <p className="text-xs sm:text-sm text-[#b3a7a2] break-words">
          © {siteData.profile.year} {siteData.profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
