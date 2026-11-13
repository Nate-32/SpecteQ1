import React, { useState, useMemo } from 'react';
import { ArrowUpDown, Trophy } from 'lucide-react';
import { DEMO_LEADERBOARD, LeaderboardEntry } from '../data/specteqData';

type CategoryFilter = 'All' | LeaderboardEntry['trackCategory'];

export const LeaderboardSection: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('All');
  const [sortAsc, setSortAsc] = useState(false);

  const filteredEntries = useMemo(() => {
    const base =
      categoryFilter === 'All'
        ? DEMO_LEADERBOARD
        : DEMO_LEADERBOARD.filter((entry) => entry.trackCategory === categoryFilter);

    return [...base].sort((a, b) => (sortAsc ? a.score - b.score : b.score - a.score));
  }, [categoryFilter, sortAsc]);

  return (
    <section
      id="leaderboard"
      className="relative py-20 lg:py-28 bg-[#15132B] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Demonstration Notice */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#00E5FF]">
              HIGH SCORES & RANKINGS
            </p>
            <h2
              className="font-display font-bold text-2xl sm:text-4xl text-white"
              style={{ textWrap: 'balance' }}
            >
              Leaderboard Terminal
            </h2>
            <p className="text-base text-[#B8B4CA]">
              Live championship standings will populate here during SpecteQ 2027. Entries
              below are labeled demonstration data illustrating how Gaming Team scores and
              achievements are tracked.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Buttons */}
            <div
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-xl bg-[#0B0A19]/80 border border-white/10"
              role="group"
              aria-label="Filter leaderboard by mission category"
            >
              {(
                ['All', 'Gesture-Controlled', 'Maze Navigation', 'Autonomous Systems'] as const
              ).map((cat) => {
                const active = categoryFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategoryFilter(cat)}
                    className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      active
                        ? 'bg-[#211B3D] text-[#00E5FF] border border-[#00E5FF]/35'
                        : 'text-[#B8B4CA] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setSortAsc((prev) => !prev)}
              className="min-h-[40px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#0B0A19]/80 border border-white/15 hover:border-[#00E5FF]/40 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>{sortAsc ? 'Score: Low → High' : 'Score: High → Low'}</span>
            </button>
          </div>
        </div>

        {/* Liquid-Glass Leaderboard Terminal Table */}
        <div className="liquid-glass rounded-2xl overflow-hidden">
          <div className="px-6 py-3.5 border-b border-white/10 bg-[#0B0A19]/40 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="inline-flex items-center gap-2 font-medium text-[#FF875E]">
              <Trophy className="w-4 h-4" />
              <span>Demonstration Data Preview · Official 2027 Scores Pending</span>
            </span>
            <span className="font-mono-tabular text-[#B8B4CA]">
              Showing {filteredEntries.length} Teams
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-subheading tracking-wider text-[#B8B4CA]">
                  <th className="py-4 px-6">RANK</th>
                  <th className="py-4 px-4">GAMING TEAM / LEAD</th>
                  <th className="py-4 px-4">MISSION TRACK</th>
                  <th className="py-4 px-4">COMPLETED MISSIONS</th>
                  <th className="py-4 px-4">ACHIEVEMENT STATUS</th>
                  <th className="py-4 px-6 text-right">SCORE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {filteredEntries.map((entry) => (
                  <tr
                    key={entry.teamName}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="py-4 px-6 font-mono-tabular font-bold text-[#00E5FF]">
                      #{String(entry.rank).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-display font-bold text-white">
                        {entry.teamName}
                      </div>
                      <div className="text-xs text-[#B8B4CA]">{entry.playerLead}</div>
                    </td>
                    <td className="py-4 px-4 text-[#B8B4CA]">{entry.trackCategory}</td>
                    <td className="py-4 px-4 font-mono-tabular text-white">
                      {entry.completedMissions} / {entry.totalMissions}
                    </td>
                    <td className="py-4 px-4 text-xs text-[#FF875E] font-medium">
                      {entry.achievementStatus}
                    </td>
                    <td className="py-4 px-6 text-right font-mono-tabular font-bold text-base text-white">
                      {entry.score.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
