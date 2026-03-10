# Prestige Dents — Site Redesign Plan

**Date:** 2026-03-10
**Status:** Phase 1 COMPLETE — ready for Phase 2
**Current site:** prestige-dents.ru (Tilda)
**New stack:** Astro + Tailwind + Vercel
**Repo:** valery-om/prestige-dents

## Clinic Details (collected)

| Field | Value |
|-------|-------|
| Name | Семейная стоматология «Престиж» |
| Legal entity | ООО «ВИД», ИНН 7445042270, ОГРН 1087445004107 |
| License | Л041-01024-74/00332049 от 07.06.2019, Минздрав Челябинской области (действует) |
| Address | 455048, Челябинская область, г. Магнитогорск, просп. Ленина, 131, корп. 1, пом. 5, 6 |
| District | Орджоникидзевский район |
| Phone | +7 (3519) 51-05-00 |
| WhatsApp | +7 967 868 01 01 |
| Email | prestig.vid@mail.ru |
| Hours (weekdays) | Пн–Пт 9:00–20:00 |
| Hours (weekends) | Сб, Вс 9:00–15:00 |
| Coordinates | 53.3695096, 58.9922979 |
| Slogan | Ваша улыбка — наш престиж |
| Primary color | #3ca4cb |
| Font | Inter |

### Licensed activities
- Ортодонтия
- Стоматология детская
- Стоматология общей практики
- Стоматология ортопедическая
- Стоматология терапевтическая
- Стоматология хирургическая
- Рентгенология

### Social media
| Platform | Link |
|----------|------|
| Instagram | https://www.instagram.com/prestige_mgn/ |
| VK | https://vk.com/prestige_mgn |
| OK | https://ok.ru/group/68846077870137 |

### Aggregators (12 platforms)
| Platform | Status |
|----------|--------|
| Яндекс Карты | ✅ Active |
| Google Maps / GBP | ⬜ Card exists, access requested |
| 2GIS | ✅ Active |
| Prodoctorov | ✅ Active |
| Zoon | ✅ Active |
| Flamp | ✅ Active |
| Напоправку.ru | ✅ Active |
| 32top.ru | ✅ Active |
| Doctu.ru | ✅ Active |
| Yell.ru | ✅ Active |
| Kleos.ru | ✅ Active |
| Medicina99.ru | ✅ Active |
| Like.doctor | ✅ Active |
| stom-firms.ru | ❌ Not in Magnitogorsk |

### AI в клинике
- **DianApp** (dianapp.online) — AI-анализ гигиены полости рта
- **Diagnocat** (diagnocat.ru) — AI-анализ рентгеновских снимков (КЛКТ)

### Equipment (19 items, premium import)
| # | Equipment | Manufacturer | Country |
|---|-----------|-------------|---------|
| 1 | КТ Point 3D | Vatech/POINTNIX (уточнить) | Южная Корея |
| 2 | Рентген интраоральный | Dentsply Sirona | Германия |
| 3 | Автоклав | MEGAL | Германия |
| 4 | Дефибриллятор | Philips | Япония |
| 5 | Микроскоп Zumax 2050 | Zumax | Китай |
| 6-8 | Лампы полимеризационные | Kerr (США), Bien Air (Китай), Woodpecker (Китай) | |
| 9 | Компрессор | EKOM | Словакия |
| 10 | УФ-камера | Ferroplast Medical | Россия |
| 11 | Автоклав | MEGAL | Германия |
| 12 | Assistina | W&H | Австрия |
| 13 | Стоматологические установки | Sirona Intego | Германия |
| 14 | Наконечники турбинные | W&H | Австрия |
| 15 | Эндомотор | Dentsply Maillefer | Швейцария |
| 16 | Эндомотор | Geosoft | Россия |
| 17 | Щипцы | Hu-Friedy | США |
| 18 | Упаковочное устройство | MEGAL | Германия |
| 19 | Апекслокатор | Forum Engineering | Германия |

**Уточнить модели:** FotoSan (CMS Dental), Лазер Doctor Smile, 3D сканер 3Shape (TRIOS?), Air Flow (EMS)

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
- [x] Yandex Business — profile exists
- [ ] Google Business Profile — card exists, access requested, awaiting verification
- [x] 2GIS — profile exists
- [x] prodoctorov.ru — profile exists
- [x] zoon.ru — profile exists
- [x] 8 more aggregators confirmed (Flamp, Напоправку, 32top, Doctu, Yell, Kleos, Medicina99, Like.doctor)
- [ ] stom-firms.ru — not available in Magnitogorsk
- [ ] Update site URL on all platforms after launch
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

