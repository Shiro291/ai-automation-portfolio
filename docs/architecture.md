# Portfolio Architecture

This document provides a comprehensive breakdown of the technical and structural design of the EdTech Portfolio Application, following the principles of the `docs-architect` skill. 

## 1. System Overview

The project is structured as a **Serverless React Application** utilizing the **Next.js 15 App Router**. It is purely frontend-focused with no external database layer, optimizing for *zero latency* and *minimum infrastructure cost*. State management is handled entirely on the client-side via **Zustand**.

### Key Technologies
- **Next.js 15 (React 19 RC):** Core routing and server-side rendering skeleton.
- **next-intl:** Handles translation dictionaries (`en`, `id`) and dynamic locale routing.
- **Tailwind CSS:** Manages the Editorial Brutalism design system tokens (spacing, typography, monochrome colors).
- **Zustand:** Centralized global state for the Lead Magnet ROI calculations.
- **Framer Motion:** Handles layout animations, micro-interactions, and scroll-triggers.

---

## 2. Core Routing & Middleware (`i18n`)

The application does not use external subdomains for languages. It uses the App Router's dynamic segment feature: `/src/app/[locale]/`.

### Middleware (`middleware.ts`)
The `next-intl` middleware intercepts all incoming requests to the root `/`. It reads the user's `Accept-Language` header and automatically redirects them to `/en` or `/id`.

### The Dictionary System (`src/locales/`)
All copy, strings, and marketing logic are strictly decoupled from the React components. They live as JSON objects inside the `locales/` directory. 

*   **Benefit:** This creates a strict *separation of concerns*. A copywriter can modify the "Dual-Threat Philosophy" pitch in `en.json` without ever touching `page.tsx`.

---

## 3. Global State Management & Hydration (`Zustand`)

The most complex interactive element is the `<LeadMagnet />` component, which calculates customized EdTech ROI.

### Architecture of `useCalculatorStore.ts`
Instead of using React `useState` and passing props through a deeply nested component tree, the application uses Zustand. 

```typescript
interface CalculatorState {
    step: 1 | 2;
    data: CalculatorData;
    roiResult: RoiResult | null;
    isSubmitting: boolean;
    isSuccess: boolean;
    // Actions
    submitForm: () => Promise<void>;
}
```

### The Hydration Mismatch Patch (`useStore.ts`)
Because this application uses Server-Side Rendering (SSR), accessing client-side Zustand state during the initial server render causes a "Hydration Mismatch" (especially when browser extensions like Dark Reader modify the DOM).

To combat this, the architecture implements a custom `useStore.ts` React Hook. This hook enforces that Zustand state is *only* accessed *after* the component has fully mounted on the client-side, preventing severe React hydration crashes.

---

## 4. Deployment Architecture

The application is engineered for horizontal scalability on Edge Networks.

### Vercel Integration
The portfolio is designed for 1-click deployment on the Vercel Edge Network. 
*   **Static Assets:** Heavy assets (like `tatasurya.png` and `meca.png`) are automatically optimized and cached onto global CDNs by the `<Image>` component, ensuring sub-second load times regardless of the user's geographic location.
*   **Zero-Config Serverless:** The `middleware.ts` language routing is automatically compiled into an Edge Function by Vercel, removing the need for dedicated routing servers.
