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
- [x] /water-bill-calculator - Bill estimation
- [x] /water-usage-calculator - Usage by activity
- [x] /metered-vs-unmetered - Comparison guide

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
- @copilotkit/react-core, @copilotkit/react-ui
- @humeai/voice-react

### Backend (Railway)
- Python 3.11+
- Pydantic AI with AG-UI protocol
- Google Gemini 2.0 Flash
- FastAPI + Uvicorn

---

## Key Formulas

### Metered Bill Calculation
```
Daily Usage (L) = (Per Person Usage × Occupants) + Household Shared
Annual Usage (m³) = Daily × 365 / 1000
Water Cost = Annual m³ × Water Rate (£1.85/m³)
Sewage Cost = Annual m³ × Sewage Rate (£1.45/m³)
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
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=...
```

### Railway (Agent)
```env
GOOGLE_API_KEY=...
```

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

| Page | URL | Status |
|------|-----|--------|
| Homepage | `/` | Done |
| Water Bill Calculator | `/water-bill-calculator` | Done |
| Water Usage Calculator | `/water-usage-calculator` | Done |
| Metered vs Unmetered | `/metered-vs-unmetered` | Done |
| Articles | `/articles` | Done |
| Contact | `/contact` | Done |
| Privacy | `/privacy` | Done |
| Terms | `/terms` | Done |
| Cookies | `/cookies` | Done |
| Auth Pages | `/auth/[path]` | Done |

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

## Future Enhancements

- [ ] Add water company selector with regional rates
- [ ] Add water meter reading tracker
- [ ] Add seasonal usage comparison
- [ ] Add water footprint calculator
- [ ] Add leak detection guide
