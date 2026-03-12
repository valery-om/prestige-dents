# Phase 4: Blog Articles — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create 20 SEO-optimized blog articles from real Magnitogorsk dental search queries, using copywriter archive as style reference, validated through prestige focus group.

**Architecture:** Each article targets a keyword cluster (geo-query "услуга + Магнитогорск" or info-query). Content sourced from 141 copywriter posts (style, facts, tone) + clinic data (prices, doctors, equipment). Every article has FAQ schema, internal links to service pages, and CTA to WhatsApp/phone.

**Tech Stack:** Astro Content Collections (existing blog schema), Markdown, prestige-focus-group skill, fact-checking skill.

---

## Data Sources

- **Copywriter archive:** Google Sheets `1QL0gLrpVW1Ze93GIE3w4N6Y5B3lolICPMZcmAElABAY` (141 posts, 9 categories)
- **Clinic data:** `src/data/clinic.json`, service pages in `src/content/services/`
- **Prices:** Google Sheets `1-6gTj1q4ENfTsBILc_LuY4SONO4EpI73CnLVbqEMLJ8`
- **Copywriter style markers:** разговорный тон, обращение на "вы", простые объяснения, без jargon, подписи "С уважением и заботой, стоматология Престиж"

## Keyword Clusters & Article Plan

Based on real search queries in Magnitogorsk (ProdDoctorov, 32top, Yandex suggestions):

### Already written (3 articles):
1. ~~`chto-delat-esli-bolit-zub-nochyu`~~ — "болит зуб что делать" (FAQ)
2. ~~`implantaciya-zubov-vidy-ceny`~~ — "имплантация зубов магнитогорск цена" (Услуга)
3. ~~`kogda-vesti-rebenka-k-stomatologu`~~ — "детский стоматолог магнитогорск" (Детская)

### Batch 1: Commercial queries (high priority, 7 articles)

| # | Slug | Target queries | Category | Archive source |
|---|------|---------------|----------|----------------|
| 4 | `professionalnaya-chistka-zubov` | профчистка магнитогорск, air flow цена, чистка зубов стоимость | Гигиена | Проф. гигиена (12 постов) |
| 5 | `otbelivanie-zubov-vidy` | отбеливание зубов магнитогорск, zoom цена, виды отбеливания | Услуга | Отбеливание (7 постов) |
| 6 | `brekety-ili-elainry` | брекеты магнитогорск цена, элайнеры, исправление прикуса | Ортодонтия | Брекеты (4 поста) |
| 7 | `zubnye-koronki-materialy` | коронки магнитогорск цена, виды коронок, металлокерамика | Услуга | Лечение: коронки (3 поста) |
| 8 | `udalenie-zuba-mudrosti` | удаление зуба мудрости магнитогорск, больно ли | FAQ | Лечение: зубы мудрости (3 поста) |
| 9 | `viniry-plyusy-minusy` | виниры магнитогорск цена, плюсы минусы, сколько служат | Услуга | Виниры (6 постов) |
| 10 | `lechenie-kariesa-magnitogorsk` | лечение кариеса магнитогорск цена, виды кариеса, пломба | Услуга | Лечение: кариес (5 постов) |

### Batch 2: Info queries (medium priority, 7 articles)

| # | Slug | Target queries | Category | Archive source |
|---|------|---------------|----------|----------------|
| 11 | `kak-vybrat-stomatologiyu-magnitogorsk` | как выбрать стоматологию, на что обращать внимание | Гайд | О клинике (10 постов) |
| 12 | `karies-u-detey-profilaktika` | кариес у ребенка, профилактика, молочные зубы | Детская | Дети (10 постов) |
| 13 | `lechenie-desen-parodontit` | пародонтит лечение, кровоточат десны, пародонтолог магнитогорск | Услуга | Уход: десны (5 постов) |
| 14 | `zubnaya-bol-prichiny-lechenie` | почему болит зуб, причины зубной боли, зуб под коронкой | FAQ | Лечение: боль (4 поста) |
| 15 | `pravilnaya-chistka-zubov-doma` | как правильно чистить зубы, какую щетку выбрать, зубная нить | Гигиена | Уход (44 поста — щетки, пасты, нити) |
| 16 | `protezirovanie-zubov-vidy` | протезирование зубов магнитогорск, съемные протезы, мост | Услуга | Лечение: коронки + Имплантация |
| 17 | `stomatit-prichiny-lechenie` | стоматит лечение, язвочки во рту, чем лечить | FAQ | Лечение: стоматит (2 поста) |

