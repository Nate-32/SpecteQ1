import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ArenaSection } from './components/ArenaSection';
import { CategoriesSection } from './components/CategoriesSection';
import { Footer } from './components/Footer';
import { HeroSection, PlayerSessionState } from './components/HeroSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { LevelsSection } from './components/LevelsSection';
import { MissionsSection } from './components/MissionsSection';
import { Navbar } from './components/Navbar';
import { RegistrationSection } from './components/RegistrationSection';
import { RulesSection } from './components/RulesSection';
import { TimelineSection } from './components/TimelineSection';
import { MissionTrack } from './data/specteqData';

const TRACKED_SECTIONS = [
  'home',
  'about',
  'categories',
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
  const [playerState, setPlayerState] = useState<PlayerSessionState>({
    status: 'READY',
    currentLevel: 0,
    missionName: null,
    missionStatus: 'NOT STARTED',
    registeredTeam: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'categories') {
              setActiveSection('about');
            } else if (id === 'timeline') {
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
    <div className="min-h-screen bg-[#0B0A19] text-white flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <HeroSection playerState={playerState} />
        <AboutSection />
        <CategoriesSection />
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
  );
}
