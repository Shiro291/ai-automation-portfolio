# Skill Usage Rules (`skillusagerules.md`)

*This document defines the strict protocol for leveraging the 5 core AI Skills during the development of Fathan Faqih Ali's EdTech Portfolio.*

## 🛑 The Prime Directive: Verify & Read First
**NEVER ASSUME. ALWAYS READ BEFORE CODING.**
Before implementing any feature, component, or configuration, the agent **MUST**:
1. Evaluate the specific technical or design needs of the task.
2. Search `C:\Users\fatha\.agent\skills\` for the *most appropriate* skill(s) for that exact context.
3. Execute a `view_file` command to read the corresponding `SKILL.md`.

While the 5 Core Skills listed below form the foundation of this project, the agent is **REQUIRED** to dynamically load and read *additional* specialized skills (e.g., `react-state-management`, `web-performance-optimization`, `seo-meta-optimizer`) if the immediate task demands it. Flexibility and precision are the priority.

---

## 🛠️ The 10 Core Skills & When to Use Them

### 1. `ui-ux-pro-max`
**Location:** `C:\Users\fatha\.agent\skills\ui-ux-pro-max\SKILL.md`
**When to Use:**
*   **Before writing any Tailwind CSS classes.**
*   When determining color palettes (specifically the "Editorial Brutalism meets Clean Tech" style).
*   When setting up global typography, font pairings, and responsive layouts.
*   When designing the 3-column grid for the "Services" section.
*   When implementing hover micro-animations (Framer Motion / CSS transitions).

### 2. `i18n-localization`
**Location:** `C:\Users\fatha\.agent\skills\i18n-localization\SKILL.md`
**When to Use:**
*   **Before structuring the Next.js App Router for internationalization.**
*   When configuring the language dictionaries (JSON files for English and Bahasa Indonesia).
*   When building the `[EN / ID]` toggle button in the navigation bar.
*   When handling routing state to ensure no page reloads/layout shifts occur during language switching.

### 3. `marketing-psychology`
**Location:** `C:\Users\fatha\.agent\skills\marketing-psychology\SKILL.md`
**When to Use:**
*   **Before writing copy for the "Visionary" Hero Section.**
*   When framing the "High-Impact" Case Studies (exaggerating from school projects to Enterprise-Grade Solutions).
*   When writing the "ROI" text for the Services/Consulting section.
*   Whenever the tone needs to project supreme confidence ("Fake it till you make it") without sounding arrogant.

### 4. `interactive-portfolio`
**Location:** `C:\Users\fatha\.agent\skills\interactive-portfolio\SKILL.md`
**When to Use:**
*   **Before architecting the overall flow of the single-page/hybrid scroll.**
*   When structuring the Case Study takeover modals (Problem &rarr; Pedagogical Approach &rarr; Technical Solution).
*   When embedding the "Authority" Lead Magnet to ensure it acts as a seamless high-conversion funnel rather than a clunky add-on.

### 5. `seo-authority-builder`
**Location:** `C:\Users\fatha\.agent\skills\seo-authority-builder\SKILL.md`
**When to Use:**
*   **Before finalizing the `app/layout.tsx` metadata and `<head>` elements.**
*   When configuring `hrefLang` tags to prevent EN/ID content from competing in search rankings.
*   When optimizing `<form>` elements and ARIA labels for 100/100 Accessibility scores.
*   When ensuring images are optimized using `next/image` to hit perfect Core Web Vitals.

### 6. `web-artifacts-builder`
**Location:** `C:\Users\fatha\.agent\skills\web-artifacts-builder\SKILL.md`
**When to Use:**
*   When rapidly generating complete structural markdown/code artifacts.
*   When shifting from planning into aggressive, multi-file code generation.

### 7. `autonomous-agents`
**Location:** `C:\Users\fatha\.agent\skills\autonomous-agents\SKILL.md`
**When to Use:**
*   When executing broad, multi-step code integrations (e.g., tying Zustand state with React Hook Form).
*   To leverage an autonomous loop for implementing the actual core logic instead of manual prompting.

### 8. `software-architecture`
**Location:** `C:\Users\fatha\.agent\skills\software-architecture\SKILL.md`
**When to Use:**
*   **Before deciding on the folder structure inside the Next.js `src/app` or `src/components` directories.**
*   When ensuring separation of concerns (Atomic Design vs. Feature-sliced design).

### 9. `react-ui-patterns`
**Location:** `C:\Users\fatha\.agent\skills\react-ui-patterns\SKILL.md`
**When to Use:**
*   When building React Server Components vs. Client Components.
*   When applying context or custom hooks for the bilingual state logic.

### 10. `deployment-pipeline-design`
**Location:** `C:\Users\fatha\.agent\skills\deployment-pipeline-design\SKILL.md`
**When to Use:**
*   When setting up the CI/CD pipeline to Vercel.
*   When writing build and verification scripts in `package.json`.

---

## 🚦 Execution Protocol (Dynamic Skill Loading)
1.  **Check Task:** Look at the current item in `task.md`.
2.  **Identify Domain & Needs:** Does this task relate to UI/UX, database schemas, API design, copywriting, etc.?
3.  **Search Skills Directory:** Scan `C:\Users\fatha\.agent\skills\` for the *most relevant* skill for the exact problem at hand (do not limit to just the core 5).
4.  **Read Skill(s):** Use `view_file` on the chosen `SKILL.md` file(s).
5.  **Execute Code:** Write the TypeScript/React/Tailwind code *only* after fully digesting the chosen skills' guidelines.
