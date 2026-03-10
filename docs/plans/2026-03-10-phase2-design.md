# Phase 2: Foundation — Design Document

**Date:** 2026-03-10
**Status:** APPROVED
**Parent:** `2026-03-10-site-redesign.md` (Phase 1 data)

## 1. Architecture

### Stack
- **Astro 5** — SSG, zero JS by default, islands architecture
- **Tailwind CSS 4** — utility-first, dark mode, responsive
- **TypeScript** — type safety
- **Preact** — lightweight islands (quizzes, forms, calculator)
- **Vercel** — hosting, serverless functions, edge

### Content Collections (Astro)
| Collection | Format | Content |
|---|---|---|
| `doctors` | YAML frontmatter + MD | Name, specialty, experience, photo, slug, descriptions (short + long), certificates |
| `services` | YAML frontmatter + MD | Name, slug, category, prices (from-to), description, FAQ, meta tags, geo-title |
| `blog` | MD with frontmatter | Title, date, author (→ doctor), category, FAQ, description |
| `reviews` | JSON | Name, text, rating, date, service |

### Static Data (config files)
```
src/data/
  clinic.json     — NAP, coordinates, hours, license, socials, aggregators
  equipment.json  — top equipment (for blog articles and /o-klinike/)
  navigation.ts   — menu structure, links
```

### Schema Markup (auto-generated from data)
| Schema | Source | Pages |
|---|---|---|
| Dentist + MedicalBusiness | `clinic.json` | All (in layout) |
| Physician | `doctors/*.md` | `/vrachi/[slug]/` |
| MedicalProcedure + FAQPage | `services/*.md` | `/uslugi/[slug]/` |
| Article + FAQPage | `blog/*.md` | `/blog/[slug]/` |
| BreadcrumbList | Auto from URL | All pages |
| Review + AggregateRating | `reviews` | `/otzyvy/` |
| WebSite + SearchAction | config | Homepage |

## 2. Site Structure

```
/                                    — Home (hero, USP, services, doctors, CTA)
/uslugi/                             — Services hub
  /uslugi/terapiya/                  — Dental therapy (caries, pulpitis)
  /uslugi/implantaciya/              — Implants (hub → subpages later)
  /uslugi/protezirovanie/            — Prosthetics
  /uslugi/ortodontiya/               — Orthodontics (braces + aligners)
  /uslugi/gigiena-i-otbelivanie/     — Cleaning & whitening
  /uslugi/hirurgiya/                 — Surgery
  /uslugi/detskaya-stomatologiya/    — Pediatric
  /uslugi/diagnostika/               — Diagnostics (CT, AI)
  /uslugi/parodontologiya/           — Periodontics
/vrachi/                             — Doctors list
  /vrachi/[slug]/                    — Doctor profile + certificates gallery
/ceny/                               — Price list (HTML tables, not PDF)
/otzyvy/                             — Reviews + ZOON widget
/o-klinike/                          — About (history, values, photos, top equipment mention)
/licenzii/                           — Licenses & certificates (legal requirement)
/blog/                               — Blog index
  /blog/[slug]/                      — Article (FAQ schema, doctor as author)
/kontakty/                           — Contacts + Yandex Map + appointment form
/privacy/                            — Privacy policy
```

**No /aktsii/ page** — clinic has no promotions or discounts (premium positioning).

**Equipment** — NOT a separate page. Top items (CT scanner, Zumax microscope, AI diagnostics) become SEO blog articles. Rest mentioned on `/o-klinike/`.

## 3. Navigation

### Desktop
```
[Logo] Услуги▼ | Врачи | Цены | О клинике | Блог | Контакты  [📞 +7 3519 51-05-00] [Записаться]
```
- Classic horizontal menu, dropdown for Услуги
- Phone number visible, clickable
- CTA button "Записаться" in coral accent color

### Mobile
- Burger menu
- Floating buttons: phone + WhatsApp + "Записаться"
- Sticky header with logo + burger + phone icon

## 4. Design System — "Glass Medical Tech"

### Brand Foundation (from BrandBook)
- **Brand idea:** Современность и осмысленность. "Не человек идёт к стоматологу, а стоматолог идёт к человеку."
- **Values:** Современность → Качество → Открытость → Забота
- **Logo:** Semi-circle smile, rounded corners. Horizontal + vertical variants. Rule: lots of whitespace around logo.
- **Font:** Inter — single font for everything. Tight letter-spacing in headings.
- **Logo misuse:** No color changes, no proportion changes, no shadows/effects, no red, no outline-only.

### Color Tokens

