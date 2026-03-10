# Prestige Dents — Site Redesign Plan

**Date:** 2026-03-10
**Status:** Planning
**Current site:** prestige-dents.ru (Tilda)
**New stack:** Astro + Tailwind + Vercel
**Repo:** valery-om/prestige-dents

## Goal

Rebuild the dental clinic website from Tilda to a modern Astro stack with full local SEO, blog, and structured data — to maximize organic traffic from search engines and AI systems.

## Why migrate

| Problem (Tilda) | Solution (Astro + Vercel) |
|-----------------|--------------------------|
| Slow load, heavy JS | Static HTML, Lighthouse 95-100 |
| No schema markup | Full LocalBusiness/Dentist/Physician/FAQ schema |
| No blog capability | Markdown blog with SEO optimization |
| Limited SEO control | Full control: meta, sitemap, robots, structured data |
| Tilda subscription cost | Vercel free tier |
| No geotargeted pages | Service pages with "в Магнитогорске" in titles |
| No AI search optimization | FAQ format, structured data, clean HTML |

## Site Structure

```
/                                    — Home (hero, values, services preview, CTA)
/uslugi/                             — Services catalog
/uslugi/terapiya/                    — Dental therapy (caries, pulpitis, periodontitis)
/uslugi/implantaciya/                — Dental implants
/uslugi/protezirovanie/              — Prosthetics (crowns, veneers, dentures)
/uslugi/ortodontiya/                 — Orthodontics (braces, aligners)
/uslugi/gigiena-i-otbelivanie/       — Cleaning & whitening
/uslugi/hirurgiya/                   — Surgery (extraction, gum plastics)
/uslugi/detskaya-stomatologiya/      — Pediatric dentistry
/vrachi/                             — Doctors list
/vrachi/[slug]/                      — Doctor profile (Physician schema)
/ceny/                               — Price list
/otzyvy/                             — Reviews (Review schema + aggregateRating)
/o-klinike/                          — About (values, equipment, license, photos)
/kontakty/                           — Contacts + Yandex Map + appointment form
/blog/                               — Blog index
/blog/[slug]/                        — Blog post (FAQ schema, breadcrumbs)
/aktsii/                             — Promotions (if any)
/privacy/                            — Privacy policy
```

## Schema Markup Plan

| Schema Type | Pages | Data Needed |
|------------|-------|-------------|
| Dentist + LocalBusiness | All (in layout) | NAP, coordinates, hours, license |
| MedicalBusiness | All (in layout) | License number, specializations |
| Physician | /vrachi/[slug]/ | Name, specialty, photo, experience |
| FAQPage | Service pages, blog posts | Q&A pairs |
| Review + AggregateRating | /otzyvy/ | Patient reviews |
| BreadcrumbList | All pages | Auto-generated from URL |
| Article | /blog/[slug]/ | Title, date, author, description |
| Service | /uslugi/[slug]/ | Service name, description, price range |

## Local SEO Strategy (from gorokhov__ checklist)

### 1. Technical Local SEO
- [x] Schema LocalBusiness/Dentist on all pages
- [ ] Core Web Vitals — target 95+ (Astro guarantees this)
- [ ] Yandex Maps + 2GIS integration on /kontakty/
- [ ] NAP consistency (same name/address/phone everywhere)

### 2. On-Page Local SEO
- [ ] Geo-queries in every service page title: "Услуга в Магнитогорске"
- [ ] Commercial intent keywords: "цена", "стоимость", "записаться"
- [ ] Unified contacts in footer + contacts page + schema

### 3. External Local SEO
- [ ] Verify/update Yandex Business profile
- [ ] Create/update Google Business Profile
- [ ] Update 2GIS card
- [ ] Check prodoctorov.ru, zoon.ru, stom-firms.ru profiles
- [ ] Collect and respond to reviews on all platforms

### 4. Local Content (Blog)
- [ ] 10 articles targeting info queries (see Blog sheet in Google Sheets)
- [ ] Each article: 1500-2500 words, FAQ schema, internal links to services
- [ ] Categories: Гайд, Услуга, Детская, FAQ, Ортодонтия, Гигиена

### 5. AI Search Optimization
- [ ] FAQ format: question H2 + direct answer in first paragraph
- [ ] Structured data for AI parsing
- [ ] Clean semantic HTML

### 6. Analytics
- [ ] Yandex Metrika (existing ID: 88421113)
- [ ] Google Analytics (GA4)
- [ ] Yandex Webmaster verification
- [ ] Google Search Console verification

## Requirements from Previous TZ (not in initial plan)

### 1. Accessibility: version for visually impaired (REQUIRED by RF law)
- Toggle button in header "Версия для слабовидящих"
- Switches to high contrast, large fonts, no animations
- Must work on all devices
- **This is a legal requirement for medical websites in Russia**

### 2. Licenses page
- Separate page `/licenzii/` with scanned licenses
- Date of issue, issuing authority, validity period
- Accessible from main navigation

### 3. Doctor certificates/education scans
- Each doctor profile should include scans of training certificates
- Can be displayed as gallery or accordion

### 4. Video content
- Support for embedded video on pages (clinic tour, doctor introductions)
- YouTube/RuTube embeds

