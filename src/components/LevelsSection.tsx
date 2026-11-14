import React, { useState } from 'react';
import { Award, CheckCircle2, Lock, Unlock } from 'lucide-react';
import { GAME_LEVELS } from '../data/specteqData';
import { ACCENT_HEX } from './ViceCityArtwork';
import { Reveal } from './Reveal';

interface LevelsSectionProps {
  unlockedUpTo: number;
  activeMissionName: string | null;
  onUnlockNextLevel: () => void;
}

export const LevelsSection: React.FC<LevelsSectionProps> = ({
  unlockedUpTo,
  activeMissionName,
  onUnlockNextLevel,
}) => {
  const [selectedLevelId, setSelectedLevelId] = useState<number>(0);

  const selectedLevel =
    GAME_LEVELS.find((lvl) => lvl.id === selectedLevelId) || GAME_LEVELS[0];

  const getDynamicLevelState = (levelId: number) => {
    if (levelId < unlockedUpTo) {
      return { status: 'Completed', progress: 100, locked: false };
    }
    if (levelId === unlockedUpTo) {
      return {
        status: activeMissionName ? 'Mission Active' : 'Unlocked',
        progress: activeMissionName ? 60 : 25,
        locked: false,
      };
    }
    return { status: 'Locked', progress: 0, locked: true };
  };

  const selectedState = getDynamicLevelState(selectedLevel.id);

  return (
    <section
      id="levels"
      className="relative py-20 lg:py-28 border-b border-white/15 bg-[#0B0A19]/30 overflow-hidden"
    >
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="liquid-glass-subtle rounded-2xl p-6 max-w-2xl space-y-2.5">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#00E5FF]">
              FOUR-STAGE PROGRESSION
            </p>
            <h2
              className="font-display font-bold text-2xl sm:text-4xl text-white"
              style={{ textWrap: 'balance' }}
            >
              Level Progression System
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Click any level node to inspect deliverables, completion status, and
              unlocked milestones along the SpecteQ player journey.
            </p>
          </div>

          <div className="flex items-center gap-4 liquid-glass-subtle rounded-xl px-4 py-3 self-start lg:self-auto">
            <span className="font-mono-tabular text-xs text-white/85">
              Player Progress: Level 0{unlockedUpTo} / 03
            </span>
            {unlockedUpTo < 3 && (
              <button
                type="button"
                onClick={onUnlockNextLevel}
                className="min-h-[38px] px-4 py-1.5 rounded-lg text-xs font-semibold text-[#0B0A19] bg-[#00E5FF] hover:bg-[#59F2FF] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Simulate Next Level
              </button>
            )}
          </div>
        </div>

        {/* Connected 4-Level Cards with Neon Progression Line */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-11 left-12 right-12 h-0.5 bg-white/15"
            aria-hidden="true"
          >
            <div
              className="h-full bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-[#FF3CAC] transition-all duration-300"
              style={{ width: `${(unlockedUpTo / 3) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {GAME_LEVELS.map((level) => {
              const state = getDynamicLevelState(level.id);
              const isSelected = level.id === selectedLevelId;
              const accentHex = ACCENT_HEX[level.accent];

              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setSelectedLevelId(level.id)}
                  className={`text-left liquid-glass liquid-glass-interactive rounded-2xl p-5 flex flex-col justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                    isSelected
                      ? 'ring-1 ring-[#00E5FF]/80 -translate-y-1'
                      : 'opacity-95 hover:opacity-100'
                  }`}
                >
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="font-mono-tabular text-xs font-bold tracking-wider"
                        style={{ color: accentHex }}
                      >
                        {level.code}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-white/80">
                        {state.locked ? (
                          <Lock className="w-3.5 h-3.5 text-white/70" />
                        ) : state.progress === 100 ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                        ) : (
                          <Unlock className="w-3.5 h-3.5 text-[#FF875E]" />
                        )}
                        <span>{state.status}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {level.title}
                      </h3>
                      <p className="text-xs text-white/80 mt-1">{level.subtitle}</p>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="w-full space-y-1.5 pt-2 border-t border-white/15">
                    <div className="flex items-center justify-between text-xs font-mono-tabular">
                      <span className="text-white/75">Completion</span>
                      <span className="text-white">{state.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${state.progress}%`,
                          backgroundColor: accentHex,
                        }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dedicated Selected Level Detail Panel */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tabular">
              <span style={{ color: ACCENT_HEX[selectedLevel.accent] }} className="font-bold">
                {selectedLevel.code}
              </span>
              <span className="text-white/40">·</span>
              <span className="text-white">{selectedState.status}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/80">
                Mission Status: {activeMissionName ? activeMissionName : 'Awaiting Track Selection'}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {selectedLevel.title} — {selectedLevel.subtitle}
            </h3>

            <p className="text-base text-white/85 leading-relaxed">
              {selectedLevel.summary}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4 bg-[#0B0A19]/45 border border-white/15 rounded-xl p-5 backdrop-blur-md">
            <h4 className="font-subheading font-bold text-sm tracking-wider text-[#00E5FF]">
              LEVEL DELIVERABLES
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {selectedLevel.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#FF3CAC] mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-white/15 flex items-center gap-2.5 text-xs text-white">
              <Award className="w-4 h-4 text-[#FF875E] shrink-0" />
              <span>Achievement: {selectedLevel.achievementTitle}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
