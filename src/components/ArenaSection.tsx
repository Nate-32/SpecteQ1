import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ARENA_ZONES, EVENT_CONFIG } from '../data/specteqData';

export const ArenaSection: React.FC = () => {
  return (
    <section
      id="arena"
      className="relative py-24 lg:py-32 bg-[#0B0A19] border-b border-white/10 overflow-hidden"
    >
      {/* Dark Futuristic Arena Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 55% at 50% 15%, rgba(255, 60, 172, 0.2) 0%, rgba(155, 92, 255, 0.16) 40%, rgba(11, 10, 25, 0.98) 85%)',
        }}
      />

      {/* Perspective Arena Horizon Grid */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-45 overflow-hidden"
        aria-hidden="true"
      >
        <div className="horizon-perspective-grid w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A19] via-transparent to-[#0B0A19]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Arena Hero Banner */}
        <div className="max-w-3xl space-y-5">
          <p className="font-subheading font-semibold text-sm tracking-[0.22em] text-[#00E5FF]">
            LEVEL 03 · FINAL SHOWDOWN
          </p>
          <h2
            className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            THE ROBOTICS ARENA
          </h2>
          <p className="font-display font-bold text-base sm:text-xl tracking-wider bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-[#FF3CAC] bg-clip-text text-transparent">
            YOUR MACHINE. YOUR MISSION. YOUR MOMENT.
          </p>
          <p className="text-base sm:text-lg text-[#B8B4CA] leading-relaxed">
            Every completed training mission and hardware calibration leads here. Gaming
            Teams deploy their custom machines onto the main coastal arena floor to
            compete in timed trials, maze navigation heats, and championship finals.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="min-h-[46px] inline-flex items-center gap-2.5 px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-[#0B0A19] bg-gradient-to-r from-[#FF3CAC] to-[#FF875E] text-white hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 shadow-[0_0_28px_-6px_rgba(255,60,172,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Claim Arena Entry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs sm:text-sm text-[#B8B4CA]">
              {EVENT_CONFIG.venuePlaceholder}
            </span>
          </div>
        </div>

        {/* Arena Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARENA_ZONES.map((zone) => (
            <article
              key={zone.id}
              className="liquid-glass liquid-glass-interactive rounded-2xl p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <span className="block text-xs font-mono-tabular text-[#00E5FF]">
                  {zone.zoneLabel}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {zone.title}
                </h3>
                <p className="text-sm text-[#B8B4CA] leading-relaxed">
                  {zone.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-[#FF875E] font-medium">
                {zone.specs}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
