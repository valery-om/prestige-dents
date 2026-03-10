# Phase 2: Foundation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Set up the Astro project with design system, layout, content collections, schema markup, dark/light theme, and accessibility mode — ready for Phase 3 page content.

**Architecture:** Astro 5 SSG with Tailwind CSS 4, Preact for islands, self-hosted Inter font. CSS custom properties for theming (light/dark/accessible). JSON-LD schema auto-generated from clinic data and content collections.

**Tech Stack:** Astro 5, Tailwind CSS 4, TypeScript, Preact, Vercel

**Reference project:** `/Users/valeria/valery-site` (same stack, different design system)

---

### Task 1: Scaffold Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.ts`
- Create: `tsconfig.json`
- Create: `.gitignore`
- Create: `vercel.json`

**Step 1: Initialize Astro project**

Run:
```bash
cd /Users/valeria/prestige-dents
npm create astro@latest . -- --template minimal --typescript strict --install --no-git
```

If prompted about overwriting, allow it (only `docs/` exists).

**Step 2: Add integrations**

Run:
```bash
npx astro add tailwind preact sitemap --yes
```

**Step 3: Configure Astro**

Replace `astro.config.mjs` with `astro.config.ts`:

```typescript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prestige-dents.ru',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    preact(),
    sitemap(),
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
});
```

**Step 4: Create Vercel config**

```json
{
  "buildCommand": "astro build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

**Step 5: Create `.gitignore`**

```
node_modules/
dist/
.astro/
.vercel/
.env
```

**Step 6: Verify project builds**

Run: `npm run build`
Expected: Build succeeds with 0 errors.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: scaffold Astro project with Tailwind, Preact, sitemap"
```

---

### Task 2: Self-Host Inter Font

**Files:**
- Copy: `Inter-VariableFont_slnt,wght.ttf` from BrandBook
- Create: `public/fonts/Inter-Variable.woff2`
- Create: `src/styles/fonts.css`

**Step 1: Convert and copy font**

The BrandBook has Inter Variable font at `/Users/valeria/Downloads/BrandBook/Шрифты/Inter-VariableFont_slnt,wght.ttf`.

Run:
```bash
mkdir -p public/fonts
cp "/Users/valeria/Downloads/BrandBook/Шрифты/Inter-VariableFont_slnt,wght.ttf" public/fonts/Inter-Variable.ttf
```

Note: TTF is fine for now. WOFF2 conversion can be done later for optimization (saves ~30% file size). Browsers handle TTF well.

**Step 2: Create font CSS**

Create `src/styles/fonts.css`:
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Step 3: Commit**

```bash
git add public/fonts/ src/styles/fonts.css
git commit -m "feat: self-host Inter variable font from BrandBook"
```

---

### Task 3: Design System — CSS Custom Properties + Tailwind Config

**Files:**
- Create: `src/styles/global.css`
- Create: `src/styles/accessibility.css`
- Modify: `tailwind.config.mjs` (extend theme with tokens)

**Step 1: Create global.css with design tokens**

