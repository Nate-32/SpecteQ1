# SpecteQ 2027 — The Bot Competition

**Live Website (Placeholder):** `https://<your-github-username>.github.io/<your-repo-name>/`

> Replace `<your-github-username>` and `<your-repo-name>` with your GitHub account/organization and repository name once GitHub Pages is enabled.

---

## Project Overview

**SpecteQ 2027** (`BUILD. BATTLE. DOMINATE.`) is a complete robotics and engineering competition web platform. It unifies:

- **Event Execution Model**: Participants enter as **Players**, form **Gaming Teams**, complete **Missions** (workshops), unlock four progressive **Levels** (`Level 00 Insert Coin` → `Level 01 Training` → `Level 02 Build` → `Level 03 Final Boss`), and compete in **The Robotics Arena** to become **High Score Champions**.
- **Competition Structure**: Full single-page section architecture with sticky navigation, hero status HUD, event overview, robotics category terminals, mission selector, level progression system, configurable timeline, arena showcase, leaderboard terminal, expandable rules, registration preview, and organizer contacts.
- **Visual Direction**: Original modern Vice City coastal sunset aesthetic paired with a liquid-glass interface (`#0B0A19` / `#15132B` / `#211B3D` surfaces with `#00E5FF`, `#FF3CAC`, `#9B5CFF`, and `#FF875E` lighting accents).

---

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8 (`base: './'` for repository-agnostic relative asset resolution)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom liquid-glass surface utilities and `Orbitron`, `Rajdhani`, `DM Sans`, and `JetBrains Mono` typography
- **Icons**: Lucide React
- **Deployment**: GitHub Actions + GitHub Pages (`actions/deploy-pages@v4`)

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated build & GitHub Pages deployment
├── public/
│   └── 404.html                # Static fallback redirect for GitHub Pages
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Event concept & LEARN -> BUILD -> TEST -> COMPETE journey
│   │   ├── ArenaSection.tsx        # The Robotics Arena showcase & zone cards
│   │   ├── CategoriesSection.tsx   # 6 liquid-glass robotics terminals + detail modal
│   │   ├── Footer.tsx              # Branding, quick links, configurable socials
│   │   ├── HeroSection.tsx         # Vice City coastal backdrop & live Player 01 HUD
│   │   ├── LeaderboardSection.tsx  # Filterable/sortable demo standings terminal
│   │   ├── LevelsSection.tsx       # Interactive 4-level progression & detail inspector
│   │   ├── MissionsSection.tsx     # Player mission selector + mission briefing modal
│   │   ├── Navbar.tsx              # Sticky glass navigation + scroll progress hairline
│   │   ├── RegistrationSection.tsx # Client-validated registration preview & contacts
│   │   ├── RulesSection.tsx        # Expandable rules & guidelines accordions
│   │   ├── TimelineSection.tsx     # Configurable 7-phase season timeline
│   │   └── ViceCityArtwork.tsx     # Original vector skyline, sports car, & schematics
│   ├── data/
│   │   └── specteqData.ts          # Centralized, editable 2027 event data & placeholders
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Configurable Event Content

All competition dates, venue details, organizer contacts, robotics category specs, mission tracks (including reference examples *Gesture-Controlled Car* and *PAC-MAN Maze Robot*), rules, and demonstration leaderboard entries are centralized in:

```text
src/data/specteqData.ts
```

Update that file to publish confirmed 2027 specifications without modifying layout components.

---

## Installation & Local Development

### Prerequisites

- Node.js `>= 20` (CI uses Node.js 24)
- npm `>= 10`

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start local development server on port 3000
npm run dev
```

Open `http://localhost:3000` in your browser.

### Type-Checking & Production Build

```bash
# Run TypeScript check
npm run lint

# Build production bundle into ./dist
npm run build

# Preview production bundle locally
npm run preview
```

---

## GitHub Pages Deployment Instructions

This repository includes `.github/workflows/deploy.yml`, configured for one-click automated deployment via GitHub Actions.

### Repository Configuration Requirements

1. Push this repository to GitHub with your default branch set to `main`.
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Ensure **Settings → Actions → General → Workflow permissions** allows read/write OIDC token deployment (already requested in `.github/workflows/deploy.yml`).

### How Automatic Deployment Works

- **Push to `main`**: Every push to `main` automatically triggers the `Deploy SpecteQ 2027 to GitHub Pages` workflow. It installs dependencies (`npm ci` when `package-lock.json` is present, or `npm install` otherwise), runs `npm run lint`, builds the production bundle (`npm run build`), uploads `./dist`, and deploys directly to GitHub Pages.
- **Manual Deployment (`workflow_dispatch`)**: Open the **Actions** tab in GitHub, select **Deploy SpecteQ 2027 to GitHub Pages**, and click **Run workflow**.

Once the `deploy` job succeeds, your live site will be accessible at:

```text
https://<your-github-username>.github.io/<your-repo-name>/
```
