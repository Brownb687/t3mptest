import React, { useState, useRef } from 'react';
import { siteData } from '../data/siteData';
import { Send, ArrowUpRight, Check, AlertCircle, Copy, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  // Form State
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [budget, setBudget] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<{ name?: string; project?: string }>({});

  // Result Panel State
  const [showResult, setShowResult] = useState(false);
  const [briefText, setBriefText] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [telegramTapped, setTelegramTapped] = useState(false);

  const resultPanelRef = useRef<HTMLDivElement>(null);
  const briefTextareaRef = useRef<HTMLTextAreaElement>(null);

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((item) => item !== need) : [...prev, need]
    );
  };

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      if (briefTextareaRef.current) {
        briefTextareaRef.current.select();
        document.execCommand('copy');
      }
    }
  };

  const handleBuildBrief = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; project?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your name or pseudonym.';
    }
    if (!project.trim()) {
      newErrors.project = 'Please provide your project name or X handle.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // Construct brief according to exact specification:
    // Hi Temp3st, here is my brief:
    //
    // Name: ...
    // Project: ...
    // Need: ...
    // Goal: ...
    // Start date: ...
    // Budget: ...
    const lines: string[] = ['Hi Temp3st, here is my brief:', ''];
    lines.push(`Name: ${name.trim()}`);
    lines.push(`Project: ${project.trim()}`);

    if (selectedNeeds.length > 0) {
      lines.push(`Need: ${selectedNeeds.join(', ')}`);
    }
    if (goal.trim()) {
      lines.push(`Goal: ${goal.trim()}`);
    }
    if (startDate.trim()) {
      lines.push(`Start date: ${startDate.trim()}`);
    }
    if (budget.trim()) {
      lines.push(`Budget: ${budget.trim()}`);
    }

    const generatedBrief = lines.join('\n');
    setBriefText(generatedBrief);
    setShowResult(true);
    setTelegramTapped(false);

    // Smoothly scroll the result panel into view
    setTimeout(() => {
      resultPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 80);
  };

  const handleCopyClick = async () => {
    await copyToClipboard(briefText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleOpenTelegramClick = async () => {
    // Copy the brief first, without calling preventDefault so the link opens
    await copyToClipboard(briefText);
    setTelegramTapped(true);
  };

  const emailSubject = `Brief from ${project.trim() || 'New Partner'}`;
  const mailtoHref = `mailto:${siteData.links.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(briefText)}`;

  return (
    <section
      id="contact"
      className="py-14 sm:py-18 lg:py-28 border-t border-[#2a2220] transition-colors"
    >
      {/* Screen Reader Live Region for copy feedback */}
      <div className="sr-only" aria-live="polite" role="status">
        {isCopied ? 'Brief copied to clipboard' : ''}
      </div>

      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Information & Identity (mobile: first in order) */}
          <div className="lg:col-span-5 text-left min-w-0">
            <h2 className="section-title-fluid font-heading font-extrabold tracking-tight text-[#f5efec] leading-tight break-words">
              Work with me
            </h2>
            <p className="mt-4 text-base text-[#b3a7a2] leading-[1.6]">
              Need a KOL, an ambassador or a community lead for your project? Send a brief and let&apos;s talk. Open to paid work and collabs.
            </p>

            {/* Direct Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {/* Primary: filled accent pill, dark text, min 44px */}
              <a
                href={siteData.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] text-sm font-bold rounded-full bg-[#c4805f] text-[#120e0d] hover:bg-[#d99273] active:scale-95 transition-all shadow-[0_0_20px_rgba(196,128,95,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0d] focus-visible:ring-[#c4805f] cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Message on Telegram</span>
              </a>

              {/* Secondary: outlined accent pill, light text, min 44px */}
              <a
                href={siteData.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 min-h-[44px] text-sm font-semibold rounded-full border border-[#c4805f] text-[#f5efec] hover:bg-[#c4805f]/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120e0d] focus-visible:ring-[#c4805f] cursor-pointer"
              >
                <span>Follow on X</span>
                <ArrowUpRight className="w-4 h-4 text-[#c4805f]" />
              </a>
            </div>

            {/* Identity Row */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#2a2220] flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-[#c4805f] shrink-0 bg-[#241c1a]">
                <img
                  src={siteData.profile.pfpUrl}
                  alt={siteData.profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-heading font-extrabold text-[#f5efec] text-base leading-tight truncate [overflow-wrap:anywhere]">
                  {siteData.profile.handle}
                </p>
                <p className="text-xs text-[#b3a7a2] mt-0.5 leading-snug">
                  {siteData.profile.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Brief Form with 8px offset accent card behind it (wrapper has padding to prevent viewport overflow) */}
          <div className="lg:col-span-7 relative pr-2.5 pb-2.5 sm:pr-3 sm:pb-3 min-w-0">
            {/* Offset Accent Block (offset 8px bottom-right, stays fully inside container thanks to wrapper padding) */}
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 rounded-[16px] bg-[#c4805f]/25 border border-[#c4805f]/40 pointer-events-none"
              aria-hidden="true"
            />

            {/* Front Form Card */}
            <div className="relative z-10 bg-[#1b1615] rounded-[16px] border border-[rgba(196,128,95,0.25)] p-5 sm:p-8 shadow-[0_0_40px_rgba(196,128,95,0.06)] text-left min-w-0">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#f5efec] tracking-tight">
                Write a quick brief
              </h3>
              <p className="text-xs text-[#b3a7a2] mt-1 mb-6">
                Fill the fields below to generate your brief, then copy or send it directly.
              </p>

              <form onSubmit={handleBuildBrief} noValidate className="space-y-5">
                {/* Field: Your name (required) - 16px font to prevent iOS zoom */}
                <div>
                  <label
                    htmlFor="brief-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-1.5"
                  >
                    Your name <span className="text-[#c4805f]">*</span>
                  </label>
                  <input
                    id="brief-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Your name or telegram @handle"
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] placeholder-[#b3a7a2]/50 text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#c4805f] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field: Project (required) - 16px font */}
                <div>
                  <label
                    htmlFor="brief-project"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-1.5"
                  >
                    Project <span className="text-[#c4805f]">*</span>
                  </label>
                  <input
                    id="brief-project"
                    type="text"
                    value={project}
                    onChange={(e) => {
                      setProject(e.target.value);
                      if (errors.project) setErrors((prev) => ({ ...prev, project: undefined }));
                    }}
                    placeholder="Project name or X handle"
                    className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] placeholder-[#b3a7a2]/50 text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors"
                  />
                  {errors.project && (
                    <p className="mt-1 text-xs text-[#c4805f] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.project}</span>
                    </p>
                  )}
                </div>

                {/* Field: What you need (multi-select chips, wrapping, touch target >= 44px) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-2">
                    What you need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {siteData.needOptions.map((opt) => {
                      const isSelected = selectedNeeds.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleNeed(opt)}
                          aria-pressed={isSelected}
                          className={`text-xs px-3.5 py-2 min-h-[44px] rounded-full transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c4805f] ${
                            isSelected
                              ? 'bg-[#c4805f] text-[#120e0d] font-bold border border-[#c4805f] shadow-[0_0_12px_rgba(196,128,95,0.3)]'
                              : 'bg-[#120e0d] text-[#f5efec] border border-[rgba(196,128,95,0.3)] hover:border-[#c4805f]'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />}
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field: Campaign goal (textarea) - 16px font */}
                <div>
                  <label
                    htmlFor="brief-goal"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-1.5"
                  >
                    Campaign goal
                  </label>
                  <textarea
                    id="brief-goal"
                    rows={3}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="Token launch, testnet push, more signups..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] placeholder-[#b3a7a2]/50 text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Two Column Row: Start date & Budget (stack base, side by side from sm) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Start Date - 16px font */}
                  <div>
                    <label
                      htmlFor="brief-startdate"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-1.5"
                    >
                      Start date
                    </label>
                    <input
                      id="brief-startdate"
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="e.g. 1 November"
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] placeholder-[#b3a7a2]/50 text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Budget - 16px font */}
                  <div>
                    <label
                      htmlFor="brief-budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#f5efec] mb-1.5"
                    >
                      Budget (optional)
                    </label>
                    <input
                      id="brief-budget"
                      type="text"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="e.g. $500"
                      className="w-full px-4 py-2.5 min-h-[44px] rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] placeholder-[#b3a7a2]/50 text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button: Build my brief (min 44px) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] text-sm sm:text-base font-bold rounded-full bg-[#c4805f] text-[#120e0d] hover:bg-[#d99273] active:scale-98 transition-all shadow-[0_0_25px_rgba(196,128,95,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1615] focus-visible:ring-[#c4805f] cursor-pointer"
                  >
                    <span>Build my brief</span>
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>

              {/* STEP 2: The Result Panel */}
              {showResult && (
                <div
                  ref={resultPanelRef}
                  className="mt-8 pt-6 border-t border-[#2a2220] transition-opacity duration-300 min-w-0"
                >
                  {/* Instructions line */}
                  <p className="text-xs sm:text-sm text-[#b3a7a2] mb-3 leading-relaxed">
                    Your brief is ready. Copy it and send it to me on Telegram, or send it by email.
                  </p>

                  {/* Editable 8-row textarea (16px font to prevent zoom) */}
                  <div className="mb-4">
                    <label htmlFor="brief-result-text" className="sr-only">
                      Generated brief text
                    </label>
                    <textarea
                      id="brief-result-text"
                      ref={briefTextareaRef}
                      rows={8}
                      value={briefText}
                      onChange={(e) => setBriefText(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#120e0d] border border-[rgba(196,128,95,0.25)] text-[#f5efec] text-[16px] focus:border-[#c4805f] focus:ring-1 focus:ring-[#c4805f] focus:outline-none transition-colors leading-relaxed font-mono sm:font-sans resize-y"
                    />
                  </div>

                  {/* Action Buttons:
                      Mobile (<sm): Row 1 has Copy brief and Open Telegram (2-column grid), Row 2 has Send by email (full width).
                      Desktop (sm+): One single row with all 3 buttons.
                  */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="grid grid-cols-2 sm:flex sm:items-center gap-3">
                      {/* Button 1: Copy brief (filled accent pill, min-h-[44px]) */}
                      <button
                        type="button"
                        onClick={handleCopyClick}
                        className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 min-h-[44px] text-xs sm:text-sm font-bold rounded-full bg-[#c4805f] text-[#120e0d] hover:bg-[#d99273] active:scale-95 transition-all shadow-[0_0_20px_rgba(196,128,95,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1615] focus-visible:ring-[#c4805f] cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3] shrink-0" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 shrink-0" />
                            <span className="truncate">Copy brief</span>
                          </>
                        )}
                      </button>

                      {/* Button 2: Open Telegram (outlined pill, min-h-[44px]) */}
                      <a
                        href={siteData.links.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleOpenTelegramClick}
                        className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 min-h-[44px] text-xs sm:text-sm font-semibold rounded-full border border-[#c4805f] text-[#f5efec] hover:bg-[#c4805f]/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1615] focus-visible:ring-[#c4805f] cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5 text-[#c4805f] shrink-0" />
                        <span className="truncate">Open Telegram</span>
                      </a>
                    </div>

                    {/* Button 3: Send by email (outlined pill, min-h-[44px]) */}
                    <a
                      href={mailtoHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 min-h-[44px] text-xs sm:text-sm font-semibold rounded-full border border-[#c4805f] text-[#f5efec] hover:bg-[#c4805f]/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1b1615] focus-visible:ring-[#c4805f] cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#c4805f] shrink-0" />
                      <span>Send by email</span>
                    </a>
                  </div>

                  {/* Feedback note after Telegram is tapped */}
                  {telegramTapped && (
                    <p className="mt-3 text-xs text-[#3ecf8e] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
                      <span>Brief copied. Paste it in the chat and hit send.</span>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
