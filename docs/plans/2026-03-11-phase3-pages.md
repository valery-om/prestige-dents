# Phase 3: Pages — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create all content pages for the dental clinic website — services, doctors, prices, about, contacts, reviews, licenses, privacy, and a full homepage — using real clinic data from Google Sheets.

**Architecture:** Content Collections (Astro 5) for doctors and services with typed MD frontmatter. Dynamic routes `[...slug].astro` for service and doctor pages. Static pages for about, contacts, prices, licenses, privacy, reviews. Homepage with real sections (hero, services grid, doctors carousel, CTA). All pages use BaseLayout with breadcrumbs and schema markup.

**Tech Stack:** Astro 5, Tailwind CSS v4, TypeScript, Preact (for future interactive islands)

**Reference project:** `/Users/valeria/valery-site` (same stack, different design)

**Data sources:**
- Google Sheets `1hIb1akbx75_t5pkmUvx0imbynd7gDiC5AGjc-djCmRg` (services, doctors, prices)
- `src/data/clinic.json` (clinic info — already created in Phase 2)
- BrandBook on Yandex Disk (logo — already copied in Phase 2)

---

### Task 1: Service Content Files (9 pages)

**Files:**
- Delete: `src/content/services/_example.md`
- Create: `src/content/services/terapiya.md`
- Create: `src/content/services/protezirovanie.md`
- Create: `src/content/services/implantaciya.md`
- Create: `src/content/services/ortodontiya.md`
- Create: `src/content/services/gigiena-i-otbelivanie.md`
- Create: `src/content/services/hirurgiya.md`
- Create: `src/content/services/detskaya-stomatologiya.md`
- Create: `src/content/services/diagnostika.md`
- Create: `src/content/services/parodontologiya.md`

**Step 1: Delete example file**

```bash
rm src/content/services/_example.md
```

**Step 2: Create service content files**

Each file follows the schema from `src/content.config.ts`. Data from Google Sheets "Услуги" tab.

`src/content/services/terapiya.md`:
```markdown
---
title: "Лечение зубов"
slug: "terapiya"
category: "Терапия"
geoTitle: "Лечение зубов в Магнитогорске — цены, пломбы | Престиж"
description: "Лечение кариеса и пульпита в Магнитогорске. Современные пломбировочные материалы, безболезненная анестезия гелем. Стоматология Престиж."
priceFrom: 1200
faq:
  - question: "Сколько стоит поставить пломбу в Магнитогорске?"
    answer: "Стоимость пломбы в стоматологии Престиж — от 1 200 рублей (стеклоиономерная Vitremer) до 6 400 рублей (фотополимерная реставрация более 1/2 зуба)."
  - question: "Больно ли лечить зубы?"
    answer: "Нет. Мы используем безболезненную анестезию с предварительным нанесением обезболивающего геля — вы не почувствуете даже укол."
  - question: "Какие пломбы ставят в Престиже?"
    answer: "Стеклоиономерные (Vitremer) для временных и небольших работ, фотополимерные — для эстетических реставраций передних и жевательных зубов."
order: 1
---

## Восстановление зуба пломбой

Современные пломбировочные материалы позволяют восстановить форму, цвет и функцию зуба за одно посещение. Мы подбираем материал индивидуально: от надёжных стеклоиономеров до высокоэстетичных фотополимеров.

### Безболезненное лечение

В клинике Престиж мы используем технику безболезненной анестезии: сначала наносим обезболивающий гель на десну, и только затем делаем инъекцию. Вы не почувствуете даже укол.

### Цены на пломбы

| Услуга | Стоимость |
|--------|-----------|
| Пломба Vitremer (до 1/3 зуба) | 1 200 ₽ |
| Пломба Vitremer (до 2/3 зуба) | 1 600 ₽ |
| Фотополимерная реставрация (до 1/3) | от 5 800 ₽ |
| Фотополимерная реставрация (до 1/2) | от 6 100 ₽ |
| Фотополимерная реставрация (более 1/2) | от 6 400 ₽ |

### Наши врачи-терапевты

Лечением зубов в клинике занимаются 7 опытных терапевтов — от молодых специалистов до врачей с 32-летним стажем.
```

`src/content/services/protezirovanie.md`:
```markdown
---
title: "Протезирование зубов"
slug: "protezirovanie"
category: "Протезирование"
geoTitle: "Протезирование зубов в Магнитогорске — коронки, виниры | Престиж"
description: "Протезирование зубов в Магнитогорске: коронки, виниры, съёмные протезы. Металлокерамика, циркониевые, E-max. Стоматология Престиж."
priceFrom: 1100
faq:
  - question: "Сколько стоит коронка на зуб в Магнитогорске?"
    answer: "Временная коронка — 1 100 ₽, металлокерамика — от 9 000 ₽, циркониевая — 19 000 ₽, E-max — 21 500 ₽."
  - question: "Какие протезы лучше — съёмные или несъёмные?"
    answer: "Зависит от клинической ситуации. Несъёмные (коронки, мосты) комфортнее, но при большой потере зубов съёмные протезы — оптимальное решение. Врач-ортопед составит индивидуальный план."
order: 2
---

## Коронки

Коронка возвращает разрушенному зубу форму, прочность и эстетику. Мы используем современные материалы: от надёжной металлокерамики до безметалловых коронок из диоксида циркония и E-max.

| Вид коронки | Стоимость |
|-------------|-----------|
| Временная пластмассовая | 1 100 ₽ |
| Металлокерамика (класс B) | 9 000 ₽ |
| Металлокерамика (класс A) | 12 000 ₽ |
| Диоксид циркония (ZrO₂) | 19 000 ₽ |
| Безметалловая E-max | 21 500 ₽ |

## Съёмные протезы

Восстановление жевательной функции при значительной потере зубов.

| Вид протеза | Стоимость |
|-------------|-----------|
| Частичный (1–3 зуба) | 12 600 ₽ |
| Частичный (4–9 зубов) | 20 000 ₽ |
| Полный (10–14 зубов) | 28 400 ₽ |
| Бюгельный односторонний | 31 500 ₽ |
| Бюгельный двусторонний | 33 600 ₽ |
```

`src/content/services/implantaciya.md`:
```markdown
---
title: "Имплантация зубов"
slug: "implantaciya"
category: "Имплантация"
geoTitle: "Имплантация зубов в Магнитогорске — цены, отзывы | Престиж"
description: "Имплантация зубов в Магнитогорске. Немецкие и швейцарские системы: Any One, Super Line, Nobel, Straumann, Astra Tech. AI-диагностика. Стоматология Престиж."
priceFrom: 36500
faq:
  - question: "Сколько стоит имплант зуба в Магнитогорске?"
    answer: "Имплантация в стоматологии Престиж: системы Any One / Super Line — 36 500 ₽, премиальные Nobel / Straumann / Astra Tech — 63 000 ₽."
  - question: "Больно ли ставить имплант?"
    answer: "Имплантация проводится под местной анестезией и абсолютно безболезненна. После процедуры возможен лёгкий дискомфорт, который снимается обычными обезболивающими."
  - question: "Сколько длится приживление импланта?"
    answer: "В среднем 3–6 месяцев. Всё это время вы носите временную коронку."
order: 3
---

## Имплантация зубов в Магнитогорске

Надёжное восстановление утраченных зубов немецкими и швейцарскими системами. Наш хирург-имплантолог Доценко Д.О. прошёл стажировку в Израиле и специализированное обучение по имплантологии Straumann.

### AI-диагностика перед имплантацией

Перед установкой импланта мы проводим 3D-диагностику на компьютерном томографе и анализируем снимок с помощью AI-системы Diagnocat — это повышает точность планирования.

### Цены на имплантацию

| Система | Стоимость |
|---------|-----------|
| Any One / Super Line | 36 500 ₽ |
| Nobel / Straumann / Astra Tech | 63 000 ₽ |

*Цена включает установку импланта. Коронка на имплант оплачивается отдельно.*
```