Create `src/styles/global.css`:
```css
@import './fonts.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════
   DESIGN SYSTEM — Glass Medical Tech
   Brand: Стоматология Престиж
   Font: Inter (variable, self-hosted)
   ═══════════════════════════════════════════════ */

:root {
  /* Brand colors (from BrandBook) */
  --brand: #3CA4CB;
  --brand-dark: #1F7B9C;
  --brand-light: #66C0CC;
  --brand-pale: #e8f6fa;
  --accent: #DA5A5B;
  --gray: #BEBFBC;

  /* Semantic tokens — Light theme */
  --text: #1a1a2e;
  --text-muted: #6b7280;
  --bg: #ffffff;
  --bg-alt: #f8fafb;
  --border: rgba(60, 164, 203, 0.12);

  /* Glassmorphism */
  --glass: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(60, 164, 203, 0.15);
  --glass-shadow: 0 8px 32px rgba(60, 164, 203, 0.08);

  /* Spacing scale (8px base) */
  --space-xs: 0.5rem;
  --space-s: 1rem;
  --space-m: 2rem;
  --space-l: 4rem;
  --space-xl: 8rem;

  /* Section padding */
  --section-py: clamp(2.5rem, 6vh, 5rem);
  --section-px: clamp(1.25rem, 4vw, 4rem);
}

/* ═══ Dark theme ═══ */
:root[data-theme="dark"] {
  --brand-dark: #66C0CC;
  --brand-light: #3CA4CB;
  --brand-pale: #1e3a4a;

  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --bg: #0f172a;
  --bg-alt: #1e293b;
  --border: rgba(60, 164, 203, 0.2);

  --glass: rgba(30, 41, 59, 0.7);
  --glass-border: rgba(60, 164, 203, 0.25);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* ═══ System dark preference ═══ */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]):not([data-theme="accessible"]) {
    --brand-dark: #66C0CC;
    --brand-light: #3CA4CB;
    --brand-pale: #1e3a4a;

    --text: #f1f5f9;
    --text-muted: #94a3b8;
    --bg: #0f172a;
    --bg-alt: #1e293b;
    --border: rgba(60, 164, 203, 0.2);

    --glass: rgba(30, 41, 59, 0.7);
    --glass-border: rgba(60, 164, 203, 0.25);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
}

/* ═══ Reset ═══ */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

/* ═══ Base typography ═══ */
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 400;
  font-size: clamp(0.9375rem, 0.875rem + 0.25vw, 1.0625rem);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.3s, color 0.3s;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text);
}

a {
  color: var(--brand);
  text-decoration: none;
  transition: color 0.25s ease;
}
a:hover {
  color: var(--brand-dark);
}

img {
  max-width: 100%;
  display: block;
}

/* ═══ Glass card ═══ */
.glass-card {
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid var(--glass-border);
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--glass-shadow);
  transition: all 0.25s ease;
}
.glass-card:hover {
  border-color: var(--brand);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(60, 164, 203, 0.15);
}

/* ═══ CTA button ═══ */
.btn-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}
.btn-cta:hover {
  background: #c44e4f;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(218, 90, 91, 0.3);
}

/* ═══ Brand button ═══ */
.btn-brand {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--brand);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}
.btn-brand:hover {
  background: var(--brand-dark);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(60, 164, 203, 0.3);
}

/* ═══ Outline button ═══ */
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background: transparent;
  color: var(--brand);
  border: 2px solid var(--brand);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
}
.btn-outline:hover {
  background: var(--brand);
  color: #ffffff;
}

/* ═══ Reveal animation ═══ */
.reveal {
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-d1 { transition-delay: 0.08s; }
.reveal-d2 { transition-delay: 0.16s; }
.reveal-d3 { transition-delay: 0.24s; }

/* ═══ Section divider ═══ */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* ═══ Reduced motion ═══ */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  html { scroll-behavior: auto; }
}
```

**Step 2: Create accessibility.css**

Create `src/styles/accessibility.css`:
```css
/* ═══════════════════════════════════════════════
   ACCESSIBILITY MODE — "Версия для слабовидящих"
   Legal requirement for medical websites in Russia
   Overrides both light and dark themes
   ═══════════════════════════════════════════════ */

:root[data-theme="accessible"] {
  --text: #000000;
  --text-muted: #333333;
  --bg: #ffffff;
  --bg-alt: #f0f0f0;
  --brand: #005a8c;
  --brand-dark: #003d5c;
  --brand-light: #005a8c;
  --brand-pale: #e0f0ff;
  --accent: #cc0000;
  --border: #000000;
  --glass: rgba(255, 255, 255, 1);
  --glass-border: #000000;
  --glass-shadow: none;
}

:root[data-theme="accessible"] body {
  font-size: 1.25rem;
  line-height: 1.8;
  letter-spacing: 0.02em;
}

:root[data-theme="accessible"] h1,
:root[data-theme="accessible"] h2,
:root[data-theme="accessible"] h3 {
  letter-spacing: 0;
}

:root[data-theme="accessible"] .glass-card {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--bg);
  border: 2px solid #000000;
  box-shadow: none;
}

:root[data-theme="accessible"] .glass-card:hover {
  transform: none;
  box-shadow: none;
}

:root[data-theme="accessible"] .reveal {
  opacity: 1;
  transform: none;
  transition: none;
}

:root[data-theme="accessible"] * {
  animation: none !important;
  transition-duration: 0s !important;
}

/* Focus indicators — always visible in accessible mode */
:root[data-theme="accessible"] a:focus,
:root[data-theme="accessible"] button:focus,
:root[data-theme="accessible"] input:focus,
:root[data-theme="accessible"] select:focus,
:root[data-theme="accessible"] textarea:focus {
  outline: 3px solid #000000;
  outline-offset: 2px;
}
```

**Step 3: Configure Tailwind**

