import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { EVENT_CONFIG } from '../data/specteqData';
import { HeroWaterfrontBackdrop } from './ViceCityArtwork';

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
      className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-white/10"
    >
      <HeroWaterfrontBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          {/* Subtitle Kicker */}
          <p className="font-subheading font-semibold text-sm sm:text-base tracking-[0.22em] text-[#00E5FF]">
            {EVENT_CONFIG.subtitle} · {EVENT_CONFIG.editionYear} EDITION
          </p>

          {/* Main Display Heading */}
          <h1
            className="font-display font-black tracking-tight text-white leading-[1.05]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', textWrap: 'balance' }}
          >
            {EVENT_CONFIG.fullTitle}
          </h1>

          {/* Tagline */}
          <p className="font-display font-bold text-lg sm:text-xl tracking-widest bg-gradient-to-r from-[#FF875E] via-[#FF3CAC] to-[#00E5FF] bg-clip-text text-transparent">
            {EVENT_CONFIG.tagline}
          </p>

          {/* Lead Copy */}
          <p className="text-base sm:text-lg text-[#B8B4CA] leading-relaxed max-w-xl">
            {EVENT_CONFIG.heroDescription}
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#arena"
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-sm sm:text-base text-[#0B0A19] bg-[#00E5FF] hover:bg-[#4DF0FF] transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_28px_-6px_rgba(0,229,255,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Enter the Arena</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#missions"
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-white liquid-glass-subtle hover:border-[#FF3CAC]/50 hover:text-[#FF3CAC] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3CAC]"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Missions</span>
            </a>
          </div>

          {/* Compact Liquid-Glass Player Status Panel */}
          <div className="pt-4">
            <div className="liquid-glass rounded-2xl p-5 max-w-xl">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10">
                <span className="font-display font-bold text-sm tracking-wider text-white">
                  PLAYER 01
                </span>
                <span className="text-xs font-mono-tabular text-[#B8B4CA]">
                  {playerState.registeredTeam
                    ? `Team: ${playerState.registeredTeam}`
                    : 'Season 2027 · Open Entry'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3.5">
                <div>
                  <span className="block text-xs text-[#B8B4CA] mb-0.5">STATUS</span>
                  <span className="font-subheading font-bold text-base tracking-wide text-[#00E5FF]">
                    {playerState.status}
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-[#B8B4CA] mb-0.5">
                    CURRENT LEVEL
                  </span>
                  <span className="font-mono-tabular font-bold text-base text-white">
                    {formattedLevel} / 03
                  </span>
                </div>

                <div>
                  <span className="block text-xs text-[#B8B4CA] mb-0.5">
                    MISSION STATUS
                  </span>
                  <span className="font-subheading font-bold text-base tracking-wide text-[#FF875E]">
                    {playerState.missionStatus}
                  </span>
                </div>
              </div>

              {playerState.missionName && (
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs text-[#B8B4CA]">
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