`src/content/services/ortodontiya.md`:
```markdown
---
title: "Ортодонтия"
slug: "ortodontiya"
category: "Ортодонтия"
geoTitle: "Ортодонтия в Магнитогорске — брекеты, элайнеры | Престиж"
description: "Исправление прикуса в Магнитогорске: брекеты и прозрачные элайнеры. Лигатурные и безлигатурные системы, каппы SS IQ и Kinder для детей. Стоматология Престиж."
priceFrom: 47000
faq:
  - question: "Сколько стоят брекеты в Магнитогорске?"
    answer: "Лигатурные брекеты (2 челюсти) — 47 000 ₽, безлигатурные — 94 000 ₽."
  - question: "Что лучше — брекеты или элайнеры?"
    answer: "Зависит от клинической ситуации. Элайнеры незаметны и комфортнее, но при сложных случаях брекеты эффективнее. Ортодонт подберёт оптимальный вариант."
  - question: "Есть ли ортодонтия для детей?"
    answer: "Да, у нас есть детские элайнеры Kinder (от 84 000 ₽) и ортодонтическое лечение для подростков."
order: 4
---

## Брекеты

Классический и надёжный метод исправления прикуса. Наш ортодонт Толкачева Е.В. подберёт оптимальную систему.

| Система | Стоимость (2 челюсти) |
|---------|----------------------|
| Лигатурные брекеты | 47 000 ₽ |
| Безлигатурные брекеты | 94 000 ₽ |

## Элайнеры

Прозрачные каппы — незаметная альтернатива брекетам.

| Система | Стоимость |
|---------|-----------|
| SS IQ до 10 шагов | 105 000 ₽ |
| SS IQ до 20 шагов | 157 500 ₽ |
| SS IQ до 36 шагов | 204 500 ₽ |
| Kinder до 7 шагов (детские) | 84 000 ₽ |
```

`src/content/services/gigiena-i-otbelivanie.md`:
```markdown
---
title: "Гигиена и отбеливание"
slug: "gigiena-i-otbelivanie"
category: "Гигиена"
geoTitle: "Чистка и отбеливание зубов в Магнитогорске | Престиж"
description: "Профессиональная чистка зубов в Магнитогорске: Air Flow, ультразвук, реминерализация. Обучение гигиене полости рта. Стоматология Престиж."
priceFrom: 350
faq:
  - question: "Сколько стоит чистка зубов в Магнитогорске?"
    answer: "Профессиональная чистка циркулярными щётками — 4 200 ₽, Air Flow — 5 300 ₽, комплексная (УЗ + Air Flow + реминерализация) — 6 300 ₽."
  - question: "Как часто нужна профессиональная чистка?"
    answer: "Рекомендуем каждые 6 месяцев. Это лучшая профилактика кариеса и заболеваний дёсен."
order: 5
---

## Профессиональная гигиена

Удаление зубного налёта и камня — лучшая профилактика кариеса и заболеваний дёсен.

| Услуга | Стоимость |
|--------|-----------|
| Чистка циркулярными щётками | 4 200 ₽ |
| Чистка Air Flow | 5 300 ₽ |
| Комплексная (УЗ + Air Flow + реминерализация) | 6 300 ₽ |

## Обучение гигиене

Правильный домашний уход — половина здоровья зубов. Гигиенист подберёт щётку, пасту и средства для вас.

| Услуга | Стоимость |
|--------|-----------|
| Подбор средств гигиены | 350 ₽ |
| На пародонтологическом приёме | 1 600 ₽ |
```

`src/content/services/hirurgiya.md`:
```markdown
---
title: "Хирургия"
slug: "hirurgiya"
category: "Хирургия"
geoTitle: "Удаление зубов в Магнитогорске — Стоматология Престиж"
description: "Удаление зубов в Магнитогорске: простое и сложное. Безболезненная анестезия, бережный подход. Стоматология Престиж."
priceFrom: 1000
faq:
  - question: "Сколько стоит удалить зуб в Магнитогорске?"
    answer: "Удаление временного или подвижного зуба — 1 000 ₽, постоянного — 1 700 ₽, сложное удаление — 3 500 ₽."
  - question: "Больно ли удалять зуб?"
    answer: "Нет. Удаление проводится под современной анестезией. Мы используем технику безболезненного обезболивания с гелем."
order: 6
---

## Удаление зубов

Бережное удаление с современной анестезией. Хирурги Доценко Д.О. и Осинская Л.А. проводят удаления любой сложности.

| Услуга | Стоимость |
|--------|-----------|
| Удаление временного зуба | 1 000 ₽ |
| Удаление подвижного зуба | 1 000 ₽ |
| Удаление постоянного зуба | 1 700 ₽ |
| Сложное удаление | 3 500 ₽ |
```

`src/content/services/diagnostika.md`:
```markdown
---
title: "Диагностика"
slug: "diagnostika"
category: "Диагностика"
geoTitle: "Компьютерная томография зубов в Магнитогорске | Престиж"
description: "3D-диагностика зубов (КЛКТ) в Магнитогорске. AI-анализ снимков Diagnocat. Точное планирование лечения. Стоматология Престиж."
priceFrom: 3100
faq:
  - question: "Что такое КЛКТ?"
    answer: "Конусно-лучевая компьютерная томография — 3D-снимок всей челюсти. Позволяет увидеть то, что не видно на обычном рентгене: скрытый кариес, состояние костной ткани, положение корней."
  - question: "Что такое AI-диагностика в стоматологии?"
    answer: "Мы используем AI-систему Diagnocat, которая анализирует КЛКТ-снимки и помогает врачу выявить патологии с высокой точностью. А DianApp оценивает гигиену полости рта по фотографии."
order: 7
---

## Компьютерная томография (КЛКТ)

3D-снимок всей челюсти за 15 секунд. Низкая лучевая нагрузка, максимум информации.

| Услуга | Стоимость |
|--------|-----------|
| КЛКТ (полная, без суставов) | 3 100 ₽ |

## AI-диагностика

Клиника Престиж — одна из немногих в Магнитогорске, где используется искусственный интеллект для диагностики:

- **Diagnocat** — анализирует КЛКТ-снимки и помогает врачу выявить скрытые патологии
- **DianApp** — оценивает состояние гигиены полости рта по фотографии
```

`src/content/services/parodontologiya.md`:
```markdown
---
title: "Пародонтология"
slug: "parodontologiya"
category: "Пародонтология"
geoTitle: "Пародонтолог в Магнитогорске — лечение дёсен | Престиж"
description: "Лечение дёсен в Магнитогорске: диагностика и терапия пародонтита, гингивита. Приём пародонтолога. Стоматология Престиж."
priceFrom: 1500
faq:
  - question: "Когда нужно обращаться к пародонтологу?"
    answer: "Если дёсны кровоточат при чистке зубов, есть неприятный запах изо рта, дёсны покраснели или отошли от зуба — запишитесь к пародонтологу."
  - question: "Сколько стоит приём пародонтолога в Магнитогорске?"
    answer: "Первичный приём пародонтолога в стоматологии Престиж — 1 500 рублей."
order: 8
---

## Приём пародонтолога

Диагностика и лечение заболеваний дёсен: гингивит, пародонтит, рецессия десны.

| Услуга | Стоимость |
|--------|-----------|
| Первичный приём пародонтолога | 1 500 ₽ |

Кровоточивость дёсен, неприятный запах, подвижность зубов — симптомы, которые нельзя игнорировать. Чем раньше начато лечение, тем больше шансов сохранить зубы.
```