| Token | Light | Dark | Source |
|---|---|---|---|
| `--brand` | `#3CA4CB` | `#3CA4CB` | BrandBook primary |
| `--brand-dark` | `#1F7B9C` | `#66C0CC` | BrandBook secondary |
| `--brand-light` | `#66C0CC` | `#3CA4CB` | BrandBook secondary |
| `--brand-pale` | `#e8f6fa` | `#1e3a4a` | Derived |
| `--accent` | `#DA5A5B` | `#DA5A5B` | BrandBook coral (CTA only) |
| `--gray` | `#BEBFBC` | `#475569` | BrandBook gray |
| `--text` | `#1a1a2e` | `#f1f5f9` | Derived |
| `--text-muted` | `#6b7280` | `#94a3b8` | Derived |
| `--bg` | `#ffffff` | `#0f172a` | Deep navy for dark |
| `--bg-alt` | `#f8fafb` | `#1e293b` | Section alternation |
| `--glass` | `rgba(255,255,255,0.7)` | `rgba(30,41,59,0.7)` | Glassmorphism |
| `--glass-border` | `rgba(60,164,203,0.15)` | `rgba(60,164,203,0.25)` | Glass borders |

### Typography
- **Font:** Inter (variable, self-hosted from BrandBook files)
- **Headings:** Inter 700, tight tracking (`letter-spacing: -0.02em`), tight leading
- **Body:** Inter 400, `1.6` line-height
- **Sizes:** `clamp()` for responsive scaling, mobile-first

### Glassmorphism Elements
- Cards (doctors, services, reviews): `bg-white/70 backdrop-blur-md border border-brand/15 shadow-lg`
- Hero section: mesh gradient (`#3CA4CB` → `#66C0CC` → `#1F7B9C`) + glass overlay
- FAQ accordion: glass panels on expand
- Forms: glass background with soft shadow
- Dark mode: glass effect intensified on dark backgrounds

### Tech Accent Elements
- Subtle mesh gradients on hero and section dividers
- Logo semi-circle shape as decorative element in section backgrounds
- Scroll animations (fade-in-up, respect `prefers-reduced-motion`)
- Coral `#DA5A5B` exclusively for CTA "Записаться" — stands out on blue

### Components (Phase 2 base set)
- `Button` — primary (brand) / accent (coral CTA) / outline / ghost + sizes
- `Card` — glass variant for doctors, services, reviews, blog
- `Section` — alternating bg/bg-alt with optional glass overlay
- `Container` — max-width 1280px, responsive padding
- `Badge` — categories, specializations
- `Breadcrumbs` — auto-generated from URL structure
- `FAQ` — accordion with FAQPage schema injection
- `BeforeAfter` — image comparison slider (web component)
- `QuizStep` — quiz step component (Preact island)
- `AppointmentForm` — name + phone + service (Preact island)
- `ThemeToggle` — light/dark mode switcher
- `AccessibilityToggle` — high contrast mode (legal requirement)

### Dark Mode
- Default: follows `prefers-color-scheme` (system preference)
- Toggle in header (sun/moon icon)
- Saved in `localStorage`
- Light = default for medical site, dark = user preference
- Accessibility mode overrides both themes

### Accessibility Mode ("Версия для слабовидящих")
- Legal requirement for medical websites in Russia
- Toggle button in header
- Switches CSS class on `<html>`
- High contrast, enlarged fonts, no animations, no glassmorphism
- Saved in `localStorage`
- Overrides both light and dark themes

## 5. Interactive Elements (Astro Islands)

All interactive elements use Astro islands — main site stays static (fast + SEO), interactivity loads only where needed.

| Element | Technology | Directive | Phase |
|---|---|---|---|
| Quiz (2-3: implants, braces, pediatric) | Preact | `client:visible` | 3 |
| Before/After slider | Web Component (`<img-comparison-slider>`) | — | 3 |
| Appointment form | Preact | `client:visible` | 3 |
| Simplified implant calculator (4 questions) | Preact | `client:visible` | 3 |
| Yandex Map | JS embed | `client:idle` | 3 |
| ZOON reviews widget | External script | `client:idle` | 3 |
| Theme toggle | Vanilla JS (inline) | — | 2 |
| Accessibility toggle | Vanilla JS (inline) | — | 2 |

### Lead Generation Points
| Touchpoint | User gets | User gives | Location |
|---|---|---|---|
| **Price list** | Open HTML on `/ceny/` | Nothing | Navigation |
| **Quiz** | Personalized estimate + doctor recommendation | Name + phone | Service pages, popup |
| **4 PDF guides** | Useful content (parents, locals, implants, braces) | Name + email/WhatsApp | Relevant pages |
| **Appointment** | Time booking | Name + phone | CTA everywhere |
| **Callback** | Admin call | Phone number | Floating button |

