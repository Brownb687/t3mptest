/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Dealroom } from './components/Dealroom';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    title?: string;
    caption?: string;
  }>({
    isOpen: false,
    imageUrl: null,
  });

  const handleOpenLightbox = (imageUrl: string, title?: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#120e0d] text-[#f5efec] overflow-x-hidden flex flex-col selection:bg-[#c4805f] selection:text-[#120e0d]">
      {/* 1. Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <SectionReveal>
          <Hero />
        </SectionReveal>

        {/* 3. Skills Section */}
        <SectionReveal>
          <Skills />
        </SectionReveal>

        {/* 4. Work Section */}
        <SectionReveal>
          <Work onOpenLightbox={handleOpenLightbox} />
        </SectionReveal>

        {/* 5. Dealroom Section */}
        <SectionReveal>
          <Dealroom onOpenLightbox={handleOpenLightbox} />
        </SectionReveal>

        {/* 6. Contact Section */}
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Proof Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />
    </div>
  );
}