`src/content/services/detskaya-stomatologiya.md`:
```markdown
---
title: "Детская стоматология"
slug: "detskaya-stomatologiya"
category: "Детская"
geoTitle: "Детский стоматолог в Магнитогорске | Престиж"
description: "Детская стоматология в Магнитогорске: лечение молочных зубов, цветные пломбы, профгигиена для детей. Безболезненно и без страха. Стоматология Престиж."
order: 9
---

## Детская стоматология

Лечение зубов у детей требует особого подхода — терпения, мягкости и игровой формы. В клинике Престиж мы делаем всё, чтобы визит к стоматологу не вызывал страха.

*Подробные описания услуг и цены будут добавлены после получения данных от клиники.*
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds, content synced.

**Step 4: Commit**

```bash
git add src/content/services/
git commit -m "feat: add service content files with real data (9 categories)"
```

---

### Task 2: Doctor Content Files (10 ready + 4 placeholders)

**Files:**
- Delete: `src/content/doctors/_example.md`
- Create: 14 files in `src/content/doctors/`

**Step 1: Delete example and create doctor files**

```bash
rm src/content/doctors/_example.md
```

Create files for all 14 doctors. Data from Google Sheets "Врачи" tab.

`src/content/doctors/antoshkin-iv.md`:
```markdown
---
name: "Антошкин Илья Вячеславович"
slug: "antoshkin-iv"
specialty: "Стоматолог-терапевт"
experience: "6 лет"
photo: "/images/doctors/antoshkin-iv.jpg"
shortDescription: "Занимается повторным эндодонтическим лечением и реставрациями. Напоминает: профилактика и гигиена — основа здоровья зубов."
education: "Оренбургский ГМУ, 2020"
order: 7
---

Илья Вячеславович окончил Оренбургский государственный медицинский университет в 2020 году. Специализируется на повторном эндодонтическом лечении и эстетических реставрациях. Постоянно совершенствует навыки на профильных курсах.

Убеждён, что профилактика и качественная гигиена — основа здоровья зубов.

Жизненный принцип: «Пугает только неизвестность, но когда столкнулся с ней — она перестаёт быть неизвестностью».
```

`src/content/doctors/docenko-ag.md`:
```markdown
---
name: "Доценко Анна Георгиевна"
slug: "docenko-ag"
specialty: "Терапевт, зам. главного врача"
experience: "9 лет"
photo: "/images/doctors/docenko-ag.jpg"
shortDescription: "С 2017 года в профессии. Опыт международных стажировок, десятки курсов и конгрессов."
education: "ЮУГМУ, 2017 + стажировка Израиль"
order: 2
---

Анна Георгиевна окончила ЮУГМУ в 2017 году, прошла ординатуру по терапевтической стоматологии в Уфе (2022). Стажировалась в Израиле по программе Young Dentists (2019–2020), подтвердила лицензию врача-стоматолога в медицинском центре Адасса (Иерусалим).

Прошла более 15 курсов и конгрессов в России и Израиле: эстетические реставрации, эндодонтия, повторное лечение, цифровая стоматология (Cerec), фотопротокол.

Заместитель главного врача клиники. Подход — индивидуальный и комплексный.
```

`src/content/doctors/docenko-do.md`:
```markdown
---
name: "Доценко Дмитрий Олегович"
slug: "docenko-do"
specialty: "Стоматолог-хирург, имплантолог"
experience: "8 лет"
photo: "/images/doctors/docenko-do.jpg"
shortDescription: "Эксперт по имплантации и костной пластике с международной стажировкой в Израиле."
education: "ЮУГМУ, 2017 + ординатура БГМУ + стажировка Израиль"
order: 3
---

Дмитрий Олегович окончил ЮУГМУ в 2017 году, прошёл ординатуру по хирургической стоматологии в БГМУ (Уфа, 2020–2022). Стажировался в Израиле по программе Young Dentists (2019–2020), обучался технологиям Cerec (Dentsply Sirona).

Прошёл более 14 курсов: имплантология, костная пластика, синус-лифтинг, цифровая хирургия Straumann, ортопедия в имплантологии, мягкотканная аугментация.

Участник Евразийского конгресса по реконструктивной хирургии.
```

`src/content/doctors/zuevskiy-mk.md`:
```markdown
---
name: "Зуевский Максим Константинович"
slug: "zuevskiy-mk"
specialty: "Стоматолог-ортопед"
experience: "23 года"
photo: "/images/doctors/zuevskiy-mk.jpg"
shortDescription: "Более 20 лет опыта. Специалист по индивидуальным планам лечения."
education: "Уральская ГМА, 2003"
order: 4
---

Максим Константинович окончил Уральскую государственную медицинскую академию (Екатеринбург) в 2003 году. Более 22 лет опыта в ортопедической стоматологии.

Составляет индивидуальные планы лечения для каждого пациента. Рекомендует проходить осмотры каждые 6 месяцев.

Девиз: «Делай другим так, как себе».
```

`src/content/doctors/slinkina-ri.md`:
```markdown
---
name: "Слинкина Римма Ильинична"
slug: "slinkina-ri"
specialty: "Стоматолог-терапевт"
experience: "32 года"
photo: "/images/doctors/slinkina-ri.jpg"
shortDescription: "32 года опыта. Комплексный подход."
education: "Уральский ГМИ, 1993"
order: 1
---

Римма Ильинична окончила Уральский государственный медицинский институт в 1993 году. 32 года в профессии. Практикует комплексный, системный подход к восстановлению здоровья полости рта.

Девиз: «Всё сможешь, если душу вложишь».
```

`src/content/doctors/sotnikova-ma.md`:
```markdown
---
name: "Сотникова Марина Анатольевна"
slug: "sotnikova-ma"
specialty: "Стоматолог-терапевт"
experience: "23 года"
photo: "/images/doctors/sotnikova-ma.jpg"
shortDescription: "23 года опыта. Внимательна и бережна к каждому пациенту."
education: "Ижевская ГМА, 2002"
order: 5
---

Марина Анатольевна окончила Ижевскую государственную медицинскую академию в 2002 году. 23 года клинического опыта.

Прошла обучение по эстетико-функциональным реставрациям, современной эндодонтии, повторному лечению, отбеливанию зубов.

Подход — индивидуальный, внимательный и бережный к каждому пациенту.
```

`src/content/doctors/savinkova-ms.md`:
```markdown
---
name: "Савинкова Марина Сергеевна"
slug: "savinkova-ms"
specialty: "Зубной врач"
experience: "15 лет"
photo: "/images/doctors/savinkova-ms.jpg"
shortDescription: "15 лет опыта. Прошла более 17 курсов и мастер-классов."
education: "Магнитогорское мед. училище, 2000"
order: 6
---

Марина Сергеевна окончила Магнитогорское медицинское училище им. П.Ф. Надеждина в 2000 году. 15 лет клинического опыта.

Прошла более 17 курсов и мастер-классов: эндодонтия, эстетические реставрации, микропротезирование (виниры, накладки), цифровая стоматология, неотложная помощь.
```

`src/content/doctors/chirkov-ds.md`:
```markdown
---
name: "Чирков Дмитрий Сергеевич"
slug: "chirkov-ds"
specialty: "Стоматолог-терапевт"
experience: "10 лет"
photo: "/images/doctors/chirkov-ds.jpg"
shortDescription: "10 лет опыта. Девиз: качество превыше всего."
education: "Пермский ГМУ, 2015"
order: 8
---

Дмитрий Сергеевич окончил Пермский государственный медицинский университет в 2015 году. 10 лет опыта.

Прошёл 9 специализированных курсов: практическая и первичная эндодонтия, повторная эндодонтия, реставрации жевательных и фронтальных зубов, фотопротокол.

