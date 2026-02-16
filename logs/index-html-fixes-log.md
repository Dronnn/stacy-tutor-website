# Log: Index.html 4 visual/UX fixes

## Step 1: Fix heading glass backdrop
- Changed `.section-heading-glass` background from `rgba(255,255,255,0.6)` to `rgba(255,255,255,0.35)`
- Dark mode background changed to `rgba(29,29,31,0.35)`
- Padding reduced from `12px 28px` to `8px 20px`
- Backdrop-filter changed to `blur(20px) saturate(1.8)` for iOS 26 liquid glass feel
- Added inner glow box-shadow: `inset 0 0 0 0.5px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.04)`
- Dark mode box-shadow: `inset 0 0 0 0.5px rgba(255,255,255,0.08), 0 2px 8px rgba(0,0,0,0.2)`
- Border thinned to `0.5px solid rgba(255,255,255,0.25)` for both themes
- Last heading glass wrap margin-bottom changed from 64px to 48px
- File: index.html, lines ~534-568

## Step 2: Fix hero background image opacity
- Light mode: `.hero-bg-image` opacity changed from 0.04 to 0.11
- Dark mode: opacity changed from 0.02 to 0.07, brightness from 0.6 to 0.7
- Only hero section affected; all other section-bg opacities untouched
- File: index.html, lines ~287-303

## Step 3: Replace Unsplash URLs with local files
- Replaced all 10 Unsplash URLs with local `images/` paths:
  - photo-1580582932707 -> images/bg-classroom.jpg (hero)
  - photo-1503676260728 -> images/bg-students.jpg (audience)
  - photo-1635070041078 -> images/bg-math.jpg (stats)
  - photo-1524178232363 -> images/bg-teacher.jpg (about)
  - photo-1509062522246 -> images/bg-school.jpg (steps)
  - photo-1596495578065 -> images/bg-child.jpg (method)
  - photo-1427504494785 -> images/bg-library.jpg (types)
  - photo-1588072432836 -> images/bg-supplies.jpg (faq)
  - photo-1571260899304 -> images/bg-laptop.jpg (form)
- Verified zero Unsplash URLs remaining via grep
- File: index.html

## Step 4: Scroll arrows clickable + added to all sections
- Changed hero scroll from `<div>` to `<a>` with classes `hero-scroll section-scroll-arrow`
- Added `data-target="audience"` to hero arrow
- Added `.section-scroll-arrow` CSS: absolute positioned at bottom center, opacity 0.4, hover 0.7, bounce animation, dark/light color support
- Added scroll arrows to 11 sections: audience->stats, stats->about, about->steps, steps->method, method->format, format->types, types->pricing, pricing->reviews, reviews->faq, faq->contact-form, contact-form->contacts
- No arrow on contacts section (last before footer)
- Added JS click handler: `querySelectorAll('.section-scroll-arrow')` with `scrollIntoView({behavior:'smooth'})`
- File: index.html
