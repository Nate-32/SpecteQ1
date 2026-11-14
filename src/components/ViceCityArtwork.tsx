import React from 'react';
import { AccentKey } from '../data/specteqData';

export const ACCENT_HEX: Record<AccentKey, string> = {
  cyan: '#00E5FF',
  pink: '#FF3CAC',
  violet: '#9B5CFF',
  orange: '#FF875E',
};

/**
 * Compact Mission Visual Preview for Mission Cards
 * Particularly renders the ROBO HEIST visual concept:
 * compact manually operated robot + mechanical gripper + coloured collection tiles +
 * futuristic arena colour slots + countdown timer interface.
 */
export const MissionVisualPreview: React.FC<{
  type: 'gesture' | 'maze' | 'robo-heist';
}> = ({ type }) => {
  if (type === 'robo-heist') {
    return (
      <div className="relative rounded-xl bg-[#0B0A19]/45 border border-white/15 p-3 overflow-hidden">
        {/* Mini Mission Timer / Status Strip */}
        <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#B8B4CA] pb-2 mb-2 border-b border-white/10">
          <span className="text-[#FF875E] font-semibold">ARENA COLLECTION ZONE</span>
          <span className="text-[#00E5FF]">TIMER · ROUND ACTIVE</span>
        </div>

        <svg
          viewBox="0 0 320 112"
          className="w-full h-24"
          role="img"
          aria-label="ROBO HEIST manual gripper robot collecting and depositing coloured tiles into arena slots"
        >
          {/* Futuristic Arena Floor Perspective Lines */}
          <rect
            x="4"
            y="6"
            width="312"
            height="100"
            rx="8"
            fill="rgba(16, 13, 38, 0.55)"
            stroke="rgba(255, 255, 255, 0.12)"
          />
          <line x1="16" y1="88" x2="304" y2="88" stroke="rgba(0, 229, 255, 0.25)" strokeWidth="1" />
          <line x1="16" y1="68" x2="304" y2="68" stroke="rgba(155, 92, 255, 0.18)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Distributed Coloured Tiles in Arena */}
          <rect x="28" y="34" width="16" height="16" rx="3" fill="#00E5FF" fillOpacity="0.85" stroke="#FFFFFF" strokeOpacity="0.6" />
          <rect x="52" y="64" width="16" height="16" rx="3" fill="#FF3CAC" fillOpacity="0.85" stroke="#FFFFFF" strokeOpacity="0.6" />
          <rect x="80" y="28" width="16" height="16" rx="3" fill="#FF875E" fillOpacity="0.9" stroke="#FFFFFF" strokeOpacity="0.6" />

          {/* Compact Manually Operated Robot Vehicle with Mechanical Gripper */}
          <g transform="translate(122, 34)">
            {/* Wheels */}
            <rect x="4" y="4" width="12" height="7" rx="2" fill="#15132B" stroke="#00E5FF" strokeWidth="1.2" />
            <rect x="34" y="4" width="12" height="7" rx="2" fill="#15132B" stroke="#00E5FF" strokeWidth="1.2" />
            <rect x="4" y="35" width="12" height="7" rx="2" fill="#15132B" stroke="#00E5FF" strokeWidth="1.2" />
            <rect x="34" y="35" width="12" height="7" rx="2" fill="#15132B" stroke="#00E5FF" strokeWidth="1.2" />

            {/* Robot Chassis */}
            <rect
              x="6"
              y="11"
              width="40"
              height="24"
              rx="5"
              fill="#211B3D"
              stroke="#00E5FF"
              strokeWidth="1.5"
            />
            <rect x="14" y="17" width="18" height="12" rx="2" fill="#0B0A19" stroke="#FF875E" strokeWidth="1" />

            {/* Mechanical Gripper Arm Extending Right */}
            <line x1="46" y1="23" x2="64" y2="23" stroke="#FFFFFF" strokeWidth="2.2" />
            <path d="M64 14 L76 14 L80 18" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
            <path d="M64 32 L76 32 L80 28" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />

            {/* Gripped Team-Coloured Tile */}
            <rect x="69" y="17" width="13" height="12" rx="2.5" fill="#FF875E" stroke="#FFFFFF" strokeWidth="1.2" />
          </g>

          {/* Transport Path Arrow */}
          <path
            d="M210 57 L236 57"
            stroke="#FF875E"
            strokeWidth="1.6"
            strokeDasharray="3 3"
          />
          <polygon points="235,53 242,57 235,61" fill="#FF875E" />

          {/* Designated Colour Collection Slots */}
          <g transform="translate(248, 20)">
            <rect x="0" y="0" width="54" height="20" rx="4" fill="rgba(0, 229, 255, 0.14)" stroke="#00E5FF" strokeWidth="1.2" />
            <rect x="6" y="5" width="10" height="10" rx="2" fill="#00E5FF" />
            <text x="22" y="13" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#FFFFFF">SLOT A</text>

            <rect x="0" y="26" width="54" height="20" rx="4" fill="rgba(255, 135, 94, 0.18)" stroke="#FF875E" strokeWidth="1.4" />
            <rect x="6" y="31" width="10" height="10" rx="2" fill="#FF875E" />
            <text x="22" y="39" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#FFFFFF">SLOT B</text>

            <rect x="0" y="52" width="54" height="20" rx="4" fill="rgba(255, 60, 172, 0.14)" stroke="#FF3CAC" strokeWidth="1.2" />
            <rect x="6" y="57" width="10" height="10" rx="2" fill="#FF3CAC" />
            <text x="22" y="65" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#FFFFFF">SLOT C</text>
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'gesture') {
    return (
      <div className="relative rounded-xl bg-[#0B0A19]/45 border border-white/15 p-3 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#B8B4CA] pb-2 mb-2 border-b border-white/10">
          <span className="text-[#00E5FF] font-semibold">WIRELESS GESTURE LINK</span>
          <span className="text-white/80">IMU → ROVER</span>
        </div>
        <svg viewBox="0 0 320 76" className="w-full h-16" aria-hidden="true">
          <rect x="14" y="18" width="56" height="40" rx="8" fill="rgba(0, 229, 255, 0.12)" stroke="#00E5FF" strokeWidth="1.3" />
          <path d="M30 44 L30 28 M38 44 L38 24 M46 44 L46 27 M54 44 L54 32" stroke="#00E5FF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M88 38 C110 24, 130 52, 152 38 C174 24, 194 52, 214 38" fill="none" stroke="#9B5CFF" strokeWidth="1.8" strokeDasharray="4 4" />
          <rect x="228" y="22" width="74" height="32" rx="6" fill="rgba(21, 19, 43, 0.85)" stroke="#00E5FF" strokeWidth="1.4" />
          <circle cx="244" cy="54" r="7" fill="#0B0A19" stroke="#FF3CAC" strokeWidth="1.5" />
          <circle cx="286" cy="54" r="7" fill="#0B0A19" stroke="#FF3CAC" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl bg-[#0B0A19]/45 border border-white/15 p-3 overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#B8B4CA] pb-2 mb-2 border-b border-white/10">
        <span className="text-[#FF3CAC] font-semibold">AUTONOMOUS MAZE SOLVER</span>
        <span className="text-white/80">PATHFINDING</span>
      </div>
      <svg viewBox="0 0 320 76" className="w-full h-16" aria-hidden="true">
        <rect x="14" y="8" width="292" height="60" rx="6" fill="rgba(16, 13, 38, 0.55)" stroke="rgba(255,60,172,0.35)" />
        <path d="M64 8 V46 M124 30 V68 M184 8 V48 M244 28 V68" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <path d="M36 52 H96 V22 H154 V56 H214 V20 H282" fill="none" stroke="#00E5FF" strokeWidth="2" strokeDasharray="5 4" />
        <circle cx="36" cy="52" r="6" fill="#FF3CAC" />
        <circle cx="282" cy="20" r="6" fill="#00E5FF" />
      </svg>
    </div>
  );
};