Принцип — качество превыше всего.
```

`src/content/doctors/muhamedyanova-ai.md`:
```markdown
---
name: "Мухамедьянова Альбина Иштугановна"
slug: "muhamedyanova-ai"
specialty: "Гигиенист стоматологический"
photo: "/images/doctors/muhamedyanova-ai.jpg"
shortDescription: "Бережно проводит профессиональную чистку, помогает подобрать средства домашнего ухода."
education: "Миасский медицинский колледж"
order: 10
---

Альбина Иштугановна окончила Миасский медицинский колледж по специальности «стоматологический гигиенист». Бережно проводит профессиональную чистку с индивидуальным подбором средств домашней гигиены.

Напоминает: профессиональная гигиена нужна каждые полгода, а домашний уход — дважды в день с правильно подобранными средствами.
```

`src/content/doctors/osinskaya-la.md`:
```markdown
---
name: "Осинская Лиана Альфредовна"
slug: "osinskaya-la"
specialty: "Стоматолог-хирург"
experience: "4 года"
photo: "/images/doctors/osinskaya-la.jpg"
shortDescription: "Молодой специалист с бережным подходом. Прошла обучение по имплантологии."
education: "Стоматологический факультет, 2022"
order: 9
---

Лиана Альфредовна окончила стоматологический факультет в 2022 году. Прошла курсы «Базовая имплантология» (2024) и «Имплантология с нуля» (2025).

Бережный, деликатный подход с индивидуальным вниманием к каждому пациенту.

Девиз: «Смел тот, кто не боится ошибиться».
```

`src/content/doctors/dubinina-iv.md` (no photo):
```markdown
---
name: "Дубинина Ирина Васильевна"
slug: "dubinina-iv"
specialty: "Стоматолог-терапевт"
experience: "27 лет"
shortDescription: "27 лет опыта. Индивидуальный подход и доверительные отношения с пациентами."
education: "Уральская ГМА, 2012"
order: 11
---

Ирина Васильевна работает в стоматологии с 1997 года — сначала 16 лет зубным врачом, затем окончила Уральскую государственную медицинскую академию (2012).

27 лет общего опыта. Прошла более 15 курсов: эндодонтия, эстетические реставрации, коффердам, 3D рентгенодиагностика, дентальная фотография.

Подход — доверительные отношения, индивидуальный учёт особенностей пациента.
```

`src/content/doctors/tolkacheva-ev.md` (no photo):
```markdown
---
name: "Толкачева Екатерина Владимировна"
slug: "tolkacheva-ev"
specialty: "Стоматолог-ортодонт"
experience: "5 лет"
shortDescription: "Ортодонт с 5-летним опытом. Собранный и скрупулёзный подход."
education: "СамГМУ, 2021 + ординатура БГМУ, 2024"
order: 12
---

Екатерина Владимировна окончила Самарский государственный медицинский университет в 2021 году, затем ординатуру по ортодонтии в БГМУ (2024).

Прошла обучение в Школе ортодонтии Тихоновых, курсы «Ортодонтия с большой буквы», участвовала в конгрессе «Еврокаппа».

Подход — собранность, спокойствие и скрупулёзность.
```

`src/content/doctors/shiryaeva-nv.md` (waiting info):
```markdown
---
name: "Ширяева Наталья Валерьевна"
slug: "shiryaeva-nv"
specialty: "Гигиенист"
shortDescription: "Информация о враче будет добавлена."
order: 13
---

Информация будет добавлена после получения данных от клиники.
```

`src/content/doctors/kraft-nl.md` (waiting info):
```markdown
---
name: "Крафт Надежда Леонидовна"
slug: "kraft-nl"
specialty: "Врач-стоматолог"
shortDescription: "Информация о враче будет добавлена."
order: 14
---

Информация будет добавлена после получения данных от клиники.
```

**Step 2: Create placeholder for doctor photos**

```bash
mkdir -p public/images/doctors
```

Note: Real photos will be added later. Without photos, the doctor cards will show a placeholder SVG (implemented in Task 4).

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/content/doctors/ public/images/
git commit -m "feat: add doctor content files with real data (14 doctors)"
```

---

### Task 3: Service Pages — Hub + Dynamic Route

**Files:**
- Create: `src/pages/uslugi/index.astro`
- Create: `src/pages/uslugi/[slug].astro`

**Step 1: Create services hub page**

`src/pages/uslugi/index.astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection } from 'astro:content';

const services = (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout
  title="Услуги стоматологии Престиж в Магнитогорске"
  description="Все стоматологические услуги клиники Престиж: лечение, протезирование, имплантация, ортодонтия, гигиена, хирургия, диагностика."
  breadcrumbs={[{ name: 'Услуги', url: 'https://prestige-dents.ru/uslugi/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Услуги', url: '/uslugi/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Услуги</h1>
      <p class="text-lg text-[var(--text-muted)] mb-10 max-w-2xl">
        Полный спектр стоматологических услуг для всей семьи — от профилактики до сложной имплантации.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <a href={`/uslugi/${service.data.slug}/`} class="glass-card block group">
            <h2 class="text-lg font-semibold mb-2 group-hover:text-[var(--color-brand)] transition-colors">
              {service.data.title}
            </h2>
            <p class="text-sm text-[var(--text-muted)] mb-3">{service.data.description}</p>
            {service.data.priceFrom && (
              <p class="text-sm font-semibold text-[var(--color-brand)]">
                от {service.data.priceFrom.toLocaleString('ru-RU')} ₽
              </p>
            )}
          </a>
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 2: Create dynamic service page**

`src/pages/uslugi/[slug].astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection } from 'astro:content';
import clinic from '../../data/clinic.json';

export async function getStaticPaths() {
  const services = await getCollection('services');
  return services.map(service => ({
    params: { slug: service.data.slug },
    props: { service },
  }));
}

const { service } = Astro.props;
const { Content } = await service.render();

const faqSchema = service.data.faq.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": service.data.faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
} : null;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": service.data.title,
  "description": service.data.description,
  "url": `https://prestige-dents.ru/uslugi/${service.data.slug}/`,
  "provider": {
    "@type": "Dentist",
    "name": clinic.name,
    "telephone": clinic.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": clinic.address.city,
      "streetAddress": clinic.address.street,
    },
  },
};
---

<BaseLayout
  title={service.data.geoTitle || `${service.data.title} — ${clinic.name}`}
  description={service.data.description}
  breadcrumbs={[
    { name: 'Услуги', url: 'https://prestige-dents.ru/uslugi/' },
    { name: service.data.title, url: `https://prestige-dents.ru/uslugi/${service.data.slug}/` },
  ]}
