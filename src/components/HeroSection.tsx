import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { EVENT_CONFIG } from '../data/specteqData';

export interface PlayerSessionState {
  status: string;
  currentLevel: number;
  missionName: string | null;
  missionStatus: string;
  registeredTeam: string | null;
}

interface HeroSectionProps {
  playerState: PlayerSessionState;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ playerState }) => {
  const formattedLevel = String(playerState.currentLevel).padStart(2, '0');

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/15"
    >
      {/* Subtle Left Readability Scrim keeping the Vice City Sunset & Car visible */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(95deg, rgba(11, 10, 25, 0.78) 0%, rgba(11, 10, 25, 0.52) 48%, rgba(11, 10, 25, 0.14) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl space-y-6">
          {/* Subtitle Kicker */}
          <p className="font-subheading font-semibold text-sm sm:text-base tracking-[0.24em] text-[#00E5FF]">
            {EVENT_CONFIG.subtitle} · {EVENT_CONFIG.editionYear} EDITION
          </p>

          {/* Hero Typography Lockup modeled after Hero Font.png */}
          <div className="space-y-3">
            {/* Top Geometric Cyan-to-Violet Accent Line */}
            <div className="flex items-center gap-2 max-w-xl" aria-hidden="true">
              <span className="h-[2px] w-10 bg-[#00E5FF] skew-x-[-28deg]" />
              <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-transparent" />
            </div>

            {/* Main Heading: Clean White Wide Futuristic Italic Techno */}
            <h1
              className="font-display font-black italic tracking-[0.03em] text-white leading-[1.02] drop-shadow-[0_6px_24px_rgba(0,0,0,0.65)]"
              style={{ fontSize: 'clamp(2.65rem, 5.8vw, 4.75rem)', textWrap: 'balance' }}
            >
              SpecteQ 2027
            </h1>

            {/* Bottom Geometric Bracket & Segmented Accent */}
            <div className="flex items-center gap-3 max-w-2xl" aria-hidden="true">
              <span className="h-[2px] w-16 bg-gradient-to-r from-[#00E5FF] to-[#9B5CFF]" />
              <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#9B5CFF]/70 via-[#00E5FF]/40 to-transparent" />
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-1 bg-[#00E5FF] skew-x-[-25deg]" />
                <span className="w-2.5 h-1 bg-[#7B83FF] skew-x-[-25deg]" />
                <span className="w-2.5 h-1 bg-[#9B5CFF] skew-x-[-25deg]" />
              </span>
            </div>

            {/* Tagline: Italic Script with Cyan-to-Violet Gradient & Subtle Glowing Underline */}
            <div className="pt-1 inline-block">
              <p
                className="font-script italic text-2xl sm:text-3xl md:text-4xl tracking-wide bg-gradient-to-r from-[#00E5FF] via-[#7C8BFF] to-[#9B5CFF] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,229,255,0.28)] pr-2"
              >
                {EVENT_CONFIG.tagline}
              </p>
              {/* Curved Tapered Glowing Underline */}
              <svg
                viewBox="0 0 360 14"
                className="w-full max-w-[340px] h-3 mt-0.5 overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="taglineUnderline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="55%" stopColor="#7C8BFF" />
                    <stop offset="100%" stopColor="#9B5CFF" stopOpacity="0.45" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 10 Q165 2 354 6"
                  fill="none"
                  stroke="url(#taglineUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.55))' }}
                />
              </svg>
            </div>
          </div>

          {/* Lead Copy */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {EVENT_CONFIG.heroDescription}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#arena"
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-sm sm:text-base text-[#0B0A19] bg-[#00E5FF] hover:bg-[#59F2FF] transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_28px_-6px_rgba(0,229,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Enter the Arena</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#missions"
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white liquid-glass-subtle liquid-glass-interactive hover:text-[#00E5FF] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Missions</span>
            </a>
          </div>

          {/* Compact Liquid-Glass Player Status Panel */}
          <div className="pt-4">
            <div className="liquid-glass rounded-2xl p-5 max-w-xl">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/15">
                <span className="font-display font-bold text-sm tracking-wider text-white">
                  PLAYER 01
                </span>
                <span className="text-xs font-mono-tabular text-white/80">
                  {playerState.registeredTeam
                    ? `Team: ${playerState.registeredTeam}`
                    : 'Season 2027 · Open Entry'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3.5">
                <div>
                  <span className="block text-xs text-white/70 mb-0.5">STATUS</span>
                  <span className="font-subheading font-bold text-base tracking-wide text-[#00E5FF]">
                    {playerState.status}
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-white/70 mb-0.5">
                    CURRENT LEVEL
                  </span>
                  <span className="font-mono-tabular font-bold text-base text-white">
                    {formattedLevel} / 03
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-white/70 mb-0.5">
                    MISSION STATUS
                  </span>
                  <span className="font-subheading font-bold text-base tracking-wide text-[#FF875E]">
                    {playerState.missionStatus}
                  </span>
                </div>
              </div>

              {playerState.missionName && (
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between gap-3 text-xs text-white/80">
                  <span>
                    Active Mission:{' '}
                    <strong className="text-white">{playerState.missionName}</strong>
                  </span>
                  <a
                    href="#levels"
                    className="text-[#00E5FF] hover:underline whitespace-nowrap shrink-0"
                  >
                    View Level Progress
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