Modify `tailwind.config.mjs`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3CA4CB',
          dark: '#1F7B9C',
          light: '#66C0CC',
          pale: '#e8f6fa',
        },
        accent: {
          DEFAULT: '#DA5A5B',
          dark: '#c44e4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderRadius: {
        glass: '16px',
      },
    },
  },
  plugins: [],
};
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 5: Commit**

```bash
git add src/styles/ tailwind.config.mjs
git commit -m "feat: add Glass Medical Tech design system with dark mode and accessibility"
```

---

### Task 4: Clinic Data Files

**Files:**
- Create: `src/data/clinic.json`
- Create: `src/data/navigation.ts`

**Step 1: Create clinic.json**

All data from Phase 1 data collection and Google Sheets:

```json
{
  "name": "Семейная стоматология «Престиж»",
  "legalName": "ООО «ВИД»",
  "inn": "7445042270",
  "ogrn": "1087445004107",
  "license": {
    "number": "Л041-01024-74/00332049",
    "date": "2019-06-07",
    "authority": "Минздрав Челябинской области",
    "status": "active"
  },
  "address": {
    "full": "455048, Челябинская область, г. Магнитогорск, просп. Ленина, 131, корп. 1, пом. 5, 6",
    "city": "Магнитогорск",
    "street": "просп. Ленина, 131, корп. 1",
    "district": "Орджоникидзевский район",
    "postalCode": "455048",
    "region": "Челябинская область",
    "country": "RU"
  },
  "geo": {
    "latitude": 53.3695096,
    "longitude": 58.9922979
  },
  "phone": "+7 (3519) 51-05-00",
  "phoneRaw": "+73519510500",
  "whatsapp": "+7 967 868 01 01",
  "whatsappRaw": "+79678680101",
  "email": "prestig.vid@mail.ru",
  "hours": {
    "weekdays": "Пн–Пт 9:00–20:00",
    "weekends": "Сб–Вс 9:00–15:00",
    "schema": [
      { "days": ["Mo", "Tu", "We", "Th", "Fr"], "opens": "09:00", "closes": "20:00" },
      { "days": ["Sa", "Su"], "opens": "09:00", "closes": "15:00" }
    ]
  },
  "slogan": "Ваша улыбка — наш престиж",
  "socials": {
    "instagram": "https://www.instagram.com/prestige_mgn/",
    "vk": "https://vk.com/prestige_mgn",
    "ok": "https://ok.ru/group/68846077870137"
  },
  "analytics": {
    "yandexMetrika": "88421113"
  }
}
```

**Step 2: Create navigation.ts**

```typescript
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Услуги',
    href: '/uslugi/',
    children: [
      { label: 'Терапия', href: '/uslugi/terapiya/' },
      { label: 'Имплантация', href: '/uslugi/implantaciya/' },
      { label: 'Протезирование', href: '/uslugi/protezirovanie/' },
      { label: 'Ортодонтия', href: '/uslugi/ortodontiya/' },
      { label: 'Гигиена и отбеливание', href: '/uslugi/gigiena-i-otbelivanie/' },
      { label: 'Хирургия', href: '/uslugi/hirurgiya/' },
      { label: 'Детская стоматология', href: '/uslugi/detskaya-stomatologiya/' },
      { label: 'Диагностика', href: '/uslugi/diagnostika/' },
      { label: 'Пародонтология', href: '/uslugi/parodontologiya/' },
    ],
  },
  { label: 'Врачи', href: '/vrachi/' },
  { label: 'Цены', href: '/ceny/' },
  { label: 'О клинике', href: '/o-klinike/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Контакты', href: '/kontakty/' },
];

export const footerNav = {
  services: mainNav[0].children!,
  info: [
    { label: 'О клинике', href: '/o-klinike/' },
    { label: 'Врачи', href: '/vrachi/' },
    { label: 'Лицензии', href: '/licenzii/' },
    { label: 'Отзывы', href: '/otzyvy/' },
    { label: 'Блог', href: '/blog/' },
  ],
  legal: [
    { label: 'Политика конфиденциальности', href: '/privacy/' },
  ],
};
```

**Step 3: Commit**

```bash
git add src/data/
git commit -m "feat: add clinic data and navigation config"
```

---

### Task 5: Content Collections Schema

**Files:**
- Create: `src/content.config.ts`
- Create: `src/content/doctors/_example.md` (placeholder)
- Create: `src/content/services/_example.md` (placeholder)
- Create: `src/content/blog/_example.md` (placeholder)

**Step 1: Create content.config.ts**

