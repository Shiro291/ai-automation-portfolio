# Executive Summary: Fathan Faqih Ali Portfolio Codebase

Welcome to the definitive technical reference for the EdTech Portfolio architecture. This repository is a highly optimized Next.js 15 application engineered to run with zero technical debt while maximizing conversion via behavioral psychology.

This `README.md` serves as the map to the entire codebase. For deep, architectural rationale, please consult the `/docs` directory.

---

## 🏗️ Directory Structure Overview

The project follows an Atomic Design paradigm layered over the Next.js App Router, configured strictly for internal internationalization (`i18n`).

```text
C:\Users\fatha\OneDrive\Desktop\My-Website\
├── docs/                        # 📚 Comprehensive technical architecture & component explanations
│   ├── architecture.md          # Big-picture system design & data flow
│   └── components.md            # Walkthroughs of critical UI behaviors
├── src/
│   ├── app/                     # Next.js App Router Root
│   │   └── [locale]/            # Dynamic Route Segment for English ('en') and Indonesian ('id')
│   │       ├── layout.tsx       # Root layout injecting NextIntlProviders & Brutalist variables
│   │       └── page.tsx         # Primary index aggregating all interactive sections
│   ├── components/              # 🧩 Reusable, state-aware React Components
│   │   ├── DualThreat.tsx       # Split-screen UI showing Tech & Edu background (Framer Motion)
│   │   ├── LeadMagnet.tsx       # Complex multi-step form calculating localized ROI
│   │   └── Timeline.tsx         # Interactive vertical CV milestones component
│   ├── locales/                 # 🌐 i18n JSON Dictionaries (The Source of Truth for Content)
│   │   ├── en.json              # English copywriting & technical assertions
│   │   └── id.json              # Bahasa Indonesia localized string mappings
│   ├── store/                   # 🧠 State Management Layer
│   │   ├── useCalculatorStore.ts# Zustand store maintaining Lead Magnet state & ROI logic
│   │   └── useStore.ts          # Custom wrapper hook enforcing SSR hydration safety
│   └── i18n.ts                  # next-intl configuration router & dictionary loader
├── implementation_plan.md       # Initial systemic AI execution plan & strategy
├── implementation_plan2.md      # Addendum dictating the "Dual-Threat" merger strategy
├── middleware.ts                # Next.js edge middleware routing / to /en or /id based on headers
├── next.config.ts               # Core framework configurations & optimization flags
└── tailwind.config.ts           # Design System tokens (Editorial Brutalism)
```

---

## 🧠 Architectural Skills Deployed

This directory was physically constructed by synthesizing specific algorithmic "skills":

1.  **`docs-architect` & `code-documentation`:** This README and the `/docs` folder systematically organize the cognitive load of navigating this repository, explaining *why* decisions were made, not just *what* they are.
2.  **`interactive-portfolio` & `marketing-psychology`:** Dictated the content structure inside `/locales`, enforcing high-ticket framing and *Authority Bias* over standard junior-level developer portfolios.
3.  **`i18n-localization`:** Governs the `middleware.ts` and `[locale]` routing matrix, allowing 0-latency toggling between EN and ID without database overhead.
4.  **`web-performance-optimization`:** Evident in the raw `<Image>` configurations in `page.tsx` and the custom Zustand hydration hook in `src/store/useStore.ts` blocking extension-based DOM crashes.

---

## 🚀 Getting Started

To interface with this architecture locally:

```bash
# 1. Install precise dependency tree
npm install

# 2. Boot Next.js in Development mode (with Turbo)
npm run dev

# 3. Compile the production footprint
npm run build
```

## 📖 Deep Dives

To understand the core mechanics of how the Zustand engine calculates ROI or how the hydration mismatch was natively patched, please read:
- [System Architecture (docs/architecture.md)](./docs/architecture.md)
- [Component Engineering (docs/components.md)](./docs/components.md)
