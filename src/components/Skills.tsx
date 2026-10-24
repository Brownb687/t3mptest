import React from 'react';
import { siteData, SkillItem } from '../data/siteData';
import { Handshake, Megaphone, Users, Flag, PenLine } from 'lucide-react';

const iconMap: Record<SkillItem['iconName'], React.ComponentType<{ className?: string }>> = {
  Handshake,
  Megaphone,
  Users,
  Flag,
  PenLine,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-14 sm:py-18 lg:py-24 border-t border-[#2a2220] transition-colors"
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-left">
          <h2 className="section-title-fluid font-heading font-extrabold tracking-tight text-[#f5efec]">
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#b3a7a2]">
            What I bring to a project.
          </p>
        </div>

        {/* Skills Grid: 1 col (base), 2 cols (sm), 3 cols (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {siteData.skills.map((skill) => {
            const IconComponent = iconMap[skill.iconName] || Flag;

            return (
              <div
                key={skill.id}
                className="proof-card p-5 sm:p-6 flex items-center gap-4 group hover:border-[rgba(196,128,95,0.5)] hover:shadow-[0_0_40px_rgba(196,128,95,0.12)] transition-all duration-200 min-w-0"
              >
                {/* Accent Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#241b18] border border-[rgba(196,128,95,0.3)] flex items-center justify-center shrink-0 text-[#c4805f] group-hover:scale-105 group-hover:border-[#c4805f] transition-all">
                  <IconComponent className="w-6 h-6 stroke-[1.8]" />
                </div>

                {/* Skill Label */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#f5efec] leading-snug group-hover:text-[#c4805f] transition-colors min-w-0 [overflow-wrap:anywhere]">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