```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const doctors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/doctors' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    specialty: z.string(),
    experience: z.string().optional(),
    photo: z.string().optional(),
    shortDescription: z.string(),
    education: z.string().optional(),
    certificates: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    geoTitle: z.string(),
    description: z.string(),
    priceFrom: z.number().optional(),
    priceTo: z.number().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().default('general'),
    tags: z.array(z.string()).default([]),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { doctors, services, blog };
```

**Step 2: Create placeholder content files**

Create `src/content/doctors/_example.md`:
```markdown
---
name: "Доценко Алексей Геннадьевич"
slug: "docenko-ag"
specialty: "Стоматолог-терапевт, зам. главного врача"
experience: "9 лет"
shortDescription: "Зам. главного врача, стажировка в Израиле"
order: 2
---

Полное описание врача будет добавлено в Phase 3.
```

Create `src/content/services/_example.md`:
```markdown
---
title: "Имплантация зубов"
slug: "implantaciya"
category: "Хирургия"
geoTitle: "Имплантация зубов в Магнитогорске — Стоматология Престиж"
description: "Имплантация зубов в Магнитогорске. Современные импортные импланты, AI-диагностика, гарантия."
priceFrom: 25000
faq:
  - question: "Сколько стоит имплант зуба в Магнитогорске?"
    answer: "Стоимость имплантации в стоматологии Престиж начинается от 25 000 рублей."
  - question: "Больно ли ставить имплант?"
    answer: "Имплантация проводится под местной анестезией, процедура безболезненна."
order: 2
---

Полное описание услуги будет добавлено в Phase 3.
```

Create `src/content/blog/_example.md`:
```markdown
---
title: "Как работает AI-диагностика Diagnocat в стоматологии"
description: "Рассказываем, как AI анализирует рентгеновские снимки и помогает врачам находить проблемы точнее."
date: 2026-03-15
author: "docenko-ag"
category: "technology"
tags: ["AI", "диагностика", "КЛКТ"]
faq:
  - question: "Что такое Diagnocat?"
    answer: "Diagnocat — это AI-система для анализа рентгеновских снимков КЛКТ."
draft: true
---

Статья будет написана в Phase 4.
```

**Step 3: Verify build with collections**

Run: `npm run build`
Expected: Build succeeds, collections detected.

**Step 4: Commit**

```bash
git add src/content.config.ts src/content/
git commit -m "feat: add content collections for doctors, services, and blog"
```

---

### Task 6: Layout — BaseLayout with Schema Markup

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/SchemaMarkup.astro`

**Step 1: Create SchemaMarkup.astro**

This component auto-generates Dentist + MedicalBusiness JSON-LD from `clinic.json`:

```astro
---
import clinic from '../data/clinic.json';

interface Props {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  breadcrumbs?: { name: string; url: string }[];
}

const { pageTitle, pageDescription, pageUrl, breadcrumbs } = Astro.props;

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness"],
  "@id": `${clinic.socials.vk}#organization`,
  "name": clinic.name,
  "legalName": clinic.legalName,
  "url": "https://prestige-dents.ru",
  "logo": "https://prestige-dents.ru/logo.svg",
  "image": "https://prestige-dents.ru/og-image.jpg",
  "description": `${clinic.name} — ${clinic.slogan}. Современная стоматология в ${clinic.address.city}.`,
  "telephone": clinic.phoneRaw,
  "email": clinic.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": clinic.address.street,
    "addressLocality": clinic.address.city,
    "addressRegion": clinic.address.region,
    "postalCode": clinic.address.postalCode,
    "addressCountry": clinic.address.country,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": clinic.geo.latitude,
    "longitude": clinic.geo.longitude,
  },
  "openingHoursSpecification": clinic.hours.schema.map(h => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": h.days,
    "opens": h.opens,
    "closes": h.closes,
  })),
  "medicalSpecialty": [
    "Orthodontics",
    "PediatricDentistry",
    "Prosthodontics",
    "Endodontics",
    "Periodontics",
    "OralSurgery",
  ],
  "sameAs": Object.values(clinic.socials),
  "priceRange": "₽₽",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": clinic.name,
  "url": "https://prestige-dents.ru",
  "inLanguage": "ru",
};

const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": item.name,
    "item": item.url,
  })),
} : null;
---

<script type="application/ld+json" set:html={JSON.stringify(dentistSchema)} />
<script type="application/ld+json" set:html={JSON.stringify(websiteSchema)} />
{breadcrumbSchema && (
  <script type="application/ld+json" set:html={JSON.stringify(breadcrumbSchema)} />
)}
```

**Step 2: Create BaseLayout.astro**

```astro
---
import '../styles/global.css';
import '../styles/accessibility.css';
import Nav from '../components/Nav.astro';
import Footer from '../components/Footer.astro';
import SchemaMarkup from '../components/SchemaMarkup.astro';
import clinic from '../data/clinic.json';