### 6. Lead magnets (4 guides available)
- "Гайд для мам" — pediatric dentistry page (DESIGNED PDF on Yandex Disk)
- "Гайд для жителей МГН" — general / homepage (DESIGNED PDF on Yandex Disk)
- "Расширенный гайд по имплантации" — implantation page (TEXT ~31K chars + DESIGNED PDF)
- "Гайд по брекетам и элайнерам" — orthodontics page (TEXT ~22K chars + DESIGNED PDF)
- Form: download in exchange for contact info
- All 4 guides already designed for print — can also be used as:
  - Downloadable PDF (lead magnet: contact → guide)
  - Full blog articles with FAQ schema (for AI search indexing)
  - Or both simultaneously (PDF for download + article version on site)

### Assets on Yandex Disk
- Licenses: https://disk.yandex.ru/d/hynIvr45jlkFxQ
- Sanitary certificates (СЭЗ): https://disk.yandex.ru/d/HrB78YUteI1DzA
- Doctor certificates: https://disk.yandex.ru/d/K4MwRhpVkRWUcg
- Logo + brand book: https://disk.yandex.ru/d/8ojOmcPhTlb1rw
- 2 large guides (implantation + orthodontics): https://disk.yandex.ru/d/CVUvupG6dT4NDw

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
| 9 | Осинская Л.А. | Хирург | 4 года | Ready |
| 10 | Дубинина И.В. | Терапевт | 27 лет | Need photo |
| 11 | Доценко Д.О. | Хирург | 8 лет | Ready |
| 12 | Толкачева Е.В. | Ортодонт | 5 лет | Need photo |
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

### Phase 1: Data Collection (Valeria) ✅ COMPLETE
- [x] Clinic info: name, address, phones, email, hours, coordinates, license, legal entity
- [x] Services: 16 services with descriptions and prices
- [x] Doctors: 14 doctors with short + long descriptions from questionnaires
- [x] External profiles: 12 aggregators confirmed, GBP access requested
- [x] Social media: Instagram, VK, OK — links collected
- [x] Assets on Yandex Disk: licenses, certificates, logo, brand book, 4 guides (PDF)
- [x] License verified: Л041-01024-74/00332049, действует
- [ ] Pending: photos for Дубинина И.В. and Толкачева Е.В.
- [ ] Pending: info for Ширяева Н.В. and Крафт Н.Л.
- [ ] Pending: descriptions for Детская стоматология service
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
- **Content source:** 150 existing posts from copywriter (3 years of content)
  - Archive: `1QL0gLrpVW1Ze93GIE3w4N6Y5B3lolICPMZcmAElABAY`
  - 9 categories: Лечение (44), Уход (45), Проф. гигиена (13), Дети (11), О клинике (11), Отбеливание (8), Виниры (7), Имплантация (6), Брекеты (5)
  - Can be rewritten into long-form SEO blog articles with FAQ schema

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

## Data Sources

### Working sheet: `1hIb1akbx75_t5pkmUvx0imbynd7gDiC5AGjc-djCmRg`
- **Общая информация** — clinic details, contacts, license, design, analytics
- **Услуги** — services by category with prices and SEO titles
- **Врачи** — 14 doctors with short + long descriptions
- **Блог** — 10 planned articles with keywords
- **SEO и внешнее** — external SEO tasks, aggregators, analytics
- **План работ** — phased task list with dependencies
- **врачи (анкеты)** — raw questionnaire responses from 13 doctors
- **агрегаторы+соцсети** — links to all external profiles
- **ссылки на диск** — Yandex Disk links (licenses, certificates, logo, guides)
- **Гайды** — full text of implantation + orthodontics guides

### Copywriter archive: `1QL0gLrpVW1Ze93GIE3w4N6Y5B3lolICPMZcmAElABAY`
- 150 posts across 9 categories (3 years of content)
- Source material for blog articles rewrite

### AI-generated content (assistant): `19kNK5ym9aRClxtH6bzthZ_5H6jDQwNMJRBVs_sbOq94`
- Content plan with topics (post'5, post'6) — use as ideas only
- Video-визитки template — use for doctor pages
- Video plan (clinic tour, equipment, process) — use for /o-klinike/
- Texts are AI slop — do NOT use for blog, rewrite from scratch

### Old contractor TZ: `1Y8kXUk1hhLy38B4OSPpGyG-88VP1-Ga9PwiF5Jnoa6E` (read-only)
### Price list: `1-6gTj1q4ENfTsBILc_LuY4SONO4EpI73CnLVbqEMLJ8` (read-only)
