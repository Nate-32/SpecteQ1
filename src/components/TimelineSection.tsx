import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/specteqData';
import { ACCENT_HEX } from './ViceCityArtwork';
import { Reveal } from './Reveal';

export const TimelineSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TIMELINE_MILESTONES[0].id);
  const selectedMilestone =
    TIMELINE_MILESTONES.find((m) => m.id === selectedId) || TIMELINE_MILESTONES[0];

  return (
    <section
      id="timeline"
      className="relative py-20 lg:py-28 border-b border-white/15 bg-[#0B0A19]/20"
    >
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="liquid-glass-subtle rounded-2xl p-6 max-w-2xl space-y-2.5">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#FF875E]">
              2027 SEASON ROADMAP
            </p>
            <h2
              className="font-display font-bold text-2xl sm:text-4xl text-white"
              style={{ textWrap: 'balance' }}
            >
              Event Timeline & Milestones
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Follow the progression from initial registration through final championship
              awards. Dates remain configurable until the official 2027 schedule is locked.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-white/85 liquid-glass-subtle rounded-xl px-4 py-2.5 self-start md:self-auto">
            <Calendar className="w-4 h-4 text-[#00E5FF]" />
            <span>Dates TBD · Configurable 2027 Schedule</span>
          </div>
        </div>

        {/* Horizontal Milestone Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {TIMELINE_MILESTONES.map((milestone) => {
            const isSelected = milestone.id === selectedId;
            const accentHex = ACCENT_HEX[milestone.accent];
            return (
              <button
                key={milestone.id}
                type="button"
                onClick={() => setSelectedId(milestone.id)}
                className={`text-left rounded-xl p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                  isSelected
                    ? 'liquid-glass ring-1 ring-[#00E5FF]/65 -translate-y-0.5'
                    : 'liquid-glass-subtle hover:border-white/30'
                }`}
              >
                <span
                  className="block font-mono-tabular text-xs font-bold mb-1.5"
                  style={{ color: accentHex }}
                >
                  {milestone.phase}
                </span>
                <span className="block font-display font-bold text-sm text-white leading-snug">
                  {milestone.title}
                </span>
                <span className="block text-xs text-white/75 mt-2 truncate">
                  {milestone.dateLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Details */}
        <div className="liquid-glass rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono-tabular text-[#00E5FF]">
              {selectedMilestone.phase} · {selectedMilestone.dateLabel}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {selectedMilestone.title}
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              {selectedMilestone.summary}
            </p>
          </div>

          <ul className="space-y-2 text-sm text-white/85 md:min-w-[300px]">
            {selectedMilestone.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5">
                <span className="text-[#FF3CAC] mt-0.5">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};
