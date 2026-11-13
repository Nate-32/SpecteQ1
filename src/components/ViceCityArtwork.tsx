import React from 'react';
import { AccentKey } from '../data/specteqData';

export const ACCENT_HEX: Record<AccentKey, string> = {
  cyan: '#00E5FF',
  pink: '#FF3CAC',
  violet: '#9B5CFF',
  orange: '#FF875E',
};

/**
 * Full-bleed Vice City Coastal Sunset & Futuristic Skyline Backdrop
 * - Zero human characters
 * - Left side kept airy & high-contrast for Hero typography
 * - Right side features architectural skyline, subtle palm silhouettes, distant helicopter, reflective water, and sleek retro-futuristic sports car
 */
export const HeroWaterfrontBackdrop: React.FC = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Sunset Coastal Sky Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 72% 56% at 74% 38%, rgba(255, 135, 94, 0.34) 0%, rgba(255, 60, 172, 0.24) 36%, rgba(155, 92, 255, 0.18) 62%, rgba(11, 10, 25, 0.96) 100%)',
        }}
      />

      {/* Ambient Cyan Horizon Glow on Far Right */}
      <div
        className="absolute -right-24 top-1/4 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #00E5FF 0%, transparent 70%)' }}
      />

      {/* Ambient Sunset Core on Right Horizon */}
      <svg
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="viceSun" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF875E" stopOpacity="0.92" />
            <stop offset="52%" stopColor="#FF3CAC" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#9B5CFF" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="skylineFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1D173A" />
            <stop offset="100%" stopColor="#0B0A19" />
          </linearGradient>

          <linearGradient id="waterSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A1436" stopOpacity="0.96" />
            <stop offset="45%" stopColor="#120F28" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#0B0A19" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A2250" />
            <stop offset="55%" stopColor="#15132B" />
            <stop offset="100%" stopColor="#0B0A19" />
          </linearGradient>

          <linearGradient id="carHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#9B5CFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF3CAC" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="leftScrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B0A19" stopOpacity="0.95" />
            <stop offset="48%" stopColor="#0B0A19" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#0B0A19" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Setting Coastal Sun positioned on right half */}
        <circle cx="1070" cy="340" r="165" fill="url(#viceSun)" opacity="0.88" />
        {/* Horizontal atmospheric slices across lower sun */}
        <rect x="890" y="395" width="360" height="5" fill="#15132B" opacity="0.55" />
        <rect x="890" y="414" width="360" height="7" fill="#15132B" opacity="0.7" />
        <rect x="890" y="436" width="360" height="10" fill="#15132B" opacity="0.85" />

        {/* Distant Helicopter Silhouette (upper right sky) */}
        <g transform="translate(860, 148)" opacity="0.65">
          <line x1="-26" y1="0" x2="26" y2="0" stroke="#B8B4CA" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#B8B4CA" strokeWidth="1.5" />
          <path d="M-12 6 L10 6 L15 11 L-10 13 Z" fill="#1D173A" stroke="#00E5FF" strokeWidth="0.6" />
          <line x1="12" y1="8" x2="32" y2="6" stroke="#1D173A" strokeWidth="2.5" />
          <circle cx="32" cy="6" r="3" fill="none" stroke="#FF3CAC" strokeWidth="0.8" />
        </g>

        {/* Modern Neon Coastal Skyscraper Skyline (Right & Center-Right) */}
        <g>
          {/* Back layer towers */}
          <rect x="650" y="295" width="44" height="190" fill="#171333" opacity="0.75" />
          <rect x="706" y="250" width="52" height="235" fill="#191538" opacity="0.82" />
          <rect x="772" y="210" width="60" height="275" fill="#1A163A" opacity="0.88" />
          <rect x="844" y="270" width="48" height="215" fill="#161230" opacity="0.82" />
          <rect x="908" y="175" width="68" height="310" fill="url(#skylineFill)" />
          <rect x="988" y="220" width="56" height="265" fill="#15122D" />
          <rect x="1058" y="150" width="76" height="335" fill="url(#skylineFill)" />
          <rect x="1148" y="205" width="64" height="280" fill="#181436" />
          <rect x="1224" y="245" width="58" height="240" fill="#15122D" />
          <rect x="1296" y="180" width="72" height="305" fill="url(#skylineFill)" />
          <rect x="1380" y="240" width="60" height="245" fill="#15122D" />

          {/* Architectural Spire & Neon Rooftop Lines */}
          <line x1="1096" y1="105" x2="1096" y2="150" stroke="#00E5FF" strokeWidth="1.5" opacity="0.85" />
          <line x1="942" y1="142" x2="942" y2="175" stroke="#FF3CAC" strokeWidth="1.5" opacity="0.8" />
          <line x1="1332" y1="146" x2="1332" y2="180" stroke="#00E5FF" strokeWidth="1.5" opacity="0.75" />

          {/* Subtle Glass Tower Window Grids */}
          <line x1="908" y1="176" x2="976" y2="176" stroke="#FF3CAC" strokeWidth="1.2" opacity="0.75" />
          <line x1="1058" y1="151" x2="1134" y2="151" stroke="#00E5FF" strokeWidth="1.4" opacity="0.85" />
          <line x1="1148" y1="206" x2="1212" y2="206" stroke="#9B5CFF" strokeWidth="1.2" opacity="0.7" />
          <line x1="1296" y1="181" x2="1368" y2="181" stroke="#FF875E" strokeWidth="1.2" opacity="0.7" />

          {/* Vertical architectural light strips */}
          <line x1="922" y1="190" x2="922" y2="470" stroke="#00E5FF" strokeWidth="0.7" opacity="0.25" />
          <line x1="1074" y1="168" x2="1074" y2="470" stroke="#00E5FF" strokeWidth="0.9" opacity="0.32" />
          <line x1="1118" y1="168" x2="1118" y2="470" stroke="#FF3CAC" strokeWidth="0.8" opacity="0.28" />
          <line x1="1176" y1="220" x2="1176" y2="470" stroke="#9B5CFF" strokeWidth="0.8" opacity="0.25" />
          <line x1="1316" y1="196" x2="1316" y2="470" stroke="#00E5FF" strokeWidth="0.8" opacity="0.28" />
        </g>

        {/* Reflective Waterfront Bay */}
        <rect x="0" y="485" width="1440" height="215" fill="url(#waterSurface)" />
        {/* Horizon Seawall Light Line */}
        <line x1="0" y1="485" x2="1440" y2="485" stroke="#FF3CAC" strokeWidth="1.2" opacity="0.45" />
        <line x1="650" y1="486" x2="1440" y2="486" stroke="#00E5FF" strokeWidth="1.5" opacity="0.6" />

        {/* Water Reflections */}
        <g className="animate-water-shimmer">
          <rect x="975" y="502" width="190" height="2.5" rx="1.2" fill="#FF875E" opacity="0.5" />
          <rect x="1005" y="518" width="145" height="2" rx="1" fill="#FF3CAC" opacity="0.45" />
          <rect x="935" y="538" width="240" height="2" rx="1" fill="#00E5FF" opacity="0.36" />
          <rect x="1040" y="558" width="120" height="1.5" rx="0.75" fill="#FF3CAC" opacity="0.35" />
          <rect x="860" y="524" width="85" height="1.5" rx="0.75" fill="#9B5CFF" opacity="0.32" />
          <rect x="1220" y="514" width="110" height="1.5" rx="0.75" fill="#00E5FF" opacity="0.32" />
        </g>

        {/* Waterfront Promenade Roadway */}
        <polygon points="0,665 1440,605 1440,820 0,820" fill="#0D0B1F" />
        <line x1="0" y1="665" x2="1440" y2="605" stroke="#00E5FF" strokeWidth="1.5" opacity="0.55" />
        <line x1="0" y1="669" x2="1440" y2="609" stroke="#FF3CAC" strokeWidth="0.8" opacity="0.45" />

        {/* Subtle Palm Silhouettes Positioned on Far Right Margin (Away from Headline/Logo) */}
        <g transform="translate(1320, 325)" opacity="0.85">
          <path d="M22 285 Q18 170 4 55" stroke="#0C0A1C" strokeWidth="8" fill="none" />
          <path d="M4 55 Q-35 32 -65 55 Q-28 50 4 55 Z" fill="#0C0A1C" />
          <path d="M4 55 Q-38 62 -58 92 Q-22 72 4 55 Z" fill="#0C0A1C" />
          <path d="M4 55 Q12 18 48 16 Q22 36 4 55 Z" fill="#0C0A1C" />
          <path d="M4 55 Q46 42 74 68 Q38 60 4 55 Z" fill="#0C0A1C" />
          <path d="M4 55 Q34 74 44 108 Q20 80 4 55 Z" fill="#0C0A1C" />
        </g>
        <g transform="translate(1245, 380) scale(0.72)" opacity="0.75">
          <path d="M22 285 Q28 175 10 55" stroke="#0D0B1F" strokeWidth="7" fill="none" />
          <path d="M10 55 Q-32 34 -60 58 Q-24 52 10 55 Z" fill="#0D0B1F" />
          <path d="M10 55 Q-26 68 -42 98 Q-12 75 10 55 Z" fill="#0D0B1F" />
          <path d="M10 55 Q20 20 55 24 Q28 40 10 55 Z" fill="#0D0B1F" />
          <path d="M10 55 Q52 48 76 76 Q38 64 10 55 Z" fill="#0D0B1F" />
        </g>

        {/* Premium Retro-Futuristic Sports Car Silhouette on Right Promenade */}
        <g transform="translate(835, 565)">
          {/* Ground Underglow Reflection */}
          <ellipse cx="265" cy="132" rx="235" ry="18" fill="#00E5FF" opacity="0.16" />
          <ellipse cx="285" cy="130" rx="190" ry="10" fill="#FF3CAC" opacity="0.14" />

          {/* Light Trail Streaks */}
          <line x1="-180" y1="108" x2="65" y2="108" stroke="#FF3CAC" strokeWidth="2" opacity="0.55" />
          <line x1="-110" y1="116" x2="85" y2="116" stroke="#00E5FF" strokeWidth="1.5" opacity="0.5" />

          {/* Main Wedge Aerodynamic Body */}
          <path
            d="M42 106 L58 78 L148 64 L236 38 L348 38 L428 65 L496 76 L512 96 L496 112 L428 112 L408 86 L342 86 L324 112 L176 112 L158 86 L92 86 L74 112 L42 112 Z"
            fill="url(#carBodyGrad)"
            stroke="url(#carHighlight)"
            strokeWidth="1.8"
          />

          {/* Glass Canopy & Louvered Rear Deck */}
          <path
            d="M158 64 L238 43 L340 43 L402 64 Z"
            fill="#1D173A"
            stroke="#00E5FF"
            strokeWidth="1"
            opacity="0.92"
          />
          <line x1="190" y1="54" x2="265" y2="54" stroke="#9B5CFF" strokeWidth="1" opacity="0.65" />

          {/* Side Aero Intake Line */}
          <path d="M180 80 L328 74 L338 88 L178 90 Z" fill="#0B0A19" stroke="#FF3CAC" strokeWidth="1" opacity="0.85" />

          {/* Rear & Front Neon Light Signatures */}
          <rect x="48" y="82" width="22" height="5" rx="2" fill="#FF3CAC" />
          <rect x="478" y="82" width="26" height="5" rx="2" fill="#00E5FF" />

          {/* Futuristic Aero Wheels */}
          <g transform="translate(125, 108)">
            <circle cx="0" cy="0" r="30" fill="#080714" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="0" cy="0" r="19" fill="none" stroke="#9B5CFF" strokeWidth="1.4" strokeDasharray="8 5" />
            <circle cx="0" cy="0" r="6" fill="#00E5FF" />
          </g>
          <g transform="translate(375, 108)">
            <circle cx="0" cy="0" r="30" fill="#080714" stroke="#FF3CAC" strokeWidth="2" />
            <circle cx="0" cy="0" r="19" fill="none" stroke="#00E5FF" strokeWidth="1.4" strokeDasharray="8 5" />
            <circle cx="0" cy="0" r="6" fill="#FF3CAC" />
          </g>
        </g>

        {/* Measured Contrast Scrim on Left for Guaranteed 4.5:1 Text Legibility */}
        <rect x="0" y="0" width="1440" height="820" fill="url(#leftScrim)" />
      </svg>

      {/* Bottom Fade into Secondary Background */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0A19] via-[#0B0A19]/70 to-transparent" />
    </div>
  );
};

