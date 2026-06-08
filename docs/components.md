# Component Engineering & Design Patterns

This technical reference breaks down the core functional React components in `src/components/`, applying the `code-documentation-code-explain` skill to decode complex internal mechanics and patterns.

---

## 1. `<LeadMagnet />` (Core Conversion Engine)

The highest-complexity component in the repository. Its primary goal is to convert anonymous traffic into captured leads by offering immediate intellectual value (An ROI Calculation).

### Flow & Pattern
It utilizes a **Multi-Step Form architectural pattern** relying heavily on `react-hook-form` and `zod` for strict Schema Validation.

1.  **Step 1:** Asks for the current structural format (PDFs, LMS, etc.) and validates against `step1Schema`.
2.  **Step 2:** Requests the total student volume (validates against a numeric `step2Schema`).
3.  **Submission:** Instead of making a `fetch()` call to a backend database, it triggers the `useCalculatorStore().submitForm()` method. The store simulates a network request (`await new Promise...`) for UX weight, calculates the specific ROI algorithms based on the Zod-validated inputs, and returns the User back to the UI.
4.  **The Result Dashboard:** The state shifts to `isSuccess = true`, rendering a brutally minimalist 3-grid dashboard showcasing "Annual Savings", "Engagement Uplift", and "Admin Hours Saved".

### Edge Cases Handled
*   **Hydration:** Wraps all Zustand retrievals in a custom `useStore()` hook. If the client hasn't mounted, it returns a brutalist Skeleton Loader (`<div className="animate-pulse...">`) instead of crashing the server render string.

---

## 2. `<DualThreat />` (Identity Splitter)

This component sits beneath the Hero and orchestrates the critical psychological framing (from the `marketing-psychology` skill) that the creator is both a Systems Engineer and a Learning Architect.

### Flow & Pattern
*   **Layout:** CSS Grid (`grid-cols-1 md:grid-cols-2`) guarantees perfect mobile stacking and side-by-side desktop viewing.
*   **Framer Motion (`viewport={{ once: true }}`):** Applies staggered entry animations *only* when the element intersects with the browser viewport. It does not run on initial root load if the component is below the fold, saving CPU cycles.
*   **Data Injection:** `next-intl` is used to map strings directly from `Philosophy.tech_heading` and `Philosophy.edu_heading`, ensuring perfect translated symmetry.

---

## 3. `<Timeline />` (Interactive CV)

Replaces standard resume pages with a vertical, interactive milestone format.

### Flow & Pattern
*   **Iterative Rendering:** It maps over an array of localized object IDs (`pgsd`, `rpl`), injecting translations in real-time.
*   **The Desktop "Center Line" Trick:** Uses absolute positioning (`absolute left-1/2 transform -translate-x-1/2 w-1 bg-black`) to draw a continuous vertical spine down the page.
*   **Responsive Modulo Logic:** Utilizes `index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'` to automatically stagger the timeline cards left and right on wide displays, while enforcing strict left-alignment on mobile devices.
