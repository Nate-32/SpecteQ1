import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { ROBOTICS_CATEGORIES, RoboticsCategory } from '../data/specteqData';
import { ACCENT_HEX, CategoryGlyph } from './ViceCityArtwork';

export const CategoriesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<RoboticsCategory | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCategory(null);
      }
    };
    if (selectedCategory) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedCategory]);

  return (
    <section
      id="categories"
      className="relative py-20 lg:py-28 bg-[#15132B] border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Neon City Horizon Glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-25"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(155, 92, 255, 0.38) 0%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#00E5FF]">
              ROBOTICS CATEGORY TERMINALS
            </p>
            <h2
              className="font-display font-bold text-2xl sm:text-4xl text-white"
              style={{ textWrap: 'balance' }}
            >
              Engineering Disciplines Across the Arena
            </h2>
            <p className="text-base text-[#B8B4CA]">
              Inspect each liquid-glass terminal to review domain focus areas and
              configurable 2027 technical specification slots.
            </p>
          </div>
          <p className="text-xs text-[#B8B4CA] md:text-right">
            Select any terminal to open technical briefing
          </p>
        </div>

        {/* Mobile Horizontal Scroll / Desktop 3-Column Terminal Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
          {ROBOTICS_CATEGORIES.map((category) => {
            const accentHex = ACCENT_HEX[category.accent];
            return (
              <article
                key={category.id}
                className="min-w-[82vw] sm:min-w-[340px] md:min-w-0 snap-start liquid-glass liquid-glass-interactive rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  {/* Top row: Unboxed terminal status text */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="text-xs font-medium truncate"
                      style={{ color: accentHex }}
                    >
                      {category.statusLabel}
                    </span>
                  </div>

                  {/* Illustration & Title */}
                  <div className="flex items-center gap-4">
                    <CategoryGlyph type={category.glyphType} accent={category.accent} />
                    <h3 className="font-display font-bold text-lg text-white leading-snug">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#B8B4CA] leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#B8B4CA]">
                    {category.technicalSpecs[0]?.value}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="min-h-[40px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Category Terminal Detail Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0A19]/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="liquid-glass rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <CategoryGlyph
                  type={selectedCategory.glyphType}
                  accent={selectedCategory.accent}
                />
                <div>
                  <p
                    className="text-xs font-medium mb-1"
                    style={{ color: ACCENT_HEX[selectedCategory.accent] }}
                  >
                    {selectedCategory.statusLabel}
                  </p>
                  <h3
                    id="category-modal-title"
                    className="font-display font-bold text-xl sm:text-2xl text-white"
                  >
                    {selectedCategory.name}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                aria-label="Close category briefing"
                className="w-10 h-10 rounded-lg border border-white/15 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="font-subheading font-bold text-sm tracking-wider text-[#00E5FF]">
                CATEGORY OVERVIEW
              </h4>
              <p className="text-sm sm:text-base text-[#B8B4CA] leading-relaxed">
                {selectedCategory.fullDescription}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-subheading font-bold text-sm tracking-wider text-[#FF3CAC]">
                CHALLENGE FOCUS AREAS
              </h4>
              <ul className="space-y-2 text-sm text-[#B8B4CA]">
                {selectedCategory.challengeFocus.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#00E5FF] mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-subheading font-bold text-sm tracking-wider text-white">
                TECHNICAL SPECIFICATION SLOTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedCategory.technicalSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-[#0B0A19]/70 border border-white/10 rounded-xl p-3.5"
                  >
                    <span className="block text-xs text-[#B8B4CA] mb-1">
                      {spec.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#B8B4CA] max-w-md">
                {selectedCategory.participationNotes}
              </p>
              <a
                href="#register"
                onClick={() => setSelectedCategory(null)}
                className="min-h-[42px] inline-flex items-center justify-center px-5 py-2 rounded-lg text-sm font-semibold text-[#0B0A19] bg-[#00E5FF] hover:bg-[#4DF0FF] transition-colors whitespace-nowrap shrink-0"
              >
                Register Interest
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
