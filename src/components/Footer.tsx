import React from 'react';
import { ASSET_PATHS, EVENT_CONFIG } from '../data/specteqData';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Missions', href: '#missions' },
  { label: 'Levels', href: '#levels' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Arena', href: '#arena' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Rules', href: '#rules' },
  { label: 'Register', href: '#register' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0B0A19]/65 backdrop-blur-2xl text-white/80 border-t border-white/15 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Brand Column with Official Supplied Emblem */}
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="inline-flex items-center gap-3 text-white">
              <img
                src={ASSET_PATHS.logo}
                alt="SpecteQ Logo"
                className="h-10 w-10 object-contain rounded-lg shrink-0"
              />
              <span className="font-display font-extrabold italic text-xl tracking-wider">
                SpecteQ 2027
              </span>
            </a>
            <p className="font-script italic text-base bg-gradient-to-r from-[#00E5FF] to-[#9B5CFF] bg-clip-text text-transparent">
              {EVENT_CONFIG.tagline}
            </p>
            <p className="text-sm text-white/75 max-w-sm leading-relaxed">
              {EVENT_CONFIG.subtitle}. {EVENT_CONFIG.venuePlaceholder}.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-subheading font-bold text-sm tracking-wider text-white">
              QUICK NAVIGATION
            </h3>
            <div className="grid grid-cols-3 gap-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#00E5FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Configurable Contact & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-subheading font-bold text-sm tracking-wider text-white">
              EVENT CHANNELS
            </h3>
            <p className="text-xs text-white/75">
              {EVENT_CONFIG.organizerPlaceholder}
            </p>
            <p className="text-xs text-white/75">
              {EVENT_CONFIG.datesPlaceholder}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm">
              {EVENT_CONFIG.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target={soc.href.startsWith('http') ? '_blank' : undefined}
                  rel={soc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-white/85 hover:text-[#FF3CAC] transition-colors"
                >
                  {soc.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <span>
            © 2027 {EVENT_CONFIG.organizerPlaceholder}. Configurable event template.
          </span>
          <span>SpecteQ 2027 · The Robotics Arena</span>
        </div>
      </div>
    </footer>
  );
};
