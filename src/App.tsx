import { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ArenaSection } from './components/ArenaSection';
import { Footer } from './components/Footer';
import { HeroSection, PlayerSessionState } from './components/HeroSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { LevelsSection } from './components/LevelsSection';
import { MissionsSection } from './components/MissionsSection';
import { Navbar } from './components/Navbar';
import { RegistrationSection } from './components/RegistrationSection';
import { RulesSection } from './components/RulesSection';
import { TimelineSection } from './components/TimelineSection';
import { ASSET_PATHS, MissionTrack } from './data/specteqData';

const TRACKED_SECTIONS = [
  'home',
  'about',
  'missions',
  'levels',
  'timeline',
  'arena',
  'leaderboard',
  'rules',
  'register',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeMission, setActiveMission] = useState<MissionTrack | null>(null);
  const [unlockedLevel, setUnlockedLevel] = useState<number>(0);
  const [bgLoaded, setBgLoaded] = useState<boolean>(false);
  const bgImgRef = useRef<HTMLImageElement | null>(null);
  const [playerState, setPlayerState] = useState<PlayerSessionState>({
    status: 'READY',
    currentLevel: 0,
    missionName: null,
    missionStatus: 'NOT STARTED',
    registeredTeam: null,
  });

  useEffect(() => {
    if (bgImgRef.current?.complete) {
      setBgLoaded(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'timeline') {
              setActiveSection('levels');
            } else if (id === 'register') {
              setActiveSection('contact');
            } else {
              setActiveSection(id);
            }
          }
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.05 }
    );

    TRACKED_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleStartMission = (mission: MissionTrack) => {
    setActiveMission(mission);
    setUnlockedLevel((prev) => Math.max(prev, 1));
    setPlayerState((prev) => ({
      ...prev,
      status: 'MISSION ACTIVE',
      currentLevel: Math.max(prev.currentLevel, 1),
      missionName: mission.name,
      missionStatus: 'IN PROGRESS',
    }));
  };

  const handleUnlockNextLevel = () => {
    setUnlockedLevel((prev) => {
      const next = Math.min(3, prev + 1);
      setPlayerState((p) => ({
        ...p,
        currentLevel: next,
        status: next === 3 ? 'ARENA READY' : p.status,
      }));
      return next;
    });
  };

  const handleRegistrationComplete = ({
    teamName,
    missionName,
  }: {
    teamName: string;
    missionName: string;
  }) => {
    setUnlockedLevel((prev) => Math.max(prev, 1));
    setPlayerState((prev) => ({
      ...prev,
      status: 'REGISTERED',
      currentLevel: Math.max(prev.currentLevel, 1),
      missionName,
      missionStatus: 'ONBOARDED',
      registeredTeam: teamName,
    }));
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col">
      {/* Stationary Full-Page Vice City Wallpaper Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 75% 60% at 70% 35%, rgba(255, 135, 94, 0.34) 0%, rgba(255, 60, 172, 0.22) 35%, rgba(155, 92, 255, 0.2) 60%, #0B0A19 100%)',
        }}
      >
        <picture>
          <source srcSet={ASSET_PATHS.background} type="image/webp" />
          <source srcSet={ASSET_PATHS.backgroundJpgFallback} type="image/jpeg" />
          <img
            ref={bgImgRef}
            src={ASSET_PATHS.backgroundPngFallback}
            alt=""
            fetchPriority="high"
            decoding="async"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
              bgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
        {/* Subtle atmospheric dark tint so glass panels keep crisp contrast while sunset & neon lights shine through */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11, 10, 25, 0.24) 0%, rgba(11, 10, 25, 0.34) 55%, rgba(11, 10, 25, 0.48) 100%)',
          }}
        />
      </div>

      {/* Foreground Content Scrolling Over Stationary Background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} />
        <main className="flex-1">
          <HeroSection playerState={playerState} />
          <AboutSection />
          <MissionsSection
            activeMissionId={activeMission?.id ?? null}
            onStartMission={handleStartMission}
          />
          <LevelsSection
            unlockedUpTo={unlockedLevel}
            activeMissionName={activeMission?.name ?? playerState.missionName}
            onUnlockNextLevel={handleUnlockNextLevel}
          />
          <TimelineSection />
          <ArenaSection />
          <LeaderboardSection />
          <RulesSection />
          <RegistrationSection
            selectedMissionId={activeMission?.id ?? null}
            onRegistrationComplete={handleRegistrationComplete}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
