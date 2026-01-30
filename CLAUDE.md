# Water Meter Calculator Quest - Development Guide

## Project Overview

**Site:** watermetercalculator.quest
**Status:** V2 (CopilotKit + Pydantic AI + Hume Voice)
**Purpose:** Free water meter calculator to help UK households decide if switching to a water meter will save money

---

## What This Tool Does

The Water Meter Calculator helps UK households:
- Calculate if switching to a water meter will save money
- Compare metered vs unmetered water bills
- Estimate water usage based on household activities
- Understand water billing in the UK

---

## Target Keywords

Based on Search Console data (January 2026):
- "water meter calculator uk" - Position ~54
- "water meter calculator" - Position ~59
- "water meter reading calculator uk" - Position ~75
- "water metre calculator" - Position ~48
- "water usage calculator uk" - Position ~99

### SEO Strategy

Each page targets specific keywords with:
- **8+ keyword mentions per section** - ensures topic relevance
- **Internal links** - topic cluster structure connecting all calculator pages
- **Authority links** - external links to Ofwat, CCW, Waterwise, Energy Saving Trust, Citizens Advice, Environment Agency
- **Schema.org markup** - FAQPage and HowTo structured data on homepage

---

## V2 Features

### Core Calculator - COMPLETE
- [x] Household size input (occupants, bedrooms)
- [x] Water usage inputs (showers, baths, toilets, appliances)
- [x] Garden watering option
- [x] Metered vs unmetered comparison
- [x] Savings recommendation
- [x] Advanced rate customization
- [x] Voice-enabled assistance (Hume EVI)
- [x] AI assistant for water questions (CopilotKit)

### Additional Pages - COMPLETE
- [x] /water-bill-calculator - Bill estimation (targets "water bill calculator uk")
- [x] /water-usage-calculator - Usage by activity (targets "water usage calculator uk")
- [x] /metered-vs-unmetered - Comparison guide (targets "metered vs unmetered")

### Authentication - COMPLETE
- [x] Neon Auth integration
- [x] Voice assistant gated behind login
- [x] Sign in/Sign up in Navigation

---

## Tech Stack

### Frontend (Vercel)
- Next.js 15 with App Router
- React 19
- Tailwind CSS 4
- @copilotkit/react-core, @copilotkit/react-ui (v1.50.1 - pinned version)
- @humeai/voice-react
- @neondatabase/auth (requires legacy-peer-deps)

### Backend (Railway)
- Python 3.11+
- Pydantic AI with AG-UI protocol
- Google Gemini 2.0 Flash
- FastAPI + Uvicorn

### Known Compatibility Issues
- `.npmrc` contains `legacy-peer-deps=true` - required because @neondatabase/auth expects Next.js 16+
- CopilotKit pinned to 1.50.1 - version 1.51.3+ has breaking API changes

---

## Key Formulas

### Metered Bill Calculation
```
Daily Usage (L) = (Per Person Usage x Occupants) + Household Shared
Annual Usage (m3) = Daily x 365 / 1000
Water Cost = Annual m3 x Water Rate (£1.85/m3)
Sewage Cost = Annual m3 x Sewage Rate (£1.45/m3)
Total = Water Cost + Sewage Cost + Standing Charge (£45/year)
```

### Unmetered Bill Estimation
Based on bedrooms (proxy for rateable value):
- 1 bedroom: ~£320/year
- 2 bedrooms: ~£420/year
- 3 bedrooms: ~£520/year
- 4 bedrooms: ~£640/year
- 5+ bedrooms: ~£780/year

---

## Water Usage Data

### Average Per Activity
- Shower: 10 litres/minute
- Bath: 80 litres
- Toilet flush: 6 litres (dual)
- Washing machine: 50 litres/load
- Dishwasher: 12 litres/load
- Garden hose: 15 litres/minute
- Running tap: 6 litres/minute

### Average Daily Usage
- UK average: 145 litres/person/day
- Water-efficient target: 110 litres/person/day

---

## Agent Personality: "Water Meter Assistant"

