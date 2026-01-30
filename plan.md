# Water Meter Calculator Quest - Implementation Plan

## Project Goal
Create watermetercalculator.quest using:
- CopilotKit + Pydantic AI (chat agent)
- Hume EVI (voice agent)
- Next.js 15 with App Router
- Railway for Python agent deployment

Cloned from gasratecalculator.quest template and adapted for water meter calculations.

---

## Implementation Progress (January 2026)

### Phase 1: Clone & Transform - COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| Clone gasratecalculator.quest template | Done | Used as base structure |
| Update package.json | Done | water-meter-calculator-quest v2.0.0 |
| Remove gas-specific pages | Done | Replaced with water pages |
| Create WaterMeterCalculator component | Done | Occupants, bedrooms, usage inputs |
| Rewrite homepage | Done | Calculator, FAQs, How It Works |
| Update Navigation | Done | Cyan/blue water branding |
| Update Footer | Done | Water links, Ofwat, CCW |

### Phase 2: CopilotKit + Pydantic AI - COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| Update providers.tsx | Done | water_agent, "Water Meter Assistant" |
| Update API route | Done | Points to water_agent |
| Create agent.py | Done | 4 water-specific tools |
| Ready for Railway deploy | Done | water-agent directory created |

**Agent Tools Implemented:**
- `calculate_water_savings(occupants, bedrooms, daily_litres)` - Estimate savings
- `get_water_usage_info(activity)` - Water usage by activity
- `get_water_company_info(region)` - Water company information
- `get_water_saving_tips(area)` - Tips by area of home

### Phase 3: Hume Voice - COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| HeroVoice component | Done | Pulsating orb, auth gated |
| Water-specific system prompt | Done | Friendly, helpful tone |
| Add to homepage | Done | Centered in hero section |

### Phase 4: Content & SEO - COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| Update robots.ts | Done | watermetercalculator.quest domain |
| Update sitemap.ts | Done | Water-focused URLs |
| Update privacy/terms/contact | Done | Water Meter Calculator branding |
| Update manifest.ts | Done | Cyan theme color |
| Update icons | Done | Water droplet icon |
| Create /water-bill-calculator | Done | Bill estimation page |
| Create /water-usage-calculator | Done | Usage by activity |
| Create /metered-vs-unmetered | Done | Comparison guide |

### Phase 5: Authentication - COMPLETE

| Task | Status | Notes |
|------|--------|-------|
| Add NeonAuthUIProvider | Done | Wrapped app in auth provider |
| Navigation auth UI | Done | Sign in/up buttons, UserButton |
| Gate HeroVoice behind auth | Done | Voice only for signed-in users |

---

## Environment Variables Needed

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

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION SETUP                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────────┐                    ┌──────────────┐      │
│   │   VERCEL     │                    │   RAILWAY    │      │
│   │  (Next.js)   │                    │  (Python)    │      │
│   │              │                    │              │      │
│   │ watermeter   │ ─── AG-UI ──────► │  Pydantic    │      │
│   │ calculator   │                    │  AI Agent    │      │
│   │ .quest       │                    │              │      │
│   │              │                    │ • 4 Tools    │      │
│   │ • Frontend   │                    │ • Gemini 2.0 │      │
│   │ • CopilotKit │                    │   Flash      │      │
│   │ • HeroVoice  │                    │              │      │
│   └──────────────┘                    └──────────────┘      │
│          │                                                   │
│          │                                                   │
│          ▼                                                   │
│   ┌──────────────┐                                          │
│   │   HUME AI    │                                          │
│   │   (Voice)    │                                          │
│   │              │                                          │
│   │ System prompt│                                          │
│   │ for water    │                                          │
│   └──────────────┘                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
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
| Auth (Sign In/Up) | `/auth/[path]` | Done |

---

## Next Steps

1. [x] Create all page components
2. [x] Create WaterMeterCalculator component
3. [x] Add SEO metadata and structured data
4. [x] Create Python agent with water tools
5. [x] Add cookie consent component
6. [x] Add disclaimer banner
7. [x] Add Neon Auth with voice gating
8. [ ] Run npm install to install dependencies
9. [ ] Test locally
10. [ ] Deploy agent to Railway
11. [ ] Set up environment variables in Vercel
12. [ ] Deploy to Vercel

---

## SEO Keywords to Target

Primary (high intent):
- water meter calculator
- water meter calculator uk
- water meter reading calculator uk

Secondary:
- water usage calculator uk
- water bill calculator uk
- should i get a water meter
- metered vs unmetered water
- water meter savings calculator

Long-tail:
- how much will i save with a water meter
- water meter worth it calculator
- compare water bills uk
- water company bill calculator

---

## Files Created

### Frontend
- `package.json` - Dependencies
- `app/layout.tsx` - Root layout with SEO
- `app/page.tsx` - Homepage with calculator
- `app/globals.css` - Styles
- `components/WaterMeterCalculator.tsx` - Main calculator
- `components/Navigation.tsx` - Water branding
- `components/Footer.tsx` - Water links
- `components/providers.tsx` - CopilotKit setup
- `components/HeroVoice.tsx` - Voice widget
- `components/CookieConsent.tsx` - Cookie banner
- `components/Disclaimer.tsx` - Estimates disclaimer
- `app/water-bill-calculator/page.tsx` - Bill calculator
- `app/water-usage-calculator/page.tsx` - Usage calculator
- `app/metered-vs-unmetered/page.tsx` - Comparison guide
- `app/articles/page.tsx` - Articles listing
- `app/contact/page.tsx` - Contact page
- `app/privacy/page.tsx` - Privacy policy
- `app/terms/page.tsx` - Terms of service
- `app/cookies/page.tsx` - Cookie policy
- `app/auth/[path]/page.tsx` - Auth pages
- `app/api/auth/[...path]/route.ts` - Auth API
- `app/api/copilotkit/route.ts` - CopilotKit API
- `app/api/hume-token/route.ts` - Hume token API
- `app/sitemap.ts` - SEO sitemap
- `app/robots.ts` - SEO robots
- `app/manifest.ts` - PWA manifest
- `app/icon.tsx` - Favicon
- `app/apple-icon.tsx` - Apple icon
- `app/loading.tsx` - Loading state

### Agent
- `agent/pyproject.toml` - Python dependencies
- `agent/src/agent.py` - Water meter agent
- `agent/src/__init__.py` - Package init

### Documentation
- `CLAUDE.md` - Development guide
- `plan.md` - This file
