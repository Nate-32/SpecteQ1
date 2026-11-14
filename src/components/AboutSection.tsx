import React, { useState } from 'react';
import { ASSET_PATHS, JOURNEY_STAGES, PDF_VOCABULARY_MAP } from '../data/specteqData';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const activeStage = JOURNEY_STAGES[activeStageIdx];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 border-b border-white/15 bg-[#0B0A19]/25"
    >
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Split Layout: Left Identity & Concept / Right Supplied Hardware Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 space-y-4">
              <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#FF3CAC]">
                ABOUT SPECTEQ 2027
              </p>
              <h2
                className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Where Robotics Engineering Meets Interactive Progression
              </h2>
              <p className="text-base text-white/85 leading-relaxed">
                SpecteQ transforms traditional robotics workshops and engineering
                tournaments into one continuous playable journey. Participants enter as{' '}
                <span className="text-white font-semibold">Players</span>, form{' '}
                <span className="text-white font-semibold">Gaming Teams</span>, master
                hardware skills through structured{' '}
                <span className="text-white font-semibold">Missions</span>, and advance
                through four progressive levels toward{' '}
                <span className="text-white font-semibold">The Robotics Arena</span>.
              </p>
            </div>

            {/* SpecteQ Event Vocabulary Grid */}
            <div className="liquid-glass-subtle rounded-2xl p-5 sm:p-6">
              <h3 className="font-subheading font-bold text-sm tracking-wider text-[#00E5FF] mb-3.5">
                THE SPECTEQ EXECUTION MODEL
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                {PDF_VOCABULARY_MAP.map((entry) => (
                  <div
                    key={entry.standard}
                    className="flex items-center justify-between gap-2 py-1.5 border-b border-white/10"
                  >
                    <span className="text-white/75">{entry.standard}</span>
                    <span className="font-medium text-white whitespace-nowrap">
                      {entry.specteq}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supplied Hardware Architecture Blueprint inside Liquid-Glass Panel */}
          <div className="lg:col-span-6">
            <div className="liquid-glass liquid-glass-interactive rounded-2xl h-full flex flex-col justify-between group">
              <div className="px-6 pt-5 pb-3 border-b border-white/15 flex items-center justify-between gap-4">
                <span className="font-subheading font-bold text-sm tracking-wider text-white">
                  HARDWARE ARCHITECTURE BLUEPRINT
                </span>
                <span className="text-xs text-[#00E5FF]">System Schematic</span>
              </div>

              <div className="relative flex-1 flex items-center justify-center p-4 sm:p-6">
                {/* Subtle Cyan & Magenta Ambient Frame Glow */}
                <div
                  className="pointer-events-none absolute inset-4 rounded-xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  aria-hidden="true"
                  style={{
                    boxShadow:
                      '0 0 36px -10px rgba(0, 229, 255, 0.32), 0 0 42px -12px rgba(255, 60, 172, 0.28)',
                  }}
                />
                <picture className="relative z-10 w-full flex justify-center">
                  <source srcSet={ASSET_PATHS.hardwareBlueprint} type="image/webp" />
                  <img
                    src={ASSET_PATHS.hardwareBlueprintPngFallback}
                    alt="SpecteQ Hardware Architecture Blueprint showing Optical Array, MCU Core, and Drive Pod"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto max-h-[380px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </picture>
              </div>

              <div className="px-6 py-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
                <span>Optical Array · MCU Core · Omni / Differential Drive Pod</span>
                <a
                  href="#missions"
                  className="text-[#00E5FF] font-medium hover:underline whitespace-nowrap"
                >
                  Explore Missions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Participant Journey: LEARN -> BUILD -> TEST -> COMPETE */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                Participant Journey
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Select any phase below to inspect how Players progress from first boot to
                High Score Champion.
              </p>
            </div>
            <div className="font-mono-tabular text-xs text-[#00E5FF]">
              Stage {activeStageIdx + 1} of {JOURNEY_STAGES.length}
            </div>
          </div>

          {/* Animated Progress Track */}
          <div className="relative">
            <div
              className="hidden md:block absolute top-6 left-8 right-8 h-0.5 bg-white/15"
              aria-hidden="true"
            >
              <div
                className="h-full bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-[#FF3CAC] transition-all duration-300"
                style={{
                  width: `${(activeStageIdx / (JOURNEY_STAGES.length - 1)) * 100}%`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {JOURNEY_STAGES.map((stage, index) => {
                const isSelected = index === activeStageIdx;
                const isCompleted = index <= activeStageIdx;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageIdx(index)}
                    className={`text-left rounded-xl p-4 transition-all duration-200 border backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      isSelected
                        ? 'bg-white/15 border-[#00E5FF]/65 shadow-[0_0_24px_-8px_rgba(0,229,255,0.45)]'
                        : 'bg-white/5 border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`font-mono-tabular text-xs font-bold px-2 py-0.5 rounded ${
                          isCompleted
                            ? 'bg-[#00E5FF]/20 text-[#00E5FF]'
                            : 'bg-white/10 text-white/80'
                        }`}
                      >
                        {stage.step}
                      </span>
                      <span className="text-xs text-white/75 truncate">
                        {stage.specteqTerm}
                      </span>
                    </div>
                    <div className="font-display font-bold text-base text-white">
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Summary */}
          <div className="pt-2 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-subheading font-semibold tracking-wider text-[#FF875E]">
                {activeStage.step}. {activeStage.specteqTerm.toUpperCase()}
              </div>
              <p className="text-sm sm:text-base text-white/85 max-w-3xl">
                {activeStage.description}
              </p>
            </div>
            <a
              href="#levels"
              className="text-sm font-semibold text-[#00E5FF] hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Explore 4-Level Map →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
