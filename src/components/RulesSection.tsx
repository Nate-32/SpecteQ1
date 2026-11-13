import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { RULE_GROUPS } from '../data/specteqData';

export const RulesSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(RULE_GROUPS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="rules"
      className="relative py-20 lg:py-28 bg-[#0B0A19] border-b border-white/10 coastal-grid"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-2xl">
          <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#FF3CAC]">
            COMPETITION GOVERNANCE
          </p>
          <h2
            className="font-display font-bold text-2xl sm:text-4xl text-white"
            style={{ textWrap: 'balance' }}
          >
            Rules and Guidelines
          </h2>
          <p className="text-base text-[#B8B4CA]">
            Confirmed structural standards are listed alongside clearly marked 2027
            configurable rulebook slots. Expand any panel to inspect details.
          </p>
        </div>

        {/* Expandable Accordion Panels */}
        <div className="space-y-3">
          {RULE_GROUPS.map((group, idx) => {
            const isOpen = openId === group.id;
            return (
              <div
                key={group.id}
                className={`liquid-glass rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'border-[#00E5FF]/45' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(group.id)}
                  aria-expanded={isOpen}
                  aria-controls={`rule-panel-${group.id}`}
                  className="w-full min-h-[64px] px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B4CA]">
                      <span className="font-mono-tabular text-[#00E5FF] font-semibold">
                        0{idx + 1}.
                      </span>
                      <span>{group.statusNote}</span>
                    </div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white">
                      {group.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-[#B8B4CA] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00E5FF]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`rule-panel-${group.id}`}
                    className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4"
                  >
                    <p className="text-sm text-[#B8B4CA]">{group.summary}</p>
                    <ul className="space-y-2.5 text-sm text-white/90">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="text-[#FF3CAC] mt-0.5">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