The agent should:
- Be friendly and helpful
- Explain water billing simply
- Reference Ofwat and CCW where appropriate
- Encourage users to contact water companies for exact rates
- Provide practical water-saving tips

---

## Environment Variables

### Vercel (Production)
```env
AGENT_URL=https://water-agent-production.up.railway.app/agui/
DATABASE_URL=...
NEON_AUTH_BASE_URL=...
NEXT_PUBLIC_NEON_AUTH_URL=...
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=...
```

### Railway (Agent)
```env
GOOGLE_API_KEY=...
```

**Important:** When setting environment variables, do not leave spaces, returns, or trailing characters after the value.

---

## Commands

### Development
```bash
npm run dev                    # Frontend
cd agent && uv run uvicorn src.agent:app --reload --port 8000  # Agent
```

### Deploy
```bash
git push origin main           # Frontend auto-deploys via Vercel
cd agent && railway up         # Agent manual deploy
```

---

## Pages Structure

| Page | URL | Target Keywords | Status |
|------|-----|-----------------|--------|
| Homepage | `/` | water meter calculator uk | SEO Optimized |
| Water Bill Calculator | `/water-bill-calculator` | water bill calculator uk | SEO Optimized |
| Water Usage Calculator | `/water-usage-calculator` | water usage calculator uk | SEO Optimized |
| Metered vs Unmetered | `/metered-vs-unmetered` | metered vs unmetered | SEO Optimized |
| Articles | `/articles` | - | Done |
| Contact | `/contact` | - | Done |
| Privacy | `/privacy` | - | Done |
| Terms | `/terms` | - | Done |
| Cookies | `/cookies` | - | Done |
| Auth Pages | `/auth/[path]` | - | Done |

**Total: 9 pages** (as requested)

---

## Topic Cluster Structure

All calculator pages link to each other forming a topic cluster:

```
Homepage (Water Meter Calculator)
    |
    +-- /water-bill-calculator
    |       |-- links to homepage, /water-usage-calculator, /metered-vs-unmetered
    |
    +-- /water-usage-calculator
    |       |-- links to homepage, /water-bill-calculator, /metered-vs-unmetered
    |
    +-- /metered-vs-unmetered
            |-- links to homepage, /water-bill-calculator, /water-usage-calculator
```

---

## Authority Links (External)

All SEO pages link to these trusted UK sources:
- **Ofwat** - https://www.ofwat.gov.uk/ (UK water regulator)
- **CCW** - https://www.ccw.org.uk/ (Consumer Council for Water)
- **Waterwise** - https://www.waterwise.org.uk/ (Water efficiency)
- **Energy Saving Trust** - https://www.energysavingtrust.org.uk/
- **Citizens Advice** - https://www.citizensadvice.org.uk/consumer/water/water-supply/
- **Environment Agency** - https://www.gov.uk/government/organisations/environment-agency

---

## Branding

### Colors
- Primary: Cyan (#06b6d4) - Water
- Secondary: Blue (#3b82f6)
- Background: Slate (#0f172a)
- Accent: White

### Logo
Water droplet/beaker icon with "Water Meter Calculator" text

---

## External Resources

### Regulatory Bodies
- Ofwat (Water Services Regulation Authority): https://www.ofwat.gov.uk/
- CCW (Consumer Council for Water): https://www.ccw.org.uk/

### Water Saving
- Waterwise: https://www.waterwise.org.uk/
- Energy Saving Trust: https://www.energysavingtrust.org.uk/

---

## Deployment URLs

- **Frontend (Vercel):** https://watermetercalculator.quest
- **Agent (Railway):** https://water-agent-production.up.railway.app

---

## Future Enhancements

- [ ] Add water company selector with regional rates
- [ ] Add water meter reading tracker
- [ ] Add seasonal usage comparison
- [ ] Add water footprint calculator
- [ ] Add leak detection guide

---

## Git Commits History

- `b4aa9b9` - Build full water meter calculator site
- `ad71cb6` - Add .npmrc with legacy-peer-deps
- `f4721a0` - Pin CopilotKit to v1.50.1
