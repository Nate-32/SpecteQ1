import React, { useEffect, useState } from 'react';
import { CheckCircle2, Mail, Phone, RotateCcw, Send } from 'lucide-react';
import { CONTACT_COORDINATORS, MISSION_TRACKS } from '../data/specteqData';
import { ACCENT_HEX } from './ViceCityArtwork';
import { Reveal } from './Reveal';

interface RegistrationFormData {
  playerName: string;
  email: string;
  phone: string;
  teamName: string;
  teamSize: string;
  missionId: string;
  agreed: boolean;
}

interface RegistrationSectionProps {
  selectedMissionId: string | null;
  onRegistrationComplete: (payload: { teamName: string; missionName: string }) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  selectedMissionId,
  onRegistrationComplete,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    playerName: '',
    email: '',
    phone: '',
    teamName: '',
    teamSize: '2',
    missionId: selectedMissionId || MISSION_TRACKS[0].id,
    agreed: false,
  });

  useEffect(() => {
    if (selectedMissionId) {
      setFormData((prev) => ({ ...prev, missionId: selectedMissionId }));
    }
  }, [selectedMissionId]);

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<{
    playerName: string;
    teamName: string;
    missionName: string;
    email: string;
    passCode: string;
  } | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (formData.playerName.trim().length < 2) {
      nextErrors.playerName = 'Enter the primary Player full name (at least 2 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Enter a valid contact email address.';
    }
    if (!/^[+\d\s()-]{7,20}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Enter a valid contact phone number.';
    }
    if (formData.teamName.trim().length < 2) {
      nextErrors.teamName = 'Enter a Gaming Team name.';
    }
    if (!formData.agreed) {
      nextErrors.agreed = 'Please acknowledge the SpecteQ 2027 participation guidelines.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const chosenMission =
      MISSION_TRACKS.find((m) => m.id === formData.missionId) || MISSION_TRACKS[0];

    const passCode = `SQ27-${formData.teamName
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '')
      .slice(0, 4)
      .toUpperCase()}-${String(Math.floor(100 + Math.random() * 900))}`;

    setSubmittedRecord({
      playerName: formData.playerName.trim(),
      teamName: formData.teamName.trim(),
      missionName: chosenMission.name,
      email: formData.email.trim(),
      passCode,
    });

    onRegistrationComplete({
      teamName: formData.teamName.trim(),
      missionName: chosenMission.name,
    });
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setErrors({});
  };

  return (
    <section
      id="register"
      className="relative py-20 lg:py-28 border-b border-white/15 bg-[#0B0A19]/30"
    >
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Registration Header & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Registration Pitch */}
          <div className="lg:col-span-5 space-y-5">
            <div className="liquid-glass rounded-2xl p-6 sm:p-8 space-y-4">
              <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#00E5FF]">
                LEVEL 00 · PLAYER ENTRY
              </p>
              <h2
                className="font-display font-black text-2xl sm:text-4xl text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                INSERT COIN. JOIN THE GAME.
              </h2>
              <p className="text-base text-white/85 leading-relaxed">
                Register your Player profile and Gaming Team to begin Level 01 Training
                Missions. Choose from Gesture-Controlled Car, PAC-MAN Maze Robot, or
                ROBO HEIST.
              </p>
            </div>

            <div className="liquid-glass-subtle rounded-2xl p-5 space-y-2.5">
              <h3 className="font-subheading font-bold text-sm tracking-wider text-[#FF875E]">
                REGISTRATION WORKFLOW NOTICE
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                This static deployment validates your registration locally and generates an
                instant Player Pass preview. Connect your organizer form or backend
                endpoint before opening live 2027 admissions—no submissions are stored
                remotely here.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Liquid-Glass Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-2xl p-6 sm:p-8">
              {submittedRecord ? (
                <div className="space-y-6 py-4">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-7 h-7 text-[#00E5FF] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs font-mono-tabular text-[#00E5FF] font-semibold">
                        DEMO SUBMISSION PREVIEW · NOT STORED REMOTELY
                      </p>
                      <h3 className="font-display font-bold text-2xl text-white">
                        Player Pass Generated
                      </h3>
                      <p className="text-sm text-white/80">
                        Your Player 01 HUD has been updated locally with your Gaming Team
                        and selected mission.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0B0A19]/55 border border-white/15 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm backdrop-blur-md">
                    <div>
                      <span className="block text-xs text-white/70">Player Lead</span>
                      <span className="font-semibold text-white">
                        {submittedRecord.playerName}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-white/70">Gaming Team</span>
                      <span className="font-semibold text-white">
                        {submittedRecord.teamName}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-white/70">Mission Track</span>
                      <span className="font-semibold text-[#00E5FF]">
                        {submittedRecord.missionName}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-white/70">Contact Email</span>
                      <span className="text-white">{submittedRecord.email}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block text-xs text-white/70">Preview Pass ID</span>
                      <span className="font-mono-tabular font-bold text-[#FF3CAC]">
                        {submittedRecord.passCode}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Edit or Submit Another Preview</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="playerName"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        PLAYER FULL NAME
                      </label>
                      <input
                        id="playerName"
                        type="text"
                        value={formData.playerName}
                        onChange={(e) =>
                          setFormData({ ...formData, playerName: e.target.value })
                        }
                        placeholder="e.g. Aarav Patel"
                        className="w-full min-h-[44px] px-4 rounded-xl bg-[#0B0A19]/55 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00E5FF]"
                      />
                      {errors.playerName && (
                        <p className="mt-1 text-xs text-[#FF875E]">{errors.playerName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="teamName"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        GAMING TEAM NAME
                      </label>
                      <input
                        id="teamName"
                        type="text"
                        value={formData.teamName}
                        onChange={(e) =>
                          setFormData({ ...formData, teamName: e.target.value })
                        }
                        placeholder="e.g. Coastal Dynamics"
                        className="w-full min-h-[44px] px-4 rounded-xl bg-[#0B0A19]/55 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00E5FF]"
                      />
                      {errors.teamName && (
                        <p className="mt-1 text-xs text-[#FF875E]">{errors.teamName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        CONTACT EMAIL
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="player@team.example"
                        className="w-full min-h-[44px] px-4 rounded-xl bg-[#0B0A19]/55 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00E5FF]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#FF875E]">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        PHONE NUMBER
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 555 019 2027"
                        className="w-full min-h-[44px] px-4 rounded-xl bg-[#0B0A19]/55 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#00E5FF]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#FF875E]">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-1">
                      <label
                        htmlFor="teamSize"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        TEAM SIZE
                      </label>
                      <select
                        id="teamSize"
                        value={formData.teamSize}
                        onChange={(e) =>
                          setFormData({ ...formData, teamSize: e.target.value })
                        }
                        className="w-full min-h-[44px] px-3 rounded-xl bg-[#0B0A19]/70 border border-white/20 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        <option value="1">1 Player (Solo)</option>
                        <option value="2">2 Players</option>
                        <option value="3">3 Players</option>
                        <option value="4">4 Players</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="missionSelect"
                        className="block text-xs font-subheading font-semibold tracking-wider text-white mb-1.5"
                      >
                        MISSION SELECTION
                      </label>
                      <select
                        id="missionSelect"
                        value={formData.missionId}
                        onChange={(e) =>
                          setFormData({ ...formData, missionId: e.target.value })
                        }
                        className="w-full min-h-[44px] px-3 rounded-xl bg-[#0B0A19]/70 border border-white/20 text-sm text-white focus:outline-none focus:border-[#00E5FF]"
                      >
                        {MISSION_TRACKS.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.playerSlot} — {m.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer text-sm text-white/85">
                      <input
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={(e) =>
                          setFormData({ ...formData, agreed: e.target.checked })
                        }
                        className="mt-1 w-4 h-4 rounded border-white/25 bg-[#0B0A19] accent-[#00E5FF]"
                      />
                      <span>
                        I confirm this is a demonstration preview entry and agree to follow
                        SpecteQ 2027 safety and competition guidelines.
                      </span>
                    </label>
                    {errors.agreed && (
                      <p className="mt-1 text-xs text-[#FF875E]">{errors.agreed}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base text-[#0B0A19] bg-gradient-to-r from-[#00E5FF] via-[#9B5CFF] to-[#FF3CAC] hover:opacity-95 transition-opacity shadow-[0_0_28px_-6px_rgba(0,229,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Player Registration</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Contact & Coordinator Desk */}
        <div id="contact" className="pt-12 border-t border-white/15 space-y-8 scroll-mt-20">
          <div className="liquid-glass-subtle rounded-2xl p-6 max-w-2xl space-y-2">
            <p className="font-subheading font-semibold text-sm tracking-[0.18em] text-[#FF3CAC]">
              ORGANIZER COMMAND & QUERIES
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Contact the SpecteQ Desk
            </h2>
            <p className="text-sm sm:text-base text-white/85">
              Configurable organizer contact placeholders for registration inquiries,
              hardware scrutiny clarifications, and workshop pit bay logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONTACT_COORDINATORS.map((coord) => {
              const accentHex = ACCENT_HEX[coord.accent];
              return (
                <article
                  key={coord.id}
                  className="liquid-glass liquid-glass-interactive rounded-2xl p-6 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-1.5">
                    <span
                      className="block text-xs font-medium"
                      style={{ color: accentHex }}
                    >
                      {coord.department}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white">
                      {coord.name}
                    </h3>
                    <p className="text-sm text-white/80">{coord.role}</p>
                  </div>

                  <div className="pt-4 border-t border-white/15 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-white">
                      <Phone className="w-4 h-4 text-[#00E5FF] shrink-0" />
                      <span className="font-mono-tabular">{coord.phonePlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Mail className="w-4 h-4 text-[#FF3CAC] shrink-0" />
                      <span className="truncate">{coord.emailPlaceholder}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