**No gated pricing** — prices are open for trust + SEO indexing.
**No free consultation** — removed by client decision.
**No promotions/discounts** — premium positioning.
**No installment plans** — not offered by clinic.

### Form Backend
All forms → Vercel serverless function → AmoCRM (webhook).

## 6. SEO / AEO Architecture

### Local SEO
- Every service page title: "Услуга в Магнитогорске" (geo-queries)
- Commercial keywords in meta: "цена", "стоимость", "записаться"
- NAP consistency: same name/address/phone in footer + contacts + schema + aggregators
- 2GIS priority (strongest in regional cities like Magnitogorsk)

### AI Search Optimization (AEO)
- FAQ format: question H2 + direct answer in first paragraph
- Doctor as article author (E-E-A-T for medical content)
- `dateModified` + "Последнее обновление" on every page
- Medical disclaimer on every page
- Structured data for AI parsing

### Content Strategy
- 150 copywriter posts (3 years) → rewrite into long-form SEO articles
- Top equipment (CT, microscope, AI) → individual blog articles
- Each article: 1500-2500 words, FAQ schema, internal links to services
- Pipeline: rewrite → ai-slop-detector → fact-checking → seo-aeo-review

## 7. Target Audience (from real analytics)

### Core Segments (clinic data 2024, trend holds in 2026)
| Segment | Share | Key needs |
|---|---|---|
| Семейные женщины 31-50 | 43.6% | Trust, family service, flexible schedule |
| Возрастные пациенты 50+ | 26.4% | Comfort, clear explanations, prosthetics |
| Родители с детьми 0-17 | 17.0% | Painless treatment, child-friendly |
| Деловые мужчины 31-50 | 13.1% | Speed, online booking, aggregators |

### Growth Target
- Attract older, higher-income audience (45+) — prosthetics, implants, aesthetics
- Orthodontics for teenagers — long LTV, teens influence parents' choice of clinic

### Focus Group Personas (6)
1. **Анна, 34** — семейная женщина, ЛПР по здоровью семьи (43.6%)
2. **Олег, 58** — возрастной пациент, протезирование/импланты (26.4%)
3. **Наталья, 42** — мама с детьми, высокий LTV (17.0%)
4. **Игорь, 38** — деловой мужчина, ищет через агрегаторы (13.1%)
5. **Екатерина, 48** — целевой новый сегмент, платёжеспособные 45+
6. **Максим, 15** — подросток-ортодонтия, влияет на решение родителей, длинный LTV

### Patient Retention (LTV trends)
| Year | One-time | Medium (2-5) | Loyal (6+) |
|---|---|---|---|
| 2020 | 44.6% | 43.8% | 11.6% |
| 2024 | 41.3% | 38.5% | 20.2% |

Loyalty growing: 11.6% → 20.2% over 4 years.

### Cancellation Problem
No-show rate grew from 5% (2020) to 33.2% (2024) for one-time patients. Site features (online booking, reminders, WhatsApp confirmation) should help reduce this.

## 8. Skills to Create

| Skill | Purpose | When |
|---|---|---|
| `prestige-focus-group` | 6 personas from real TA data, test pages/content | Phase 2 |
| `dental-schema-builder` | Auto-generate JSON-LD from Content Collections | Phase 2 |
| `local-seo-page-builder` | Template for geo-targeted service pages | Phase 2 |
| `accessibility-checker` | Verify "Версия для слабовидящих" compliance | Phase 2 |
| `legal-compliance-checker` | Check RF medical website laws (quarterly update) | Phase 2 |
| `medical-content-rewriter` | Pipeline: 150 posts → SEO articles | Phase 4 |

## 9. Research References

### Russian dental sites (Yandex leaders)
- **doctorlevin.ru** — #1 traffic, deep service structure, each procedure = page with prices + cases
- **intan.ru** (SPb) — SEO clustering by districts, multi-branch navigation

### Western dental sites (design + speed)
- **Dentologie** — minimalism, large fonts, unique brand identity
- **Grand Street Dental** — calm colors, abstract shapes, "serene professionalism"
- **Beehive Dental** — brand metaphor, transparent pricing, photo tour

### Key Insights Applied
- 89% mobile traffic → mobile-first mandatory
- 2GIS > Google for regional cities (Magnitogorsk)
- Hub-and-spoke service structure → each procedure = SEO page
- AI diagnostics (DianApp + Diagnocat) = unique USP, no competitors in city
- HTML prices (not PDF) → SEO + rich snippets + trust
- Doctor = article author (E-E-A-T for medical)
- Before/After gallery = strongest conversion element
- Quiz conversion 12-30% vs 3-5% for regular forms