/**
 * Futuristic Holographic Bot Chassis Illustration for About Section
 */
export const HolographicBotSchematic: React.FC = () => {
  return (
    <div className="relative h-full w-full min-h-[320px] flex items-center justify-center p-6 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            'radial-gradient(circle at 50% 48%, rgba(0, 229, 255, 0.24) 0%, rgba(155, 92, 255, 0.14) 45%, transparent 75%)',
        }}
      />
      <svg viewBox="0 0 460 340" className="relative z-10 w-full max-w-[440px] h-auto" role="img" aria-label="Holographic autonomous robotics chassis schematic">
        <defs>
          <linearGradient id="holoStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#9B5CFF" />
            <stop offset="100%" stopColor="#FF3CAC" />
          </linearGradient>
        </defs>

        {/* Orbital Rings */}
        <ellipse cx="230" cy="260" rx="170" ry="34" fill="none" stroke="#00E5FF" strokeOpacity="0.28" strokeWidth="1.2" />
        <ellipse cx="230" cy="260" rx="125" ry="22" fill="none" stroke="#FF3CAC" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="6 6" />

        {/* Robotic Rover Isometric Frame */}
        <g className="animate-horizon-float">
          {/* Base Chassis */}
          <polygon
            points="115,195 230,145 345,195 230,245"
            fill="rgba(21, 19, 43, 0.85)"
            stroke="url(#holoStroke)"
            strokeWidth="2"
          />
          <polygon
            points="115,195 230,245 230,262 115,212"
            fill="rgba(155, 92, 255, 0.18)"
            stroke="#9B5CFF"
            strokeWidth="1.2"
          />
          <polygon
            points="345,195 230,245 230,262 345,212"
            fill="rgba(0, 229, 255, 0.14)"
            stroke="#00E5FF"
            strokeWidth="1.2"
          />

          {/* Top Controller Core */}
          <polygon
            points="172,174 230,149 288,174 230,199"
            fill="rgba(0, 229, 255, 0.12)"
            stroke="#00E5FF"
            strokeWidth="1.5"
          />
          <rect x="212" y="160" width="36" height="18" rx="3" fill="#0B0A19" stroke="#FF3CAC" strokeWidth="1.2" />

          {/* Sensor Mast & LiDAR / Optical Head */}
          <line x1="230" y1="149" x2="230" y2="92" stroke="#00E5FF" strokeWidth="2.5" />
          <ellipse cx="230" cy="84" rx="34" ry="14" fill="#15132B" stroke="#00E5FF" strokeWidth="1.8" />
          <ellipse cx="230" cy="76" rx="22" ry="8" fill="rgba(255, 60, 172, 0.2)" stroke="#FF3CAC" strokeWidth="1.4" />

          {/* Scanning Cone */}
          <path d="M258,84 L360,55 L360,115 Z" fill="rgba(0, 229, 255, 0.08)" stroke="#00E5FF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />

          {/* Wheel Pods */}
          <ellipse cx="142" cy="224" rx="22" ry="14" fill="#0B0A19" stroke="#FF3CAC" strokeWidth="1.8" />
          <ellipse cx="318" cy="224" rx="22" ry="14" fill="#0B0A19" stroke="#00E5FF" strokeWidth="1.8" />
          <ellipse cx="230" cy="260" rx="20" ry="11" fill="#0B0A19" stroke="#9B5CFF" strokeWidth="1.6" />
        </g>

        {/* Technical Dimension Markers */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#B8B4CA">
          <line x1="65" y1="84" x2="180" y2="84" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 3" />
          <text x="26" y="88" fill="#00E5FF">OPTICAL ARRAY</text>

          <line x1="292" y1="174" x2="380" y2="145" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 3" />
          <text x="342" y="138" fill="#FF3CAC">MCU CORE</text>

          <line x1="74" y1="224" x2="118" y2="224" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 3" />
          <text x="20" y="228" fill="#FF875E">DRIVE POD</text>
        </g>
      </svg>
    </div>
  );
};

