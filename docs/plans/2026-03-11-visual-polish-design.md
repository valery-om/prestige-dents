# Visual Polish Design — prestige-dents

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the structural skeleton into a polished, professional dental clinic website.

**Architecture:** Three stages — photos+icons, component redesign, final pass. All within existing Glass Medical Tech design system.

---

## Stage A: Photos + Icons

### A1: Doctor Photos
- Source: `/Users/valeria/Downloads/Престиж врачи - Настя Ода/`
- 8 photos available (full-size JPGs, 5-10MB each)
- Process: resize to 600×800 (3:4), JPEG quality 80%, save to `public/images/doctors/`
- Mapping:
  - `Антошкин Илья Вячеславович.jpg` → `antoshkin-iv.jpg`
  - `Доценко Анна Георгиевна.jpg` → `docenko-ag.jpg`
  - `Зуевский Максим Константинович.jpg` → `zuevskiy-mk.jpg`
  - `Мухамедьянова Альбина Иштугановна.jpg` → `muhamedyanova-ai.jpg`
  - `Слинкина Римма Ильинична.jpg` → `slinkina-ri.jpg`
  - `Сотникова Марина Анатольевна.jpg` → `sotnikova-ma.jpg`
  - `Толкачева Екатерина Владимировна.jpeg` → `tolkacheva-ev.jpg`
  - `Чирков Дмитрий Сергеевич.jpg` → `chirkov-ds.jpg`
- Update `photo:` field in doctor MD files
- 6 doctors without photos: gradient placeholder with initials (brand→brand-dark, Inter 700 white)

### A2: SVG Icons (inline, currentColor)

**USP cards (homepage):**
- 4.9 → star
- AI → brain/processor
- 14 → people group
- 0 pain → shield/heart

**Service categories (9):**
- Терапия → tooth
- Протезирование → crown
- Имплантация → implant
- Ортодонтия → braces
- Гигиена → sparkle/brush
- Хирургия → scalpel
- Диагностика → x-ray/magnifier
- Пародонтология → gum
- Детская → baby tooth

**Contacts (5):**
- Address → map pin
- Phone → phone
- WhatsApp → message bubble
- Email → envelope
- Hours → clock

**Footer socials:**
- VK, Instagram, OK → proper SVG icons

**Style:** Outline, 24×24, stroke-width 1.5-2, currentColor

---

## Stage B: Components

### B1: Hero sections
- Homepage: decorative gradient blob (brand-pale → transparent) behind hero text
- Inner pages: unified hero — bg-alt, large title, subtitle, decorative brand-color line

### B2: Service cards redesign
- Icon top (40×40, brand color)
- Title
- Short description (1-2 lines, text-muted)
- Price "от X ₽" at bottom
- Hover: icon color → accent

### B3: FAQ accordion
- Custom chevron (▸ → ▾) with rotation animation
- Dividers between questions
- Smooth expand (CSS transition on max-height)

### B4: Price tables
- Wrap each category in glass-card
- Category icon in header
- Zebra striping (alternating rows)
- Price bold, brand color

### B5: Doctor cards on homepage
- Photo 120×120 (was 80×80)
- 4 per row (was 5) for larger cards
- Show experience under specialty

---

## Stage C: Final Pass

### C1: Mobile
- Verify all breakpoints
- Floating WhatsApp/phone — proper bottom offset
- Price tables — horizontal scroll with gradient shadow hint

### C2: Hover & focus
- focus-visible outline (brand, 2px offset) on all interactive elements
- Doctor photo scale(1.05) on hover
- Link underline on hover

### C3: Placeholders
- Initials on gradient circle (brand → brand-dark)
- Inter 700, white text
- Each doctor unique hue rotation

### C4: Details
- Breadcrumbs: "/" → "›" chevron
- Scroll-to-top button (appears on scroll)
- Footer medical disclaimer — larger, visually separated