### Batch 3: Long-tail & trust (lower priority, 6 articles)

| # | Slug | Target queries | Category | Archive source |
|---|------|---------------|----------|----------------|
| 18 | `nalogoviy-vychet-za-lechenie-zubov` | налоговый вычет стоматология, возврат 13%, документы | Гайд | Лечение: вычет (1 пост) |
| 19 | `rebenok-boitsya-stomatologa` | ребенок боится стоматолога, как подготовить, адаптация | Детская | Дети: страх (2 поста) |
| 20 | `vrednye-privychki-dlya-zubov` | вредные привычки для зубов, что портит эмаль, напитки | Гигиена | Уход: привычки (6 постов) |
| 21 | `zapakh-izo-rta-prichiny` | неприятный запах изо рта, галитоз, причины | FAQ | Уход: запах (1 пост) |
| 22 | `ai-diagnostika-zubov` | AI диагностика стоматология, компьютерная диагностика | О клинике | AI в клинике (таблица) |
| 23 | `flyuoroz-chto-eto` | флюороз зубов, белые пятна на зубах, лечение | FAQ | Лечение: флюороз (1 пост) |

**Total: 20 new articles (23 total with existing 3)**

## Article Format (from existing articles)

```markdown
---
title: "SEO title с геозапросом Магнитогорск"
description: "Meta description ≤155 chars с ключевым запросом"
date: 2026-03-12
author: "Стоматология Престиж"
category: "Категория"
tags: ["тег1", "тег2", "магнитогорск"]
faq:
  - question: "Вопрос из поисковых подсказок?"
    answer: "Прямой ответ 2-3 предложения с конкретикой (цены, сроки)."
---

[Вступление: проблема/вопрос читателя, 2-3 предложения]

## H2 в формате вопроса (для AI-поиска)

[Ответ: первый абзац — прямой ответ, далее — развернуто]

## Следующий вопрос-заголовок

[Контент]

## Цены на [услугу] в Магнитогорске

[Таблица цен или список]

## FAQ (rendered from frontmatter)
```

## Content Rules (from memory + focus group feedback)

1. **Заголовки = выгода пациента**, не бренд оборудования
2. **Цены — конкретные**, из прайса клиники (не "от ... руб")
3. **Стерильность — НЕ преимущество**, не упоминать как USP
4. **Геозапрос** в title и первом абзаце ("в Магнитогорске")
5. **Факт-чек** — не выдумывать цифры, только из таблиц
6. **CTA** — WhatsApp +7 967 868 01 01 и телефон +7 (3519) 51-05-00
7. **Internal links** — на соответствующую страницу услуги (/uslugi/slug/)
8. **Стиль копирайтера** — разговорный, на "вы", без медицинского жаргона, с душой
9. **5-6 FAQ** в frontmatter для schema markup
10. **1500-2500 слов** на статью

---

## Task 0: Blog Page Infrastructure

**Files:**
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/blog/[...slug].astro`

**Step 1: Create blog listing page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection } from 'astro:content';

const posts = (await getCollection('blog'))
  .filter(post => !post.data.draft)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

const categories = [...new Set(posts.map(p => p.data.category))];
---

<BaseLayout
  title="Блог стоматологии Престиж — полезные статьи о здоровье зубов"
  description="Статьи о лечении, имплантации, детской стоматологии, гигиене и уходе за зубами. Полезные советы от врачей стоматологии Престиж в Магнитогорске."
>
  <Breadcrumbs items={[{ label: 'Блог' }]} />

  <section style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
    <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">Блог</h1>
    <p style="color: #666; margin-bottom: 2rem;">Полезные статьи о здоровье зубов от врачей клиники Престиж</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.5rem;">
      {posts.map(post => (
        <a href={`/blog/${post.id}/`} style="text-decoration: none; color: inherit; border: 1px solid #e5e7eb; border-radius: 12px; padding: 1.5rem; transition: box-shadow 0.2s; display: block;">
          <span style="font-size: 0.75rem; color: #3ca4cb; text-transform: uppercase; font-weight: 600;">{post.data.category}</span>
          <h2 style="font-size: 1.1rem; margin: 0.5rem 0; line-height: 1.4;">{post.data.title}</h2>
          <p style="font-size: 0.9rem; color: #666; line-height: 1.5;">{post.data.description}</p>
          <time style="font-size: 0.8rem; color: #999;" datetime={post.data.date.toISOString()}>
            {post.data.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
        </a>
      ))}
    </div>
  </section>
</BaseLayout>
```

