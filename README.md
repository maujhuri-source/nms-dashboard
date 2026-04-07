# NMS Mission Control Dashboard

Private dashboard for newmomstuff.com exit tracking.

## Pages

- **Mission Control** (`index.html`) – Main dashboard with tabs for Pinterest, Metrics, Journal, Timeline, ARJUN instructions, Tasks, and Parked tasks.
- **Journey Journal** (`journal.html`) – Auto-updating log of weekly reflections, wins, and metrics.

## Data

- `dashboard-data.json` – Central data file maintained by ARJUN at the end of each session.
- Analytics updates via owner input using EDIT buttons in the dashboard (DeepSeek cannot read images).
- Tasks and ARJUN status synced from `dashboard-data.json`.

## Deployment

Hosted on GitHub Pages at `https://[username].github.io/nms-dashboard/`.

## Local development

Open `index.html` directly in a browser – no build step required. Uses React via CDN.

## Update workflow

1. ARJUN updates `dashboard-data.json` after each session
2. Owner updates analytics numbers via EDIT buttons in the dashboard
3. Journal page auto‑populates from `journal` array in `dashboard-data.json`
4. Git push to GitHub triggers Pages rebuild