interface Props {
  title?: string;
  description?: string;
  breadcrumbs?: { name: string; url: string }[];
  noIndex?: boolean;
}

const {
  title = `${clinic.name} — ${clinic.slogan}`,
  description = `${clinic.name} в ${clinic.address.city}. Современная стоматология с AI-диагностикой для всей семьи.`,
  breadcrumbs,
  noIndex = false,
} = Astro.props;

const canonicalUrl = new URL(Astro.url.pathname, Astro.site);
---

<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    {noIndex && <meta name="robots" content="noindex, nofollow" />}
    <link rel="canonical" href={canonicalUrl} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="sitemap" href="/sitemap.xml" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:site_name" content={clinic.name} />

    <title>{title}</title>
    <slot name="head" />

    <!-- Theme initialization (inline, no FOUC) -->
    <script is:inline>
      (function() {
        var saved = localStorage.getItem('prestige-theme');
        if (saved) {
          document.documentElement.setAttribute('data-theme', saved);
        }
      })();
    </script>

    <SchemaMarkup
      pageTitle={title}
      pageDescription={description}
      pageUrl={canonicalUrl.toString()}
      breadcrumbs={breadcrumbs}
    />

    <!-- Yandex.Metrika -->
    <script is:inline>
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=88421113', 'ym');
      ym(88421113, 'init', {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/88421113" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  </head>
  <body class="min-h-screen flex flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-2 focus:bg-brand focus:text-white focus:rounded">
      Перейти к содержанию
    </a>
    <Nav />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <Footer />

    <!-- Reveal animation observer -->
    <script is:inline>
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
          document.documentElement.getAttribute('data-theme') !== 'accessible') {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
      } else {
        document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('visible'); });
      }
    </script>
  </body>