/**
 * Category-Specific Vector Illustrations for Robotics Category Terminals
 */
export const CategoryGlyph: React.FC<{
  type: 'combat' | 'industrial' | 'aerial' | 'underwater' | 'ground' | 'ai';
  accent: AccentKey;
}> = ({ type, accent }) => {
  const color = ACCENT_HEX[accent];

  return (
    <svg
      viewBox="0 0 120 84"
      className="w-28 h-20 shrink-0"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="112"
        height="76"
        rx="10"
        fill="rgba(11, 10, 25, 0.72)"
        stroke={color}
        strokeOpacity="0.32"
        strokeWidth="1"
      />
      {type === 'combat' && (
        <g stroke={color} strokeWidth="1.8" fill="none">
          <polygon points="28,58 42,32 78,32 92,58" fill="rgba(255, 60, 172, 0.1)" />
          <polygon points="20,58 34,44 34,58" fill={color} fillOpacity="0.28" />
          <circle cx="60" cy="30" r="10" stroke="#00E5FF" />
          <line x1="46" y1="62" x2="74" y2="62" strokeWidth="3" />
        </g>
      )}
      {type === 'industrial' && (
        <g stroke={color} strokeWidth="1.8" fill="none">
          <rect x="26" y="56" width="38" height="10" rx="2" fill="rgba(255, 135, 94, 0.14)" />
          <line x1="45" y1="56" x2="58" y2="32" strokeWidth="2.5" />
          <line x1="58" y1="32" x2="84" y2="24" strokeWidth="2.2" />
          <circle cx="58" cy="32" r="4" fill={color} />
          <path d="M84,24 L94,18 M84,24 L94,30" stroke="#00E5FF" />
        </g>
      )}
      {type === 'aerial' && (
        <g stroke={color} strokeWidth="1.7" fill="none">
          <line x1="30" y1="38" x2="90" y2="38" />
          <ellipse cx="32" cy="34" rx="14" ry="3.5" stroke="#FF3CAC" />
          <ellipse cx="88" cy="34" rx="14" ry="3.5" stroke="#FF3CAC" />
          <rect x="50" y="34" width="20" height="10" rx="3" fill="rgba(0, 229, 255, 0.16)" />
          <path d="M48,54 L54,44 M72,54 L66,44" />
        </g>
      )}
      {type === 'underwater' && (
        <g stroke={color} strokeWidth="1.7" fill="none">
          <rect x="34" y="30" width="46" height="22" rx="11" fill="rgba(155, 92, 255, 0.16)" />
          <circle cx="68" cy="41" r="5" stroke="#00E5FF" />
          <path d="M24,33 L34,41 L24,49 Z" fill={color} fillOpacity="0.3" />
          <path d="M26,64 Q44,58 60,64 T94,64" stroke="#00E5FF" strokeOpacity="0.55" />
        </g>
      )}
      {type === 'ground' && (
        <g stroke={color} strokeWidth="1.8" fill="none">
          <rect x="30" y="34" width="60" height="18" rx="4" fill="rgba(0, 229, 255, 0.14)" />
          <circle cx="42" cy="56" r="8" fill="#0B0A19" stroke="#FF3CAC" />
          <circle cx="78" cy="56" r="8" fill="#0B0A19" stroke="#FF3CAC" />
          <path d="M52,34 L60,22 L68,34" />
          <circle cx="60" cy="20" r="3" fill={color} />
        </g>
      )}
      {type === 'ai' && (
        <g stroke={color} strokeWidth="1.6" fill="none">
          <circle cx="36" cy="28" r="4" fill={color} />
          <circle cx="36" cy="56" r="4" fill={color} />
          <circle cx="60" cy="42" r="6" stroke="#00E5FF" fill="rgba(0,229,255,0.2)" />
          <circle cx="84" cy="28" r="4" stroke="#00E5FF" />
          <circle cx="84" cy="56" r="4" stroke="#00E5FF" />
          <line x1="40" y1="28" x2="54" y2="40" />
          <line x1="40" y1="56" x2="54" y2="44" />
          <line x1="66" y1="40" x2="80" y2="28" stroke="#00E5FF" />
          <line x1="66" y1="44" x2="80" y2="56" stroke="#00E5FF" />
        </g>
      )}
    </svg>
  );
};