### 5. ZOON widget
- Embed ZOON reviews widget for social proof + aggregated rating

### 6. Lead magnets
- "7 ошибок ухода за зубами" — for primary consultation
- "Расширенный гайд по имплантации" — for implantation page
- "Гайд по брекетам и элайнерам" — for orthodontics page
- Form: download in exchange for contact info

### 7. Callback/appointment popups
- Popup "Заказать обратный звонок"
- Sticky "Онлайн-запись" button
- Minimal fields: name + phone

## Updated Site Structure

```
/                                    — Home
/uslugi/                             — Services catalog
/uslugi/terapiya/                    — Dental therapy
/uslugi/implantaciya/                — Implants
/uslugi/protezirovanie/              — Prosthetics
/uslugi/ortodontiya/                 — Orthodontics (braces + aligners)
/uslugi/gigiena-i-otbelivanie/       — Cleaning & whitening
/uslugi/hirurgiya/                   — Surgery
/uslugi/detskaya-stomatologiya/      — Pediatric
/uslugi/diagnostika/                 — CT scan (КЛКТ)
/uslugi/parodontologiya/             — Periodontics (NEW)
/vrachi/                             — Doctors list
/vrachi/[slug]/                      — Doctor profile + certificates gallery
/ceny/                               — Price list
/otzyvy/                             — Reviews + ZOON widget
/o-klinike/                          — About (values, equipment, photos, video)
/licenzii/                           — Licenses (NEW — legal requirement)
/kontakty/                           — Contacts + Yandex Map
/blog/                               — Blog index
/blog/[slug]/                        — Blog post
/aktsii/                             — Promotions
/privacy/                            — Privacy policy
```

## Team (14 doctors found)

| # | Name | Role | Experience | Status |
|---|------|------|-----------|--------|
| 1 | Антошкин И.В. | Стоматолог | 6 лет | Ready |
| 2 | Доценко А.Г. | Терапевт, зам. главврача | 9 лет | Ready |
| 3 | Зуевский М.К. | Ортопед | 23 года | Ready |
| 4 | Мухамедьянова А.И. | Гигиенист | — | Ready |
| 5 | Савинкова М.С. | Зубной врач | 15 лет | Ready (old photo) |
| 6 | Слинкина Р.И. | Терапевт | 32 года | Ready |
| 7 | Сотникова М.А. | Терапевт | 23 года | Ready |
| 8 | Чирков Д.С. | Терапевт | 10 лет | Ready |
| 9 | Телкова В.И. | Ортодонт | 8 лет | Ready |
| 10 | Осинская Л.А. | Хирург | 4 года | Ready |
| 11 | Дубинина И.В. | Терапевт | 27 лет | Need photo |
| 12 | Доценко Д.О. | Хирург | 8 лет | Ready |
| 13 | Ширяева Н.В. | Гигиенист | — | Waiting for info |
| 14 | Крафт Н.Л. | — | — | Waiting for info |

## Services (14 confirmed)

All services have short + long descriptions and pricing from the previous TZ.
See "Услуги" sheet in Google Sheets for full data.
Only "Детская стоматология" needs descriptions filled.

## Design

- **Primary color:** #3ca4cb (blue) — keep from current site
- **Font:** Inter — keep from current site
- **Style:** Clean, modern, medical — trust and professionalism
- **Mobile-first responsive design**
- **Accessibility:** High-contrast mode toggle (legal requirement)

## Phases

### Phase 1: Data Collection (Valeria)
- Fill Google Sheets: clinic info, services, doctors, photos
- Check external profiles (Yandex Business, 2GIS, GBP)
- **Sheet:** https://docs.google.com/spreadsheets/d/1hIb1akbx75_t5pkmUvx0imbynd7gDiC5AGjc-djCmRg

### Phase 2: Foundation
- Astro project setup (Astro + Tailwind + TypeScript)
- Design system (colors, fonts, components)
- Layout (header, footer, navigation)
- Schema markup in layout

### Phase 3: Pages
- Home page
- Service catalog + category pages (7 categories)
- Doctor pages
- About, Prices, Contacts, Reviews, Promotions
- Privacy policy

### Phase 4: Blog
- Content collection setup in Astro
- Write first 3 high-priority articles
- Write remaining 7 articles
- Fact-check all articles

### Phase 5: Forms & Integrations
- Online appointment form (WhatsApp / email / Telegram)
- Price request form
- Yandex Metrika + GA integration

### Phase 6: Deploy & Launch
- Deploy to Vercel (preview at prestige-dents.vercel.app)
- Testing + Lighthouse audit
- Switch DNS prestige-dents.ru → Vercel
- Yandex Webmaster + Google Search Console
- Update links in Yandex Business, 2GIS, GBP
- Deactivate Tilda (only after new site is fully working)

## Data Source

Google Sheets: `1hIb1akbx75_t5pkmUvx0imbynd7gDiC5AGjc-djCmRg`

Sheets:
- **Общая информация** — clinic details, contacts, design, analytics
- **Услуги** — services by category with prices and SEO titles
- **Врачи** — doctors with specializations and photos
- **Блог** — 10 planned articles with keywords
- **SEO и внешнее** — external SEO tasks and analytics
- **План работ** — phased task list with dependencies