**Step 2: Create blog article page**

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Breadcrumbs from '../../components/Breadcrumbs.astro';
import { getCollection, render } from 'astro:content';
import clinic from '../../data/clinic.json';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);

const faqSchema = post.data.faq.length > 0 ? {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": post.data.faq.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer,
    },
  })),
} : null;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": post.data.title,
  "description": post.data.description,
  "datePublished": post.data.date.toISOString(),
  "author": {
    "@type": "Dentist",
    "name": clinic.name,
    "telephone": clinic.phoneRaw,
  },
  "publisher": {
    "@type": "Dentist",
    "name": clinic.name,
  },
};

const allPosts = (await getCollection('blog'))
  .filter(p => !p.data.draft && p.id !== post.id)
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 3);
---

<BaseLayout title={post.data.title} description={post.data.description}>
  <Breadcrumbs items={[{ label: 'Блог', href: '/blog/' }, { label: post.data.title }]} />

  <article style="max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.8;">
    <header style="margin-bottom: 2rem;">
      <span style="font-size: 0.75rem; color: #3ca4cb; text-transform: uppercase; font-weight: 600;">{post.data.category}</span>
      <h1 style="font-size: 1.8rem; margin: 0.5rem 0; line-height: 1.3;">{post.data.title}</h1>
      <time style="font-size: 0.85rem; color: #999;" datetime={post.data.date.toISOString()}>
        {post.data.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
      </time>
    </header>

    <div class="blog-content">
      <Content />
    </div>

    {post.data.faq.length > 0 && (
      <section style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
        <h2 style="font-size: 1.4rem; margin-bottom: 1rem;">Частые вопросы</h2>
        {post.data.faq.map(item => (
          <details style="margin-bottom: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; padding: 1rem;">
            <summary style="cursor: pointer; font-weight: 600;">{item.question}</summary>
            <p style="margin-top: 0.75rem; color: #555;">{item.answer}</p>
          </details>
        ))}
      </section>
    )}

    <section style="margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, #3ca4cb 0%, #2b8fb5 100%); border-radius: 12px; color: white; text-align: center;">
      <h2 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Запишитесь на приём</h2>
      <p style="margin-bottom: 1rem; opacity: 0.9;">Позвоните или напишите — ответим на любые вопросы</p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="tel:+73519510500" style="background: white; color: #3ca4cb; padding: 0.75rem 1.5rem; border-radius: 50px; text-decoration: none; font-weight: 600;">+7 (3519) 51-05-00</a>
        <a href="https://wa.me/79678680101" style="background: #25D366; color: white; padding: 0.75rem 1.5rem; border-radius: 50px; text-decoration: none; font-weight: 600;">WhatsApp</a>
      </div>
    </section>

    {allPosts.length > 0 && (
      <section style="margin-top: 3rem;">
        <h2 style="font-size: 1.3rem; margin-bottom: 1rem;">Читайте также</h2>
        <div style="display: grid; gap: 1rem;">
          {allPosts.map(p => (
            <a href={`/blog/${p.id}/`} style="text-decoration: none; color: inherit; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; display: block;">
              <span style="font-size: 0.7rem; color: #3ca4cb; text-transform: uppercase;">{p.data.category}</span>
              <h3 style="font-size: 1rem; margin: 0.25rem 0;">{p.data.title}</h3>
            </a>
          ))}
        </div>
      </section>
    )}
  </article>

  {faqSchema && <script type="application/ld+json" set:html={JSON.stringify(faqSchema)} />}
  <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
</BaseLayout>
```

**Step 3: Build and verify**

Run: `cd /Users/valeria/prestige-dents && npm run build`
Expected: Build succeeds, 3 existing articles render at /blog/

**Step 4: Commit**

```bash
git add src/pages/blog/
git commit -m "feat: add blog listing and article pages"
```

---

## Task 1-7: Batch 1 — Commercial Query Articles

For each article (#4-#10), the subagent should:

### Per-article workflow:

**Step 1: Read source posts from archive**
- Fetch the relevant posts from Google Sheets `1QL0gLrpVW1Ze93GIE3w4N6Y5B3lolICPMZcmAElABAY`
- Read the corresponding service page from `src/content/services/` for prices and facts
- Read `src/data/clinic.json` for clinic details

**Step 2: Write the article**
- Create `src/content/blog/{slug}.md`
- Use the article format template above
- Target 1500-2500 words
- Include 5-6 FAQ items targeting search suggestions
- Include internal links to relevant service pages
- Include CTA block in content
- Match copywriter tone: conversational, "вы", warm, no jargon
- Include concrete prices from clinic data

**Step 3: Verify build**
Run: `cd /Users/valeria/prestige-dents && npm run build`

**Step 4: Commit**
```bash
git add src/content/blog/{slug}.md
git commit -m "content: add article — {title}"
```

### Article details:

#### Article #4: professionalnaya-chistka-zubov
- **Queries:** профчистка зубов магнитогорск, air flow цена, ультразвуковая чистка, чистка зубов стоимость
- **Archive posts:** Проф. гигиена (12 постов) — налёт, air flow, виды чисток, как часто
- **Service page:** `/uslugi/gigiena/`
- **Key prices:** Air Flow от 200₽, комплексная гигиена ~2100₽, фторирование ~1500₽
- **FAQ ideas:** как часто делать, больно ли, можно ли есть после, air flow vs ультразвук, нужна ли при брекетах

#### Article #5: otbelivanie-zubov-vidy
- **Queries:** отбеливание зубов магнитогорск, zoom цена, домашнее отбеливание, вредно ли
- **Archive posts:** Отбеливание (7 постов) — реально ли отбелить желтые, домашнее, Zoom
- **Service page:** (none — use prices from research)
- **Key prices:** ZOOM ~8999₽, внутриканальное ~1000-3000₽
- **FAQ ideas:** вредно ли для эмали, сколько держится, больно ли, можно ли при пломбах, домашнее vs кабинетное

#### Article #6: brekety-ili-elainry
- **Queries:** брекеты магнитогорск цена, элайнеры цена, до какого возраста, сколько носить
- **Archive posts:** Брекеты (4 поста) — возраст, общая инфо
- **Service page:** `/uslugi/ortodontiya/`
- **Key prices:** металлические от 25000₽, керамические от 70000₽, элайнеры от 50000₽
- **FAQ ideas:** брекеты или элайнеры что лучше, до какого возраста, сколько носить, больно ли, можно ли взрослым
- **Doctor:** Толкачева Е.В. (ортодонт)

#### Article #7: zubnye-koronki-materialy
- **Queries:** коронки на зубы магнитогорск, металлокерамика цена, циркониевые коронки
- **Archive posts:** Лечение — коронки, металлокерамика, что выпало
- **Service page:** `/uslugi/protezirovanie/`
- **Key prices:** металлокерамика от 1300₽, керамика от 15000₽, цирконий от 19000₽
- **FAQ ideas:** какие коронки лучше, сколько служат, больно ли ставить, что делать если выпала, металлокерамика vs цирконий

#### Article #8: udalenie-zuba-mudrosti
- **Queries:** удаление зуба мудрости магнитогорск, больно ли, сколько стоит, сложное удаление
- **Archive posts:** Лечение — зубы мудрости (3 поста), ограничения после удаления
- **Service page:** `/uslugi/hirurgiya/`
- **Key prices:** удаление от 1500₽, сложное от 2500₽, зуб мудрости от 1200₽
- **FAQ ideas:** больно ли удалять, что нельзя после, сколько заживает, нужно ли удалять все, когда обращаться

#### Article #9: viniry-plyusy-minusy
- **Queries:** виниры магнитогорск цена, плюсы и минусы, сколько служат, какие выбрать
- **Archive posts:** Виниры (6 постов) — срок службы, плюсы/минусы, противопоказания
- **Service page:** (none — link to ортопедия/протезирование)
- **Key prices:** от 4000₽ (композитные), керамические от 14000-19000₽
- **FAQ ideas:** средный срок, спиливают ли зубы, виниры или коронки, можно ли снять, противопоказания

#### Article #10: lechenie-kariesa-magnitogorsk
- **Queries:** лечение кариеса магнитогорск цена, пломба, виды кариеса, сколько стоит
- **Archive posts:** Лечение — кариес, виды, пломбы, сколько служит пломба (5+ постов)
- **Service page:** `/uslugi/terapiya/`
- **Key prices:** поверхностный 3900₽, средний 4700₽, глубокий 5100₽
- **FAQ ideas:** больно ли лечить, сколько служит пломба, можно ли вылечить без сверления, как понять что кариес, пломба или вкладка

---

## Task 8-14: Batch 2 — Info Query Articles

Same per-article workflow as Batch 1.

#### Article #11: kak-vybrat-stomatologiyu-magnitogorsk
- **Queries:** как выбрать стоматологию, на что обратить внимание, рейтинг стоматологий магнитогорск
- **Archive posts:** О клинике (10 постов) — почему выбрать, обман, договор
- **Angle:** 7 объективных критериев (лицензия, отзывы, оборудование, специализация, прозрачность цен, договор, первое впечатление). Не "выбирайте нас", а реальные советы
- **FAQ ideas:** где проверить лицензию, как читать отзывы, нужен ли договор, что спрашивать на консультации

#### Article #12: karies-u-detey-profilaktika
- **Queries:** кариес у ребенка, профилактика кариеса дети, бутылочный кариес, фторирование детям
- **Archive posts:** Дети (10 постов) — молочные зубы, налет Пристли, пульпит молочного
- **Service page:** `/uslugi/detskaya-stomatologiya/`
- **Doctor:** Крафт Н.Л.
- **FAQ ideas:** с какого возраста лечить, лечить ли молочные зубы, серебрение или фторирование, причины кариеса у малышей

#### Article #13: lechenie-desen-parodontit
- **Queries:** пародонтит лечение, кровоточат десны что делать, пародонтолог магнитогорск
- **Archive posts:** Уход — десны, рецессия, гнойник, кровоточивость (5+ постов)
- **Service page:** `/uslugi/parodontologiya/`
- **Equipment:** аппарат Вектор
- **FAQ ideas:** чем отличается гингивит от пародонтита, можно ли вылечить дома, десны кровоточат при чистке — нормально ли

#### Article #14: zubnaya-bol-prichiny-lechenie
- **Queries:** болит зуб под коронкой, болит зуб после лечения, вся челюсть болит
- **Archive posts:** Лечение — боль под коронкой, боль после лечения, боль в челюсти (4+ поста)
- **Internal link:** `/blog/chto-delat-esli-bolit-zub-nochyu/`
- **FAQ ideas:** почему болит после пломбы, норма ли боль после лечения, как отличить пульпит от кариеса

#### Article #15: pravilnaya-chistka-zubov-doma
- **Queries:** как правильно чистить зубы, какую щетку выбрать, зубная нить, ершик
- **Archive posts:** Уход (44 поста!) — щетки, пасты, нити, ершики, ополаскиватели, электрические щетки
- **Angle:** Полный гид по домашней гигиене — огромная база из архива
- **FAQ ideas:** электрическая или обычная, нужна ли нить, как часто менять щетку, нужен ли ополаскиватель

#### Article #16: protezirovanie-zubov-vidy
- **Queries:** протезирование зубов магнитогорск, съемные протезы цена, мост или имплант
- **Archive posts:** Лечение — металлокерамика, пломба vs вкладка + Имплантация — мост vs имплант
- **Service page:** `/uslugi/protezirovanie/`
- **Key prices:** бюгельный 18000₽, нейлоновый 16500₽, акриловый 9000₽
- **FAQ ideas:** съемные или несъемные, мост или имплант, сколько служит протез, как привыкнуть

#### Article #17: stomatit-prichiny-lechenie
- **Queries:** стоматит лечение, язвочки во рту, стоматит у взрослых
- **Archive posts:** Лечение — стоматит, свищ (2 поста)
- **FAQ ideas:** заразен ли, чем лечить дома, когда к врачу, стоматит у ребенка

---

## Task 15-20: Batch 3 — Long-tail & Trust Articles

Same per-article workflow as Batch 1.

#### Article #18: nalogoviy-vychet-za-lechenie-zubov
- **Queries:** налоговый вычет за стоматологию, возврат 13% за лечение зубов, какие документы
- **Archive posts:** Лечение — налоговый вычет (1 пост)
- **Angle:** пошаговая инструкция + список документов, которые даёт клиника
- **ВАЖНО:** факт-чек актуальных лимитов (150 000₽ обычное, без лимита — дорогостоящее)
- **FAQ ideas:** сколько можно вернуть, за кого можно получить, какие документы нужны, за имплантацию — обычное или дорогостоящее

#### Article #19: rebenok-boitsya-stomatologa
- **Queries:** ребенок боится стоматолога, как подготовить ребенка, адаптационный визит
- **Archive posts:** Дети — страх, адаптация (2 поста)
- **USP клиники:** адаптационные визиты, цветные пломбы, игровой подход, монетки за храбрость
- **FAQ ideas:** с какого возраста лечить, нужен ли наркоз, что делать если плачет, седация для детей

#### Article #20: vrednye-privychki-dlya-zubov
- **Queries:** вредные привычки для зубов, какие напитки портят зубы, вредно ли грызть семечки
- **Archive posts:** Уход — вредные привычки, напитки, кислые продукты, курение, жвачка (6+ постов)
- **FAQ ideas:** можно ли пить кофе, вредна ли жвачка, портит ли лимон эмаль, вредно ли отбеливание содой

#### Article #21: zapakh-izo-rta-prichiny
- **Queries:** неприятный запах изо рта, галитоз причины, как избавиться
- **Archive posts:** Уход — галитоз (1 пост) + чистка языка + кровоточивость десен
- **FAQ ideas:** из-за чего запах, к какому врачу идти, связано ли с желудком, как проверить есть ли запах

#### Article #22: ai-diagnostika-zubov
- **Queries:** AI диагностика стоматология, компьютерная диагностика зубов, Diagnocat
- **Source:** таблица "AI в клинике" из Google Sheets
- **USP:** DianApp (гигиена) + Diagnocat (КЛКТ) — уникально для Магнитогорска
- **Angle:** как AI помогает врачу поставить точный диагноз (не заменяет, а помогает)
- **FAQ ideas:** точнее ли AI чем врач, где в магнитогорске есть AI диагностика, как работает Diagnocat

#### Article #23: flyuoroz-chto-eto
- **Queries:** флюороз зубов, белые пятна на эмали, лечение флюороза
- **Archive posts:** Лечение — флюороз (1 пост)
- **Angle:** актуально для Магнитогорска (промышленный город, вода)
- **FAQ ideas:** опасен ли флюороз, можно ли отбелить, связано ли с водой, нужны ли виниры

---

## Task 21: Focus Group Validation

After all articles are written:

**Step 1: Run prestige-focus-group skill on a sample of 5 articles**
- Pick 1 article from each batch + 2 existing articles
- Evaluate: понятность, доверие, желание позвонить, ценность контента

**Step 2: Fix any issues found by focus group**

**Step 3: Final build verification**
Run: `cd /Users/valeria/prestige-dents && npm run build`
Expected: All 23 blog posts render correctly

---

## Task 22: Update Google Sheets & GitHub

**Step 1: Update blog plan in Google Sheets**
- Mark all 20 articles as written in the Блог sheet
- Add slugs, dates, categories

**Step 2: Update context issue**
```bash
gh issue comment 1 --repo valery-om/prestige-dents --body "Phase 4 Blog: 20 articles written and validated"
```

**Step 3: Update board status**

---

## Execution Notes

- **Parallelization:** Articles within a batch are independent — can be written by parallel subagents (3-4 at a time)
- **Archive reading:** Each subagent reads only the relevant category posts from the Google Sheet
- **Style extraction:** First subagent extracts 5-7 style markers from archive to share with others
- **Fact-check:** Prices must match clinic data (service pages + price sheet). Do NOT invent prices
- **Focus group:** Run after batch 1, iterate if needed before batches 2-3
