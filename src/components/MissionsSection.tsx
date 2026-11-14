import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { MISSION_TRACKS, MissionTrack } from '../data/specteqData';
import { ACCENT_HEX, MissionVisualPreview } from './ViceCityArtwork';
import { Reveal } from './Reveal';

interface MissionsSectionProps {
  activeMissionId: string | null;
  onStartMission: (mission: MissionTrack) => void;
}

export const MissionsSection: React.FC<MissionsSectionProps> = ({
  activeMissionId,
  onStartMission,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'reference' | 'robo-heist'>('all');
  const [selectedMission, setSelectedMission] = useState<MissionTrack | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMission(null);
      }
    };
    if (selectedMission) {
      window.addEventListener('keydown', onKeyDown);
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = previousOverflow;
      };
    }
    return undefined;
  }, [selectedMission]);

  const filteredMissions = MISSION_TRACKS.filter((mission) => {
    if (filterMode === 'reference') return mission.isReferenceExample;
    if (filterMode === 'robo-heist') return mission.id === 'mission-robo-heist';
    return true;
  });

  return (
    <section
      id="missions"
      className="relative py-20 lg:py-28 border-b border-white/15 bg-[#0B0A19]/20"
    >
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header + Interactive Track Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="liquid-glass-subtle rounded-2xl p-6 max-w-2xl space-y-2.5">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#FF3CAC]">
              CHOOSE YOUR MISSION
            </p>
            <h2
              className="font-display font-bold text-2xl sm:text-4xl text-white"
              style={{ textWrap: 'balance' }}
            >
              Player Selection & Robotics Tracks
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Select from autonomous and gesture-control reference missions or enter{' '}
              <span className="text-[#FF875E] font-semibold">ROBO HEIST</span> for
              manual gripper-based coloured tile collection.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            className="inline-flex items-center gap-1 p-1.5 rounded-xl liquid-glass-subtle self-start lg:self-auto"
            role="group"
            aria-label="Filter mission tracks"
          >
            {[
              { id: 'all', label: 'All Missions' },
              { id: 'reference', label: 'Gesture & Maze' },
              { id: 'robo-heist', label: 'ROBO HEIST' },
            ].map((tab) => {
              const active = filterMode === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setFilterMode(tab.id as 'all' | 'reference' | 'robo-heist')
                  }
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                    active
                      ? 'bg-white/15 text-[#00E5FF] border border-[#00E5FF]/45'
                      : 'text-white/75 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mission Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map((mission) => {
            const accentHex = ACCENT_HEX[mission.accent];
            const isActiveMission = activeMissionId === mission.id;

            return (
              <article
                key={mission.id}
                className={`liquid-glass liquid-glass-interactive rounded-2xl p-6 flex flex-col justify-between gap-5 ${
                  isActiveMission ? 'ring-1 ring-[#00E5FF]/75' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Unboxed Metadata Row */}
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span
                      className="font-mono-tabular font-bold tracking-wider"
                      style={{ color: accentHex }}
                    >
                      {mission.playerSlot} · {mission.difficulty}
                    </span>
                    <span className="text-white/75 truncate">
                      {mission.missionType.split('/')[0].trim()}
                    </span>
                  </div>

                  {/* Mission Visual Concept Preview */}
                  <MissionVisualPreview type={mission.visualType} />

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-white">
                      {mission.name}
                    </h3>
                    <p className="font-subheading font-semibold text-xs tracking-wider text-[#FF875E]">
                      MISSION: {mission.codeName}
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      {mission.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 space-y-1.5">
                    <span className="block text-xs font-semibold text-white">
                      Objective
                    </span>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      {mission.objective}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                  {isActiveMission ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF]">
                      <CheckCircle2 className="w-4 h-4" />
                      Active on Player 01
                    </span>
                  ) : (
                    <span className="text-xs text-white/70 truncate">
                      {mission.categoryTag.split('·')[0]}
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedMission(mission)}
                    className="min-h-[42px] inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0B0A19] bg-white hover:bg-[#00E5FF] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                  >
                    <span>View Mission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>

      {/* Detailed Mission Briefing Modal rendered via Portal with independently scrollable body */}
      {selectedMission &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0A19]/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mission-modal-title"
            onClick={() => setSelectedMission(null)}
          >
            <div
              className="liquid-glass rounded-2xl max-w-3xl w-full max-h-[88dvh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fixed Modal Header */}
              <div className="shrink-0 flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/15">
                <div className="space-y-1 min-w-0">
                  <p
                    className="text-xs font-mono-tabular font-semibold"
                    style={{ color: ACCENT_HEX[selectedMission.accent] }}
                  >
                    {selectedMission.playerSlot} · {selectedMission.missionType}
                  </p>
                  <h3
                    id="mission-modal-title"
                    className="font-display font-bold text-xl sm:text-2xl text-white"
                  >
                    {selectedMission.name}
                  </h3>
                  <p className="font-subheading font-semibold text-sm tracking-wider text-[#FF875E]">
                    MISSION: {selectedMission.codeName}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedMission(null)}
                  aria-label="Close mission details"
                  className="w-10 h-10 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Modal Body */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-6">
                {/* Visual Preview */}
                <MissionVisualPreview type={selectedMission.visualType} />

                {/* Overview & Objective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-[#00E5FF]">
                      MISSION CONCEPT
                    </h4>
                    <p className="text-sm text-white/85 leading-relaxed">
                      {selectedMission.overview}
                    </p>
                    {selectedMission.winningCondition && (
                      <div className="pt-2 space-y-1">
                        <h5 className="font-subheading font-bold text-xs tracking-wider text-[#FF875E]">
                          WINNING CONDITION
                        </h5>
                        <p className="text-sm text-white/85 leading-relaxed">
                          {selectedMission.winningCondition}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-[#FF3CAC]">
                      OBJECTIVE
                    </h4>
                    {selectedMission.objectivesList ? (
                      <ol className="space-y-1.5 text-sm text-white/90 list-decimal list-inside">
                        {selectedMission.objectivesList.map((step) => (
                          <li key={step} className="leading-relaxed">
                            {step}
                          </li>
                        ))}
                      </ol>
                    ) : (
                      <p className="text-sm text-white/90 leading-relaxed">
                        {selectedMission.objective}
                      </p>
                    )}
                    <p className="text-xs text-white/70 pt-2">
                      Hardware Stack: {selectedMission.hardwareSummary}
                    </p>
                  </div>
                </div>

                {/* Requirements & Challenges */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/15">
                  <div className="space-y-2.5">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-white">
                      REQUIREMENTS
                    </h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      {selectedMission.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2">
                          <span className="text-[#00E5FF]">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-white">
                      CHALLENGES
                    </h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      {selectedMission.challenges.map((ch) => (
                        <li key={ch} className="flex items-start gap-2">
                          <span className="text-[#FF3CAC]">•</span>
                          <span>{ch}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Rules & Completion Criteria */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/15">
                  <div className="space-y-2.5">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-white">
                      RULES
                    </h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      {selectedMission.rules.map((rule) => (
                        <li key={rule} className="flex items-start gap-2">
                          <span className="text-[#9B5CFF]">•</span>
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-subheading font-bold text-sm tracking-wider text-white">
                      COMPLETION CRITERIA
                    </h4>
                    <ul className="space-y-2 text-sm text-white/80">
                      {selectedMission.completionCriteria.map((crit) => (
                        <li key={crit} className="flex items-start gap-2">
                          <span className="text-[#FF875E]">•</span>
                          <span>{crit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fixed Modal Footer Actions */}
              <div className="shrink-0 p-4 sm:px-6 sm:py-4 border-t border-white/15 bg-[#0B0A19]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-white/75">
                  {selectedMission.isReferenceExample
                    ? 'Reference example from SpecteQ Event Concept — 2027 specs configurable.'
                    : 'ROBO HEIST 2027 Mission — final scoring & dimensions published in official rulebook.'}
                </span>

                <div className="flex items-center justify-end gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedMission(null)}
                    className="min-h-[42px] px-4 py-2 rounded-xl text-sm font-medium text-white/85 hover:text-white border border-white/20 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onStartMission(selectedMission);
                      setSelectedMission(null);
                    }}
                    className="min-h-[42px] inline-flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-semibold text-[#0B0A19] bg-gradient-to-r from-[#00E5FF] to-[#FF3CAC] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
                  >
                    <span>Start Mission</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
