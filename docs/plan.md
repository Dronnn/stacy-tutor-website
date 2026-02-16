# Plan: Index.html Content & Style Updates (2026-02-15)

## Task 1: Fix Heading Glass — Less Bright, More Spacing
- [ ] Update `.section-heading-glass` background to `rgba(255,255,255,0.15)` (light) / `rgba(29,29,31,0.15)` (dark)
- [ ] Add `margin-bottom: 56px` to `.section-heading-glass-wrap:last-of-type`
- [ ] Update border to `0.5px solid rgba(255,255,255,0.12)`
- [ ] Reduce box-shadow intensity

## Task 2: Style Name Differently — First Name vs Last Name
- [ ] Wrap "Анастасия Викторовна" and "Майер" in separate spans in hero heading
- [ ] Add CSS: `.name-first { font-weight: 400; }` and `.name-last { font-weight: 800; color: var(--color-accent); }`

## Task 3: Add New Content Sections
- [ ] A. "Бесплатное пробное занятие" — after hero, before "Кому подойдёт"
- [ ] B. "Программы обучения" — after "Методика", before "Формат занятий" (accordion)
- [ ] C. "Мифы" — after "Виды занятий", before "Цены"
- [ ] D. "Гарантии" — after "Цены", before "Отзывы"
- [ ] E. "Родителям" — after "Отзывы", before "FAQ"

## Task 4: Update Navigation & Ensure Consistency
- [ ] Update sticky header nav links if needed for new sections
- [ ] Ensure all new sections have section-bg, reveal classes, proper IDs
- [ ] Ensure accordion JS is initialized for new Programs section

---

# Plan: variant-3-bold.html — Restyle name + Add 5 new sections (2026-02-15)

## Goal
1. Restyle the hero name: "Анастасия Викторовна" (regular/lighter weight), "Майер" (weight 800, violet-to-blue gradient)
2. Add 5 new sections matching the bold gradient design variant:
   A. "Бесплатное пробное занятие" — after hero, before audience
   B. "Программы обучения" — after method, before format (accordion)
   C. "5 мифов" — after types, before pricing
   D. "Мои гарантии" — after pricing, before reviews
   E. "Родителям" — after reviews, before FAQ

## Steps

- [ ] 1. Restyle hero name: "Анастасия Викторовна" lighter, "Майер" weight 800 gradient
- [ ] 2. Add CSS for all 5 new sections + accordion for programs
- [ ] 3. Add "Бесплатное пробное занятие" section after hero
- [ ] 4. Add "Программы обучения" accordion section after method
- [ ] 5. Add "5 мифов" section after types
- [ ] 6. Add "Мои гарантии" section after pricing
- [ ] 7. Add "Родителям" section after reviews
- [ ] 8. Add JS for programs accordion functionality
- [ ] 9. Ensure reveal animations + responsive styles on all new sections

---

# Plan: Add More Informatics Content & Change 1-9 to 1-11 (2026-02-16)

## Task Overview
Expand informatics content throughout the site and change class range from 1-9 to 1-11.

## Steps

- [x] 1. Change all "1–9" / "1-9" to "1–11" / "1-11" (title, meta, hero, stats)
- [x] 2. Add 2 audience cards (ЕГЭ по информатике, Хочу программировать)
- [x] 3. Add 2 types cards (ОГЭ/ЕГЭ по информатике)
- [x] 4. Add 2 programs accordion items (ОГЭ/ЕГЭ по информатике)
- [x] 5. Add 1 method card (Практика с первого урока)
- [x] 6. Expand about section (informatics credentials)
- [x] 7. Add 3 FAQ items (informatics questions)
- [x] 8. Add 1 myth card (myth 6 about programming)
- [x] 9. Adjust grids/CSS for new card counts + reveal-delay classes
