import React, { useEffect } from 'react';
import { X as CloseIcon } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  imageAlt?: string;
  title?: string;
  caption?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt = 'Screenshot proof',
  title,
  caption,
}) => {
  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image proof preview"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Close button: at least 44px, safe-area aware */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close proof preview"
        className="fixed top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-[#1b1615] border border-[rgba(196,128,95,0.4)] text-[#f5efec] hover:text-[#c4805f] hover:border-[#c4805f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4805f] transition-all cursor-pointer shadow-xl"
      >
        <CloseIcon className="w-5 h-5" />
      </button>

      {/* Content card */}
      <div
        className="relative max-w-2xl w-full max-h-[90dvh] flex flex-col items-center bg-[#1b1615] border border-[rgba(196,128,95,0.3)] rounded-2xl p-3 sm:p-4 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header if title exists */}
        {title && (
          <div className="w-full pb-2.5 mb-2 border-b border-[#2a2220] flex items-center justify-between text-left px-1">
            <span className="font-heading font-extrabold text-[#f5efec] text-sm sm:text-lg truncate pr-2">
              {title}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#c4805f] font-semibold border border-[rgba(196,128,95,0.3)] px-2.5 py-0.5 rounded-full shrink-0">
              Proof
            </span>
          </div>
        )}

        {/* Full-size image container */}
        <div className="relative w-full flex-1 min-h-0 overflow-auto flex items-center justify-center rounded-xl bg-[#120e0d]">
          <img
            src={imageUrl}
            alt={imageAlt}
            referrerPolicy="no-referrer"
            className="max-w-[92vw] max-h-[72dvh] w-auto h-auto object-contain rounded-lg"
          />
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-2.5 text-xs sm:text-sm text-[#b3a7a2] text-left w-full px-1 leading-relaxed">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