</html>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds (Nav and Footer don't exist yet — create stubs first or expect warnings).

Note: Create stub Nav.astro and Footer.astro (Task 7) before testing.

**Step 4: Commit**

```bash
git add src/layouts/ src/components/SchemaMarkup.astro
git commit -m "feat: add BaseLayout with schema markup, analytics, theme init"
```

---

### Task 7: Header (Nav) Component

**Files:**
- Create: `src/components/Nav.astro`
- Create: `src/components/ThemeToggle.astro`
- Create: `src/components/AccessibilityToggle.astro`

**Step 1: Create ThemeToggle.astro**

```astro
---
---
<button
  id="theme-toggle"
  aria-label="Переключить тему"
  class="p-2 rounded-lg hover:bg-brand-pale transition-colors"
>
  <svg class="sun-icon w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
  <svg class="moon-icon w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
</button>

<script is:inline>
  (function() {
    var btn = document.getElementById('theme-toggle');
    var sun = btn.querySelector('.sun-icon');
    var moon = btn.querySelector('.moon-icon');

    function update() {
      var theme = document.documentElement.getAttribute('data-theme');
      var isDark = theme === 'dark' ||
        (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      sun.classList.toggle('hidden', !isDark);
      moon.classList.toggle('hidden', isDark);
    }

    btn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      if (current === 'accessible') return; // don't override accessible mode
      var isDark = current === 'dark' ||
        (!current && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('prestige-theme', next);
      update();
    });

    update();
  })();
</script>
```

**Step 2: Create AccessibilityToggle.astro**

```astro
---
---
<button
  id="accessibility-toggle"
  aria-label="Версия для слабовидящих"
  class="text-xs font-medium px-3 py-1.5 rounded-lg border border-current hover:bg-brand-pale transition-colors whitespace-nowrap"
>
  <svg class="inline w-4 h-4 mr-1 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
  <span class="accessibility-label">Для слабовидящих</span>
</button>

<script is:inline>
  (function() {
    var btn = document.getElementById('accessibility-toggle');
    var label = btn.querySelector('.accessibility-label');

    function update() {
      var isAccessible = document.documentElement.getAttribute('data-theme') === 'accessible';
      label.textContent = isAccessible ? 'Обычная версия' : 'Для слабовидящих';
    }

    btn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      if (current === 'accessible') {
        var prev = localStorage.getItem('prestige-theme-before-accessible') || '';
        document.documentElement.setAttribute('data-theme', prev);
        localStorage.setItem('prestige-theme', prev);
        localStorage.removeItem('prestige-theme-before-accessible');
      } else {
        localStorage.setItem('prestige-theme-before-accessible', current || '');
        document.documentElement.setAttribute('data-theme', 'accessible');
        localStorage.setItem('prestige-theme', 'accessible');
      }
      update();
    });

    update();
  })();
</script>
```

**Step 3: Create Nav.astro**

```astro
---
import { mainNav } from '../data/navigation';
import ThemeToggle from './ThemeToggle.astro';
import AccessibilityToggle from './AccessibilityToggle.astro';
import clinic from '../data/clinic.json';

const currentPath = Astro.url.pathname;
---

<header class="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
  <!-- Top bar: accessibility + theme -->
  <div class="hidden lg:flex justify-end items-center gap-3 max-w-[1280px] mx-auto px-[var(--section-px)] py-1">
    <AccessibilityToggle />
    <ThemeToggle />
  </div>

  <!-- Main nav -->
  <nav class="max-w-[1280px] mx-auto px-[var(--section-px)] py-3 flex items-center justify-between gap-4" aria-label="Основная навигация">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2 shrink-0" aria-label="Главная">
      <img src="/logo.svg" alt="Престиж" class="h-8 w-auto" />
    </a>

    <!-- Desktop menu -->
    <ul class="hidden lg:flex items-center gap-6 text-sm font-medium">
      {mainNav.map(item => (
        <li class="relative group">
          <a
            href={item.href}
            class:list={[
              'py-2 transition-colors hover:text-[var(--brand)]',
              currentPath.startsWith(item.href) ? 'text-[var(--brand)]' : 'text-[var(--text)]',
            ]}
          >
            {item.label}
            {item.children && (
              <svg class="inline w-3 h-3 ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </a>
          {item.children && (
            <ul class="absolute top-full left-0 mt-1 py-2 min-w-[220px] rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {item.children.map(child => (
                <li>
                  <a
                    href={child.href}
                    class:list={[
                      'block px-4 py-2 text-sm hover:bg-[var(--brand-pale)] transition-colors',
                      currentPath === child.href ? 'text-[var(--brand)] font-semibold' : 'text-[var(--text)]',
                    ]}
                  >
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>

    <!-- Right side: phone + CTA -->
    <div class="hidden lg:flex items-center gap-4">
      <a href={`tel:${clinic.phoneRaw}`} class="text-sm font-semibold text-[var(--text)] hover:text-[var(--brand)] transition-colors">
        {clinic.phone}
      </a>
      <a href="/kontakty/#zapis" class="btn-cta text-sm">Записаться</a>
    </div>

    <!-- Mobile: phone + burger -->
    <div class="flex lg:hidden items-center gap-3">
      <a href={`tel:${clinic.phoneRaw}`} class="p-2" aria-label="Позвонить">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <button id="burger-btn" class="p-2" aria-label="Открыть меню" aria-expanded="false">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path class="burger-open" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path class="burger-close hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <div id="mobile-menu" class="lg:hidden hidden border-t border-[var(--border)] bg-[var(--bg)]">
    <div class="px-[var(--section-px)] py-4 space-y-2">
      {mainNav.map(item => (
        <div>
          <a href={item.href} class="block py-2 text-base font-medium text-[var(--text)]">{item.label}</a>
          {item.children && (
            <div class="pl-4 space-y-1">
              {item.children.map(child => (
                <a href={child.href} class="block py-1.5 text-sm text-[var(--text-muted)]">{child.label}</a>
              ))}
            </div>
          )}
        </div>
      ))}
      <div class="pt-4 flex items-center gap-3">
        <AccessibilityToggle />
        <ThemeToggle />
      </div>
      <a href="/kontakty/#zapis" class="btn-cta w-full text-center mt-4">Записаться</a>
    </div>
  </div>
</header>

<!-- Mobile floating buttons -->
<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 lg:hidden">
  <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noopener" aria-label="WhatsApp" class="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
  <a href={`tel:${clinic.phoneRaw}`} aria-label="Позвонить" class="w-12 h-12 rounded-full bg-[var(--brand)] text-white flex items-center justify-center shadow-lg">
    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </a>
</div>

<script is:inline>
  (function() {
    var btn = document.getElementById('burger-btn');
    var menu = document.getElementById('mobile-menu');
    var openIcon = btn.querySelector('.burger-open');
    var closeIcon = btn.querySelector('.burger-close');

    btn.addEventListener('click', function() {
      var isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  })();
</script>
```

**Step 4: Commit**

```bash
git add src/components/Nav.astro src/components/ThemeToggle.astro src/components/AccessibilityToggle.astro
git commit -m "feat: add Nav with dropdown, mobile menu, theme and accessibility toggles"
```

---

### Task 8: Footer Component

**Files:**
- Create: `src/components/Footer.astro`

**Step 1: Create Footer.astro**

```astro
---
import { footerNav } from '../data/navigation';
import clinic from '../data/clinic.json';
---

<footer class="bg-[var(--bg-alt)] border-t border-[var(--border)] mt-auto">
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)] py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Logo + contacts -->
      <div class="space-y-4">
        <a href="/" class="inline-block">
          <img src="/logo.svg" alt="Престиж" class="h-8 w-auto" />
        </a>
        <p class="text-sm text-[var(--text-muted)]">{clinic.slogan}</p>
        <div class="space-y-2 text-sm">
          <a href={`tel:${clinic.phoneRaw}`} class="block font-semibold text-[var(--text)] hover:text-[var(--brand)]">{clinic.phone}</a>
          <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noopener" class="block text-[var(--text-muted)] hover:text-[var(--brand)]">WhatsApp: {clinic.whatsapp}</a>
          <a href={`mailto:${clinic.email}`} class="block text-[var(--text-muted)] hover:text-[var(--brand)]">{clinic.email}</a>
        </div>
        <div class="text-sm text-[var(--text-muted)]">
          <p>{clinic.hours.weekdays}</p>
          <p>{clinic.hours.weekends}</p>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h3 class="font-semibold text-sm text-[var(--text)] mb-4">Услуги</h3>
        <ul class="space-y-2">
          {footerNav.services.map(item => (
            <li><a href={item.href} class="text-sm text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors">{item.label}</a></li>
          ))}
        </ul>
      </div>

      <!-- Info -->
      <div>
        <h3 class="font-semibold text-sm text-[var(--text)] mb-4">Информация</h3>
        <ul class="space-y-2">
          {footerNav.info.map(item => (
            <li><a href={item.href} class="text-sm text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors">{item.label}</a></li>
          ))}
        </ul>
      </div>

      <!-- Address + socials -->
      <div class="space-y-4">
        <h3 class="font-semibold text-sm text-[var(--text)] mb-4">Адрес</h3>
        <p class="text-sm text-[var(--text-muted)]">{clinic.address.city}, {clinic.address.street}</p>
        <p class="text-sm text-[var(--text-muted)]">{clinic.address.district}</p>

        <!-- Socials -->
        <div class="flex gap-3 pt-2">
          <a href={clinic.socials.vk} target="_blank" rel="noopener" aria-label="ВКонтакте" class="w-9 h-9 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-colors">
            <span class="text-xs font-bold">VK</span>
          </a>
          <a href={clinic.socials.instagram} target="_blank" rel="noopener" aria-label="Instagram" class="w-9 h-9 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-colors">
            <span class="text-xs font-bold">IG</span>
          </a>
          <a href={clinic.socials.ok} target="_blank" rel="noopener" aria-label="Одноклассники" class="w-9 h-9 rounded-full bg-[var(--brand-pale)] flex items-center justify-center text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white transition-colors">
            <span class="text-xs font-bold">OK</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <hr class="divider my-8" />
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
      <div class="space-y-1 text-center md:text-left">
        <p>{clinic.legalName}, ИНН {clinic.inn}, ОГРН {clinic.ogrn}</p>
        <p>Лицензия {clinic.license.number} от {new Date(clinic.license.date).toLocaleDateString('ru-RU')}</p>
      </div>
      <div class="flex gap-4">
        {footerNav.legal.map(item => (
          <a href={item.href} class="hover:text-[var(--brand)] transition-colors">{item.label}</a>
        ))}
      </div>
    </div>

    <!-- Medical disclaimer -->
    <p class="mt-6 text-[10px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
      Информация на сайте не является публичной офертой. Имеются противопоказания, необходима консультация специалиста. Результаты лечения индивидуальны.
    </p>
  </div>
</footer>
```

**Step 2: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: add Footer with NAP, navigation, legal info, medical disclaimer"
```

---

### Task 9: Breadcrumbs Component

**Files:**
- Create: `src/components/Breadcrumbs.astro`

**Step 1: Create Breadcrumbs.astro**

```astro
---
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const { items } = Astro.props;
const allItems = [{ name: 'Главная', url: '/' }, ...items];
---

<nav aria-label="Хлебные крошки" class="text-sm text-[var(--text-muted)] py-3">
  <ol class="flex flex-wrap items-center gap-1">
    {allItems.map((item, i) => (
      <li class="flex items-center">
        {i > 0 && <span class="mx-1">/</span>}
        {i < allItems.length - 1 ? (
          <a href={item.url} class="hover:text-[var(--brand)] transition-colors">{item.name}</a>
        ) : (
          <span class="text-[var(--text)]">{item.name}</span>
        )}
      </li>
    ))}
  </ol>
</nav>
```

**Step 2: Commit**

```bash
git add src/components/Breadcrumbs.astro
git commit -m "feat: add Breadcrumbs component"
```

---

### Task 10: Homepage Placeholder + Logo

**Files:**
- Copy: logo SVG to `public/logo.svg`
- Create: `src/pages/index.astro`

**Step 1: Copy logo**

```bash
cp "/Users/valeria/Downloads/BrandBook/Логотип/SvG/"*.svg public/
ls public/*.svg
```

Pick the horizontal logo variant and rename to `logo.svg`. If multiple SVGs exist, choose the one with text "Престиж".

**Step 2: Create homepage placeholder**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout>
  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">
        {clinic.name}
      </h1>
      <p class="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
        {clinic.slogan}
      </p>
      <div class="flex justify-center gap-4 pt-4">
        <a href="/uslugi/" class="btn-brand">Наши услуги</a>
        <a href="/kontakty/#zapis" class="btn-cta">Записаться</a>
      </div>
    </div>
  </section>

  <!-- Placeholder sections for Phase 3 -->
  <section class="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--bg-alt)]">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-2xl font-bold mb-8">Услуги</h2>
      <p class="text-[var(--text-muted)]">Контент услуг будет добавлен в Phase 3.</p>
    </div>
  </section>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-2xl font-bold mb-8">Наши врачи</h2>
      <p class="text-[var(--text-muted)]">Контент врачей будет добавлен в Phase 3.</p>
    </div>
  </section>
</BaseLayout>
```

**Step 3: Verify dev server**

Run: `npm run dev`
Expected: Site loads at localhost:4321 with header, footer, placeholder content, working theme toggle, working accessibility toggle.

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds, 0 errors.

**Step 5: Commit**

```bash
git add public/ src/pages/index.astro
git commit -m "feat: add homepage placeholder and logo"
```

---

### Task 11: Verify Everything + Push

**Step 1: Full build test**

Run: `npm run build`
Expected: Clean build, 0 warnings about missing pages.

**Step 2: Dev server smoke test**

Run: `npm run dev`

Verify manually:
- [ ] Homepage loads with header + footer
- [ ] Logo visible in header
- [ ] Desktop navigation works (dropdown on hover for Услуги)
- [ ] Mobile burger menu opens/closes
- [ ] Theme toggle switches light/dark
- [ ] Accessibility toggle switches to high contrast
- [ ] Floating WhatsApp + phone buttons visible on mobile
- [ ] Phone number clickable
- [ ] Footer shows NAP, license, legal info
- [ ] Schema markup visible in page source (search for `application/ld+json`)
- [ ] Medical disclaimer in footer

**Step 3: Push to GitHub**

```bash
git push
```

**Step 4: Update context issue**

```bash
gh issue comment 1 --repo valery-om/prestige-dents --body "Phase 2 Foundation — COMPLETE. Astro project with design system, layout, schema markup, dark/light/accessible themes. Ready for Phase 3 pages."
```

---

## Summary

| Task | What | Files |
|---|---|---|
| 1 | Scaffold Astro + Tailwind + Preact | package.json, astro.config.ts |
| 2 | Self-host Inter font | public/fonts/, fonts.css |
| 3 | Design system (tokens, glass, buttons, a11y) | global.css, accessibility.css, tailwind.config |
| 4 | Clinic data + navigation config | clinic.json, navigation.ts |
| 5 | Content collections (doctors, services, blog) | content.config.ts, example content |
| 6 | BaseLayout + Schema markup | BaseLayout.astro, SchemaMarkup.astro |
| 7 | Header (Nav, ThemeToggle, AccessibilityToggle) | Nav.astro, ThemeToggle.astro, AccessibilityToggle.astro |
| 8 | Footer | Footer.astro |
| 9 | Breadcrumbs | Breadcrumbs.astro |
| 10 | Homepage placeholder + logo | index.astro, logo.svg |
| 11 | Verify + push | — |

Total: ~11 tasks, each 5-15 minutes. Estimated: 1-2 sessions.