>
  <Fragment slot="head">
    <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />
    {faqSchema && <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />}
  </Fragment>

  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[
      { name: 'Услуги', url: '/uslugi/' },
      { name: service.data.title, url: `/uslugi/${service.data.slug}/` },
    ]} />
  </div>

  <article class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto prose-custom">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{service.data.title}</h1>
      {service.data.priceFrom && (
        <p class="text-lg text-[var(--color-brand)] font-semibold mb-6">
          от {service.data.priceFrom.toLocaleString('ru-RU')} ₽
        </p>
      )}

      <div class="service-content">
        <Content />
      </div>

      {service.data.faq.length > 0 && (
        <section class="mt-12">
          <h2 class="text-2xl font-bold mb-6">Частые вопросы</h2>
          <div class="space-y-4">
            {service.data.faq.map(item => (
              <details class="glass-card cursor-pointer">
                <summary class="font-semibold">{item.question}</summary>
                <p class="mt-3 text-[var(--text-muted)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <div class="mt-12 text-center">
        <a href="/kontakty/#zapis" class="btn-cta">Записаться на приём</a>
      </div>
    </div>
  </article>
</BaseLayout>
```

**Step 3: Add prose styles to global.css**

Append to `src/styles/global.css`:
```css
/* ═══ Prose (service/blog content) ═══ */
.service-content h2,
.blog-content h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text);
}
.service-content h3,
.blog-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: var(--text);
}
.service-content p,
.blog-content p {
  margin-bottom: 1rem;
  color: var(--text);
}
.service-content table,
.blog-content table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}
.service-content th,
.service-content td,
.blog-content th,
.blog-content td {
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border);
}
.service-content th,
.blog-content th {
  font-weight: 600;
  color: var(--text);
}
.service-content td,
.blog-content td {
  color: var(--text-muted);
}
.service-content ul,
.blog-content ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.service-content li,
.blog-content li {
  margin-bottom: 0.5rem;
  color: var(--text);
}
.service-content strong,
.blog-content strong {
  font-weight: 600;
  color: var(--text);
}
.service-content em,
.blog-content em {
  font-style: italic;
  color: var(--text-muted);
}
```

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds, service pages generated.

**Step 5: Commit**

```bash
git add src/pages/uslugi/ src/styles/global.css
git commit -m "feat: add service hub and dynamic service pages with FAQ schema"
```

---

### Task 4: Doctor Pages — List + Profile

**Files:**
- Create: `src/pages/vrachi/index.astro`
- Create: `src/pages/vrachi/[slug].astro`

**Step 1: Create doctors list page**

`src/pages/vrachi/index.astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection } from 'astro:content';

