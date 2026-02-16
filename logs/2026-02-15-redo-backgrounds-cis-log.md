# Log: Redo Background Images + Add CIS Countries Info

**Date:** 2026-02-15

## Overview
Two tasks: (1) Replace old tiny parallax floating images with full-width section background images using CSS pseudo-elements, (2) Add CIS countries information throughout the site.

## Task 1: Redo Background Images

### Step 1: Delete old parallax <img> elements
- Removed all 6 `<img class="parallax-bg-img">` elements from the body (lines 1171-1176)
- These were tiny 260-350px floating images with absolute positioning

### Step 2: Delete old `.parallax-bg-img` CSS
- Removed the entire `.parallax-bg-img` CSS block including:
  - `.parallax-bg-img` base styles
  - `[data-theme="dark"] .parallax-bg-img` dark mode variant
  - `.section, .hero, .footer, .header { z-index: 1 }` override
  - Mobile media query for `.parallax-bg-img`

### Step 3: Delete old parallax JS for floating images
- Removed `parallaxImages`, `parallaxData` array setup, and the floating image transform loop
- Kept the hero `backgroundPositionY` parallax effect
- Simplified the scroll handler to only handle the hero parallax

### Steps 4-6: Add new section-bg CSS
- Added `.section-bg` class with `position: relative; overflow: hidden`
- Added `.section-bg::before` pseudo-element with:
  - `background-size: cover`, `background-position: center`, `background-attachment: fixed`
  - `opacity: 0.07`, `filter: saturate(0.4)`, `z-index: 0`, `pointer-events: none`
- Dark mode: `opacity: 0.04`, `filter: saturate(0.3) brightness(0.8)`
- Mobile: `background-attachment: scroll` (iOS fix), `opacity: 0.09` (slightly higher for scroll mode)

### Step 7: Per-section background image URLs
- Added 9 unique CSS rules for section-specific background images:
  - Hero: classroom with desks
  - Audience: students studying together
  - Stats: math formulas on chalkboard
  - About: teacher at whiteboard
  - Steps: bright modern school
  - Method: child writing/studying
  - Types: students in library
  - FAQ: school supplies
  - Form: student with laptop

### Step 8: Add section-bg classes to HTML
- Added `section-bg` class to hero section
- Added `section-bg section-bg--{name}` to: audience, stats, about, steps, method, types, faq, contact-form sections

### Step 9: Content z-index
- Added `.section-bg > .container { position: relative; z-index: 1 }` to ensure all content renders above backgrounds
- Added `.section-bg > .hero-content, .section-bg > .hero-scroll-hint { position: relative; z-index: 2 }` for hero

## Task 2: Add CIS Countries Information

### Step 10: Hero section CIS subtitle
- Added a pill-shaped badge below hero-promise: "Ученики из России, Армении, Казахстана, Кыргызстана и других стран"
- Includes globe emoji and country flag emojis
- Uses glass styling consistent with hero-badge
- Has fadeInUp animation with 0.5s delay

### Step 11: "Кому подойдёт" CIS note
- Added a glass-styled banner below the audience grid
- Text: "Работаю с учениками из разных стран СНГ — Россия, Армения, Казахстан, Кыргызстан. Занятия онлайн, часовой пояс не помеха."
- Max-width 700px, centered, with reveal animation

### Step 12: "О преподавателе" bio update
- Added to existing bio paragraph: "Живу в Ереване (Армения), работаю онлайн с русскоязычными учениками из России, Армении, Казахстана, Кыргызстана и других стран СНГ."

### Step 13: Stats section new stat
- Added 5th stat item: "4+" with label "страны — география учеников" and globe emoji
- Uses `data-no-count="true"` to prevent counter animation (static display)

## Fix: Hero pseudo-element conflict
- The hero section already uses `::before` and `::after` for decorative gradient orbs
- Using `.section-bg::before` on hero would override the orb `::before`
- Solution: Removed `section-bg` class from hero, added a dedicated `<div class="hero-bg-image">` inside the hero instead
- Created `.hero-bg-image` CSS with identical styling to `.section-bg::before` but as a real element
- Added dark mode variant `[data-theme="dark"] .hero-bg-image`
- Added mobile variant in `@media (max-width: 768px)` for `background-attachment: scroll`
