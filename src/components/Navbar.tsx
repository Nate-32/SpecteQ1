import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'levels', label: 'Levels' },
  { id: 'missions', label: 'Missions' },
  { id: 'arena', label: 'Robotics Arena' },
  { id: 'leaderboard', label: 'Leaderboard' },
  { id: 'rules', label: 'Rules' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0A19]/75 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Clean Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded-md px-1"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <polygon
              points="16,2 29,9.5 29,22.5 16,30 3,22.5 3,9.5"
              stroke="#00E5FF"
              strokeWidth="2"
              fill="rgba(21, 19, 43, 0.9)"
            />
            <polygon
              points="16,8 23,12 23,20 16,24 9,20 9,12"
              stroke="#FF3CAC"
              strokeWidth="1.5"
              fill="rgba(255, 60, 172, 0.14)"
            />
            <circle cx="16" cy="16" r="2.5" fill="#00E5FF" />
          </svg>
          <span className="font-display font-extrabold text-lg tracking-wider">
            SPECTEQ
          </span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden xl:flex items-center gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] rounded ${
                  isActive
                    ? 'text-[#00E5FF]'
                    : 'text-[#B8B4CA] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full transition-opacity duration-200 ${
                    isActive
                      ? 'opacity-100 bg-gradient-to-r from-[#00E5FF] to-[#FF3CAC]'
                      : 'opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#register"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0B0A19] bg-gradient-to-r from-[#00E5FF] to-[#9B5CFF] hover:from-[#33ECFF] hover:to-[#FF3CAC] hover:text-white transition-all duration-200 whitespace-nowrap shrink-0 shadow-[0_0_24px_-6px_rgba(0,229,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            Join the Game
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-white/15 bg-[#15132B]/70 text-white hover:border-[#00E5FF]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Progress Hairline */}
      <div className="h-[2px] w-full bg-white/5" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-[#FF3CAC] transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Responsive Mobile & Tablet Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile Navigation"
          className="xl:hidden bg-[#15132B]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-4 space-y-1"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleNavClick}
                  className={`min-h-[44px] flex items-center px-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#211B3D] text-[#00E5FF] border border-[#00E5FF]/35'
                      : 'text-[#B8B4CA] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="pt-3 sm:hidden">
            <a
              href="#register"
              onClick={handleNavClick}
              className="w-full min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0B0A19] bg-gradient-to-r from-[#00E5FF] to-[#FF3CAC]"
            >
              Join the Game
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