const doctors = (await getCollection('doctors')).sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout
  title="Врачи стоматологии Престиж в Магнитогорске"
  description="Команда стоматологии Престиж: 14 врачей с опытом от 4 до 32 лет. Терапевты, хирурги, ортопед, ортодонт, гигиенисты."
  breadcrumbs={[{ name: 'Врачи', url: 'https://prestige-dents.ru/vrachi/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Врачи', url: '/vrachi/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Наши врачи</h1>
      <p class="text-lg text-[var(--text-muted)] mb-10 max-w-2xl">
        Команда из 14 специалистов с опытом от 4 до 32 лет. Двое врачей прошли стажировку в Израиле.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <a href={`/vrachi/${doctor.data.slug}/`} class="glass-card block group">
            <div class="w-full aspect-[3/4] rounded-lg mb-4 overflow-hidden bg-[var(--bg-alt)]">
              {doctor.data.photo ? (
                <img
                  src={doctor.data.photo}
                  alt={doctor.data.name}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div class="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
                  <svg class="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>
            <h2 class="text-base font-semibold group-hover:text-[var(--color-brand)] transition-colors">
              {doctor.data.name}
            </h2>
            <p class="text-sm text-[var(--color-brand)] mt-1">{doctor.data.specialty}</p>
            {doctor.data.experience && (
              <p class="text-sm text-[var(--text-muted)] mt-1">Опыт: {doctor.data.experience}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 2: Create dynamic doctor profile page**

`src/pages/vrachi/[slug].astro`:
```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection } from 'astro:content';
import clinic from '../../data/clinic.json';

export async function getStaticPaths() {
  const doctors = await getCollection('doctors');
  return doctors.map(doctor => ({
    params: { slug: doctor.data.slug },
    props: { doctor },
  }));
}

const { doctor } = Astro.props;
const { Content } = await doctor.render();

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": doctor.data.name,
  "description": doctor.data.shortDescription,
  "url": `https://prestige-dents.ru/vrachi/${doctor.data.slug}/`,
  "image": doctor.data.photo ? `https://prestige-dents.ru${doctor.data.photo}` : undefined,
  "medicalSpecialty": doctor.data.specialty,
  "worksFor": {
    "@type": "Dentist",
    "name": clinic.name,
    "telephone": clinic.phoneRaw,
  },
};
---

<BaseLayout
  title={`${doctor.data.name} — ${doctor.data.specialty} | ${clinic.name}`}
  description={`${doctor.data.name}, ${doctor.data.specialty.toLowerCase()}. ${doctor.data.shortDescription} Стоматология Престиж, Магнитогорск.`}
  breadcrumbs={[
    { name: 'Врачи', url: 'https://prestige-dents.ru/vrachi/' },
    { name: doctor.data.name, url: `https://prestige-dents.ru/vrachi/${doctor.data.slug}/` },
  ]}
>
  <Fragment slot="head">
    <script type="application/ld+json" set:html={JSON.stringify(physicianSchema)} />
  </Fragment>

  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[
      { name: 'Врачи', url: '/vrachi/' },
      { name: doctor.data.name, url: `/vrachi/${doctor.data.slug}/` },
    ]} />
  </div>

  <article class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <div class="flex flex-col md:flex-row gap-8 mb-10">
        <!-- Photo -->
        <div class="w-full md:w-1/3 max-w-[300px]">
          <div class="aspect-[3/4] rounded-xl overflow-hidden bg-[var(--bg-alt)]">
            {doctor.data.photo ? (
              <img
                src={doctor.data.photo}
                alt={doctor.data.name}
                class="w-full h-full object-cover"
              />
            ) : (
              <div class="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
                <svg class="w-24 h-24 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            )}
          </div>
        </div>

        <!-- Info -->
        <div class="flex-1">
          <h1 class="text-3xl md:text-4xl font-bold mb-2">{doctor.data.name}</h1>
          <p class="text-lg text-[var(--color-brand)] font-medium mb-2">{doctor.data.specialty}</p>
          {doctor.data.experience && (
            <p class="text-[var(--text-muted)] mb-2">Стаж: {doctor.data.experience}</p>
          )}
          {doctor.data.education && (
            <p class="text-[var(--text-muted)] mb-4">Образование: {doctor.data.education}</p>
          )}
          <p class="text-[var(--text)]">{doctor.data.shortDescription}</p>
        </div>
      </div>

      <div class="max-w-[800px] service-content">
        <Content />
      </div>

      <div class="mt-12 text-center">
        <a href="/kontakty/#zapis" class="btn-cta">Записаться к врачу</a>
      </div>
    </div>
  </article>
</BaseLayout>
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds, doctor pages generated.

**Step 4: Commit**

```bash
git add src/pages/vrachi/
git commit -m "feat: add doctor list and profile pages with Physician schema"
```

---

### Task 5: Price Page

**Files:**
- Create: `src/pages/ceny.astro`

**Step 1: Create price page**

`src/pages/ceny.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
---

<BaseLayout
  title="Цены на стоматологические услуги в Магнитогорске | Престиж"
  description="Актуальные цены на стоматологические услуги в Магнитогорске. Лечение, протезирование, имплантация, ортодонтия, гигиена. Стоматология Престиж."
  breadcrumbs={[{ name: 'Цены', url: 'https://prestige-dents.ru/ceny/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Цены', url: '/ceny/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Цены</h1>
      <p class="text-lg text-[var(--text-muted)] mb-10 max-w-2xl">
        Актуальные цены на услуги. Точную стоимость лечения врач определит после осмотра.
      </p>

      <!-- Первичный приём -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4">Первичный приём</h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]">
              <th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th>
              <th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th>
            </tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Консультация терапевта</td><td class="py-3 px-4 text-right font-semibold">1 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Консультация пародонтолога</td><td class="py-3 px-4 text-right font-semibold">1 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Консультация хирурга</td><td class="py-3 px-4 text-right font-semibold">1 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Консультация ортопеда</td><td class="py-3 px-4 text-right font-semibold">1 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Повторный приём</td><td class="py-3 px-4 text-right font-semibold">250 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Терапия -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/terapiya/" class="hover:text-[var(--color-brand)] transition-colors">Терапия</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Пломба Vitremer (до 1/3 зуба)</td><td class="py-3 px-4 text-right font-semibold">1 200 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Пломба Vitremer (до 2/3 зуба)</td><td class="py-3 px-4 text-right font-semibold">1 600 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Фотополимерная реставрация (до 1/3)</td><td class="py-3 px-4 text-right font-semibold">от 5 800 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Фотополимерная реставрация (до 1/2)</td><td class="py-3 px-4 text-right font-semibold">от 6 100 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Фотополимерная реставрация (более 1/2)</td><td class="py-3 px-4 text-right font-semibold">от 6 400 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Протезирование -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/protezirovanie/" class="hover:text-[var(--color-brand)] transition-colors">Протезирование</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Временная коронка</td><td class="py-3 px-4 text-right font-semibold">1 100 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Металлокерамика (класс B)</td><td class="py-3 px-4 text-right font-semibold">9 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Металлокерамика (класс A)</td><td class="py-3 px-4 text-right font-semibold">12 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Диоксид циркония (ZrO₂)</td><td class="py-3 px-4 text-right font-semibold">19 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Безметалловая E-max</td><td class="py-3 px-4 text-right font-semibold">21 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Частичный протез (1–3 зуба)</td><td class="py-3 px-4 text-right font-semibold">12 600 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Частичный протез (4–9 зубов)</td><td class="py-3 px-4 text-right font-semibold">20 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Полный протез (10–14 зубов)</td><td class="py-3 px-4 text-right font-semibold">28 400 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Бюгельный односторонний</td><td class="py-3 px-4 text-right font-semibold">31 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Бюгельный двусторонний</td><td class="py-3 px-4 text-right font-semibold">33 600 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Имплантация -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/implantaciya/" class="hover:text-[var(--color-brand)] transition-colors">Имплантация</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Any One / Super Line</td><td class="py-3 px-4 text-right font-semibold">36 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Nobel / Straumann / Astra Tech</td><td class="py-3 px-4 text-right font-semibold">63 000 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Ортодонтия -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/ortodontiya/" class="hover:text-[var(--color-brand)] transition-colors">Ортодонтия</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Лигатурные брекеты (2 челюсти)</td><td class="py-3 px-4 text-right font-semibold">47 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Безлигатурные брекеты (2 челюсти)</td><td class="py-3 px-4 text-right font-semibold">94 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Элайнеры SS IQ (до 10 шагов)</td><td class="py-3 px-4 text-right font-semibold">105 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Элайнеры SS IQ (до 20 шагов)</td><td class="py-3 px-4 text-right font-semibold">157 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Элайнеры SS IQ (до 36 шагов)</td><td class="py-3 px-4 text-right font-semibold">204 500 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Элайнеры Kinder (до 7 шагов)</td><td class="py-3 px-4 text-right font-semibold">84 000 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Гигиена -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/gigiena-i-otbelivanie/" class="hover:text-[var(--color-brand)] transition-colors">Гигиена</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Подбор средств гигиены</td><td class="py-3 px-4 text-right font-semibold">350 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Чистка циркулярными щётками</td><td class="py-3 px-4 text-right font-semibold">4 200 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Чистка Air Flow</td><td class="py-3 px-4 text-right font-semibold">5 300 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Комплексная (УЗ + Air Flow + реминерализация)</td><td class="py-3 px-4 text-right font-semibold">6 300 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Хирургия -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/hirurgiya/" class="hover:text-[var(--color-brand)] transition-colors">Хирургия</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Удаление временного зуба</td><td class="py-3 px-4 text-right font-semibold">1 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Удаление подвижного зуба</td><td class="py-3 px-4 text-right font-semibold">1 000 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Удаление постоянного зуба</td><td class="py-3 px-4 text-right font-semibold">1 700 ₽</td></tr>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Сложное удаление</td><td class="py-3 px-4 text-right font-semibold">3 500 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Диагностика -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/diagnostika/" class="hover:text-[var(--color-brand)] transition-colors">Диагностика</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">КЛКТ (полная, без суставов)</td><td class="py-3 px-4 text-right font-semibold">3 100 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Пародонтология -->
      <div class="mb-10">
        <h2 class="text-xl font-bold mb-4"><a href="/uslugi/parodontologiya/" class="hover:text-[var(--color-brand)] transition-colors">Пародонтология</a></h2>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead><tr class="border-b border-[var(--border)]"><th class="text-left py-3 px-4 text-sm font-semibold">Услуга</th><th class="text-right py-3 px-4 text-sm font-semibold">Стоимость</th></tr></thead>
            <tbody>
              <tr class="border-b border-[var(--border)]"><td class="py-3 px-4">Первичный приём пародонтолога</td><td class="py-3 px-4 text-right font-semibold">1 500 ₽</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <p class="text-sm text-[var(--text-muted)] mt-10">
        Указаны ориентировочные цены. Точную стоимость лечения врач определит после осмотра и диагностики.
        Полный прайс-лист доступен в клинике.
      </p>

      <div class="mt-8 text-center">
        <a href="/kontakty/#zapis" class="btn-cta">Записаться на приём</a>
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/pages/ceny.astro
git commit -m "feat: add price page with all service prices as HTML tables"
```

---

### Task 6: Static Pages — About, Contacts, Licenses, Reviews, Privacy

**Files:**
- Create: `src/pages/o-klinike.astro`
- Create: `src/pages/kontakty.astro`
- Create: `src/pages/licenzii.astro`
- Create: `src/pages/otzyvy.astro`
- Create: `src/pages/privacy.astro`

**Step 1: Create About page**

`src/pages/o-klinike.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout
  title={`О клинике — ${clinic.name}`}
  description={`${clinic.name} в ${clinic.address.city}. Семейная стоматология с 2008 года. AI-диагностика, 19 единиц импортного оборудования, врачи с международным опытом.`}
  breadcrumbs={[{ name: 'О клинике', url: 'https://prestige-dents.ru/o-klinike/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'О клинике', url: '/o-klinike/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto service-content">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">О клинике</h1>

      <p class="text-lg text-[var(--text-muted)] mb-8">
        Семейная стоматология «Престиж» работает в Магнитогорске с 2008 года. За это время мы стали клиникой, которой доверяют семьи — рейтинг 4.9 в 2ГИС, более 270 отзывов.
      </p>

      <h2>Наш подход</h2>
      <p><strong>«Ваша улыбка — наш престиж»</strong> — не просто слоган. Мы совмещаем высокие технологии с человеческой заботой: от безболезненной анестезии гелем до AI-диагностики.</p>

      <h2>Технологии</h2>
      <ul>
        <li><strong>AI-диагностика Diagnocat</strong> — анализ КЛКТ-снимков искусственным интеллектом для точного планирования лечения</li>
        <li><strong>DianApp</strong> — оценка гигиены полости рта по фотографии</li>
        <li><strong>Компьютерная томография (КЛКТ)</strong> — 3D-снимок всей челюсти за 15 секунд</li>
        <li><strong>19 единиц импортного оборудования</strong> — Sirona, W&H, Dentsply, Hu-Friedy</li>
      </ul>

      <h2>Команда</h2>
      <p>14 врачей с опытом от 4 до 32 лет. Двое специалистов прошли стажировку в Израиле. Регулярное повышение квалификации на курсах и конгрессах.</p>
      <p><a href="/vrachi/" class="text-[var(--color-brand)] font-semibold">Познакомьтесь с нашими врачами →</a></p>

      <h2>Для всей семьи</h2>
      <p>Мы лечим пациентов любого возраста — от детей до людей старшего поколения. Терапия, протезирование, имплантация, ортодонтия, гигиена, хирургия, диагностика.</p>

      <h2>Реквизиты</h2>
      <ul>
        <li>{clinic.legalName}, ИНН {clinic.inn}, ОГРН {clinic.ogrn}</li>
        <li>Лицензия: {clinic.license.number} от {new Date(clinic.license.date).toLocaleDateString('ru-RU')}</li>
        <li>Выдана: {clinic.license.authority}</li>
      </ul>

      <div class="mt-10 text-center">
        <a href="/kontakty/#zapis" class="btn-cta">Записаться на приём</a>
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 2: Create Contacts page**

`src/pages/kontakty.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout
  title={`Контакты — ${clinic.name}`}
  description={`Адрес, телефон, график работы стоматологии Престиж в Магнитогорске. ${clinic.address.street}. Записаться: ${clinic.phone}.`}
  breadcrumbs={[{ name: 'Контакты', url: 'https://prestige-dents.ru/kontakty/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Контакты', url: '/kontakty/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-8">Контакты</h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Contact info -->
        <div class="space-y-6">
          <div class="glass-card">
            <h2 class="font-semibold mb-3">Адрес</h2>
            <p class="text-[var(--text)]">{clinic.address.city}, {clinic.address.street}</p>
            <p class="text-sm text-[var(--text-muted)]">{clinic.address.district}</p>
          </div>

          <div class="glass-card">
            <h2 class="font-semibold mb-3">Телефон</h2>
            <a href={`tel:${clinic.phoneRaw}`} class="text-xl font-bold text-[var(--color-brand)]">{clinic.phone}</a>
          </div>

          <div class="glass-card">
            <h2 class="font-semibold mb-3">WhatsApp</h2>
            <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noopener" class="text-lg font-semibold text-[#25D366]">{clinic.whatsapp}</a>
          </div>

          <div class="glass-card">
            <h2 class="font-semibold mb-3">Email</h2>
            <a href={`mailto:${clinic.email}`} class="text-[var(--color-brand)]">{clinic.email}</a>
          </div>

          <div class="glass-card">
            <h2 class="font-semibold mb-3">График работы</h2>
            <p>{clinic.hours.weekdays}</p>
            <p>{clinic.hours.weekends}</p>
          </div>
        </div>

        <!-- Map -->
        <div>
          <div class="rounded-xl overflow-hidden h-[400px] bg-[var(--bg-alt)]">
            <iframe
              src={`https://yandex.ru/map-widget/v1/?ll=${clinic.geo.longitude}%2C${clinic.geo.latitude}&z=16&pt=${clinic.geo.longitude}%2C${clinic.geo.latitude}%2Cpm2rdm`}
              width="100%"
              height="400"
              style="border:0"
              loading="lazy"
              title="Карта — Стоматология Престиж"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Appointment section -->
      <div id="zapis" class="mt-16 text-center">
        <h2 class="text-2xl font-bold mb-4">Записаться на приём</h2>
        <p class="text-[var(--text-muted)] mb-6 max-w-lg mx-auto">
          Позвоните нам или напишите в WhatsApp — администратор подберёт удобное время.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href={`tel:${clinic.phoneRaw}`} class="btn-brand">Позвонить</a>
          <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noopener" class="btn-cta">Написать в WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 3: Create Licenses page**

`src/pages/licenzii.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout
  title={`Лицензии и сертификаты — ${clinic.name}`}
  description={`Лицензия на осуществление медицинской деятельности ${clinic.license.number}. Сертификаты врачей стоматологии Престиж.`}
  breadcrumbs={[{ name: 'Лицензии', url: 'https://prestige-dents.ru/licenzii/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Лицензии', url: '/licenzii/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">Лицензии и сертификаты</h1>

      <div class="glass-card mb-8">
        <h2 class="text-lg font-semibold mb-3">Лицензия на медицинскую деятельность</h2>
        <p><strong>Номер:</strong> {clinic.license.number}</p>
        <p><strong>Дата выдачи:</strong> {new Date(clinic.license.date).toLocaleDateString('ru-RU')}</p>
        <p><strong>Выдана:</strong> {clinic.license.authority}</p>
        <p><strong>Статус:</strong> действующая</p>
        <p class="mt-3"><strong>{clinic.legalName}</strong>, ИНН {clinic.inn}, ОГРН {clinic.ogrn}</p>
      </div>

      <p class="text-[var(--text-muted)]">
        Сканы лицензии и сертификатов врачей будут добавлены после получения от клиники.
      </p>
    </div>
  </section>
</BaseLayout>
```

**Step 4: Create Reviews page**

`src/pages/otzyvy.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout
  title={`Отзывы — ${clinic.name}`}
  description={`Отзывы пациентов о стоматологии Престиж в Магнитогорске. Рейтинг 4.9 в 2ГИС, более 270 отзывов.`}
  breadcrumbs={[{ name: 'Отзывы', url: 'https://prestige-dents.ru/otzyvy/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Отзывы', url: '/otzyvy/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto text-center">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">Отзывы</h1>
      <p class="text-lg text-[var(--text-muted)] mb-8">
        Рейтинг <strong class="text-[var(--text)]">4.9</strong> в 2ГИС — лучший среди стоматологий Магнитогорска. Более 270 отзывов.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <a href="https://2gis.ru/magnitogorsk/firm/70000001066803728/tab/reviews" target="_blank" rel="noopener" class="btn-brand">Отзывы в 2ГИС</a>
        <a href="https://prodoctorov.ru/magnitogorsk/lpu/89919-prestizh/" target="_blank" rel="noopener" class="btn-outline">ПроДокторов</a>
        <a href="https://zoon.ru/magnitogorsk/medical/stomatologiya_prestizh_na_prospekte_lenina/" target="_blank" rel="noopener" class="btn-outline">Zoon</a>
      </div>

      <p class="text-sm text-[var(--text-muted)]">
        Виджет с отзывами будет подключён в Phase 5.
      </p>
    </div>
  </section>
</BaseLayout>
```

**Step 5: Create Privacy page**

`src/pages/privacy.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import clinic from '../data/clinic.json';
---

<BaseLayout
  title={`Политика конфиденциальности — ${clinic.name}`}
  description="Политика обработки персональных данных стоматологии Престиж."
  breadcrumbs={[{ name: 'Политика конфиденциальности', url: 'https://prestige-dents.ru/privacy/' }]}
>
  <div class="max-w-[1280px] mx-auto px-[var(--section-px)]">
    <Breadcrumbs items={[{ name: 'Политика конфиденциальности', url: '/privacy/' }]} />
  </div>

  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto service-content">
      <h1 class="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <h2>1. Общие положения</h2>
      <p>{clinic.legalName} (ИНН {clinic.inn}, далее — «Оператор») обрабатывает персональные данные посетителей сайта prestige-dents.ru (далее — «Сайт») в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>

      <h2>2. Какие данные собираем</h2>
      <ul>
        <li>Имя, номер телефона (при записи на приём)</li>
        <li>Данные из cookies и систем аналитики (Яндекс.Метрика)</li>
      </ul>

      <h2>3. Цели обработки</h2>
      <ul>
        <li>Запись на приём и обратная связь</li>
        <li>Улучшение работы сайта (аналитика)</li>
      </ul>

      <h2>4. Хранение и защита</h2>
      <p>Персональные данные хранятся на защищённых серверах. Доступ к данным имеют только уполномоченные сотрудники.</p>

      <h2>5. Права пользователя</h2>
      <p>Вы можете запросить удаление ваших персональных данных, написав на <a href={`mailto:${clinic.email}`}>{clinic.email}</a>.</p>

      <h2>6. Контакты оператора</h2>
      <p>{clinic.legalName}<br />{clinic.address.full}<br />Телефон: {clinic.phone}<br />Email: {clinic.email}</p>
    </div>
  </section>
</BaseLayout>
```

**Step 6: Verify build**

Run: `npm run build`
Expected: Build succeeds, all static pages generated.

**Step 7: Commit**

```bash
git add src/pages/o-klinike.astro src/pages/kontakty.astro src/pages/licenzii.astro src/pages/otzyvy.astro src/pages/privacy.astro
git commit -m "feat: add static pages — about, contacts, licenses, reviews, privacy"
```

---

### Task 7: Full Homepage

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Replace placeholder homepage**

`src/pages/index.astro`:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import clinic from '../data/clinic.json';

const services = (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
const doctors = (await getCollection('doctors'))
  .filter(d => d.data.order <= 10)
  .sort((a, b) => a.data.order - b.data.order);
---

<BaseLayout>
  <!-- Hero -->
  <section class="py-[var(--section-py)] px-[var(--section-px)] relative overflow-hidden">
    <div class="max-w-[1280px] mx-auto text-center space-y-6 relative z-10">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold reveal">
        {clinic.name}
      </h1>
      <p class="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto reveal reveal-d1">
        {clinic.slogan}
      </p>
      <p class="text-lg text-[var(--text-muted)] max-w-xl mx-auto reveal reveal-d2">
        Современная стоматология с AI-диагностикой для всей семьи в Магнитогорске
      </p>
      <div class="flex flex-wrap justify-center gap-4 pt-4 reveal reveal-d3">
        <a href="/uslugi/" class="btn-brand">Наши услуги</a>
        <a href="/kontakty/#zapis" class="btn-cta">Записаться</a>
      </div>
    </div>
  </section>

  <!-- USP -->
  <section class="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--bg-alt)]">
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="glass-card text-center reveal">
          <div class="text-3xl font-bold text-[var(--color-brand)] mb-2">4.9</div>
          <p class="text-sm text-[var(--text-muted)]">Рейтинг в 2ГИС — лучший в городе</p>
        </div>
        <div class="glass-card text-center reveal reveal-d1">
          <div class="text-3xl font-bold text-[var(--color-brand)] mb-2">AI</div>
          <p class="text-sm text-[var(--text-muted)]">Diagnocat + DianApp — AI-диагностика</p>
        </div>
        <div class="glass-card text-center reveal reveal-d2">
          <div class="text-3xl font-bold text-[var(--color-brand)] mb-2">14</div>
          <p class="text-sm text-[var(--text-muted)]">Врачей, включая стажировки в Израиле</p>
        </div>
        <div class="glass-card text-center reveal reveal-d3">
          <div class="text-3xl font-bold text-[var(--color-brand)] mb-2">0</div>
          <p class="text-sm text-[var(--text-muted)]">Боли — безболезненная анестезия гелем</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold mb-2 reveal">Услуги</h2>
      <p class="text-[var(--text-muted)] mb-8 reveal reveal-d1">Полный спектр стоматологических услуг для всей семьи</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <a href={`/uslugi/${service.data.slug}/`} class={`glass-card block group reveal reveal-d${Math.min(i % 3 + 1, 3)}`}>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-[var(--color-brand)] transition-colors">
              {service.data.title}
            </h3>
            {service.data.priceFrom && (
              <p class="text-sm font-semibold text-[var(--color-brand)]">
                от {service.data.priceFrom.toLocaleString('ru-RU')} ₽
              </p>
            )}
          </a>
        ))}
      </div>

      <div class="text-center mt-8 reveal">
        <a href="/ceny/" class="btn-outline">Все цены</a>
      </div>
    </div>
  </section>

  <!-- Doctors -->
  <section class="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--bg-alt)]">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-2xl md:text-3xl font-bold mb-2 reveal">Наши врачи</h2>
      <p class="text-[var(--text-muted)] mb-8 reveal reveal-d1">Команда из 14 специалистов с опытом от 4 до 32 лет</p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {doctors.slice(0, 5).map((doctor, i) => (
          <a href={`/vrachi/${doctor.data.slug}/`} class={`glass-card block group text-center reveal reveal-d${Math.min(i % 3 + 1, 3)}`}>
            <div class="w-20 h-20 mx-auto rounded-full overflow-hidden bg-[var(--bg-alt)] mb-3">
              {doctor.data.photo ? (
                <img src={doctor.data.photo} alt={doctor.data.name} class="w-full h-full object-cover" loading="lazy" />
              ) : (
                <div class="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
                  <svg class="w-8 h-8 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>
            <p class="text-sm font-semibold group-hover:text-[var(--color-brand)] transition-colors">{doctor.data.name.split(' ').slice(0, 2).join(' ')}</p>
            <p class="text-xs text-[var(--text-muted)] mt-1">{doctor.data.specialty}</p>
          </a>
        ))}
      </div>

      <div class="text-center mt-8 reveal">
        <a href="/vrachi/" class="btn-outline">Все врачи</a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-[var(--section-py)] px-[var(--section-px)]">
    <div class="max-w-[800px] mx-auto text-center reveal">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Запишитесь на приём</h2>
      <p class="text-lg text-[var(--text-muted)] mb-6">
        Позвоните или напишите в WhatsApp — администратор подберёт удобное время.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href={`tel:${clinic.phoneRaw}`} class="btn-brand">{clinic.phone}</a>
        <a href={`https://wa.me/${clinic.whatsappRaw}`} target="_blank" rel="noopener" class="btn-cta">Написать в WhatsApp</a>
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: full homepage with hero, USP, services grid, doctors, CTA"
```

---

### Task 8: Delete Blog Example + Verify Everything

**Files:**
- Delete: `src/content/blog/_example.md`

**Step 1: Delete blog example**

```bash
rm src/content/blog/_example.md
```

Note: Blog page and articles are Phase 4. The collection schema stays.

**Step 2: Full build test**

Run: `npm run build`
Expected: Clean build, all pages generated. Verify page count matches expectations (1 index + 9 services + 14 doctors + 5 static = ~29 pages).

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove blog example, clean up for Phase 3 completion"
```

---

### Task 9: Push + PR

**Step 1: Push branch**

```bash
git push -u origin phase3-pages
```

**Step 2: Create PR**

```bash
gh pr create --title "Phase 3: Pages — all content pages with real data" --body "..."
```

Include in PR body:
- Service pages: 9 categories with real prices, FAQ schema, MedicalProcedure schema
- Doctor pages: 14 doctors with real bios, Physician schema, placeholder photos
- Price page: all prices as HTML tables (SEO-friendly)
- Static pages: about, contacts (with Yandex Map), licenses, reviews, privacy
- Full homepage: hero, USP cards, services grid, doctors, CTA
- Prose styles for content rendering

**Step 3: Update context issue**

```bash
gh issue comment 1 --repo valery-om/prestige-dents --body "Phase 3 Pages — COMPLETE. All content pages with real data. Ready for Phase 4 (blog) or Phase 5 (forms)."
```

---

## Summary

| Task | What | Pages |
|------|------|-------|
| 1 | Service content files | 9 MD files |
| 2 | Doctor content files | 14 MD files |
| 3 | Service pages (hub + dynamic) | /uslugi/ + /uslugi/[slug]/ |
| 4 | Doctor pages (list + profile) | /vrachi/ + /vrachi/[slug]/ |
| 5 | Price page | /ceny/ |
| 6 | Static pages | /o-klinike/, /kontakty/, /licenzii/, /otzyvy/, /privacy/ |
| 7 | Full homepage | / |
| 8 | Cleanup + verify | — |
| 9 | Push + PR | — |

**Blocked items (need data from clinic):**
- Doctor photos: Дубинина И.В., Толкачева Е.В. (нужны фото)
- Doctor info: Ширяева Н.В., Крафт Н.Л. (ждём данные)
- Детская стоматология: подробные описания и цены
- Лазерная стоматология: описания и цены
- Сканы лицензий и сертификатов

**Not in this phase (by design):**
- Blog pages → Phase 4
- Appointment form → Phase 5
- Reviews widget → Phase 5
- Quiz, calculator, before/after → Phase 5
