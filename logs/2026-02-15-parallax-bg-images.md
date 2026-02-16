# Log: Add Floating/Parallax Background Images

**Date:** 2026-02-15

## Changes Made

### 1. CSS (lines 1139-1165)
- Added `.parallax-bg-img` class with: absolute positioning, z-index 0, pointer-events none, opacity 0.08, border-radius 20px, object-fit cover, will-change transform, desaturated filter
- Dark mode variant: opacity 0.05, further desaturation and brightness reduction
- Ensured sections/hero/footer/header have z-index 1 to sit above parallax images
- Mobile responsive: hide all parallax images below 768px, except 2 marked with `.parallax-mobile-show` (shown at opacity 0.05)

### 2. HTML (lines 1170-1176)
- Added 6 `<img>` elements right after `<body>` tag, before the header
- Images use Unsplash source URLs (400px wide) with lazy loading
- Staggered vertically (350px, 1200px, 2200px, 3200px, 4200px, 5200px from top)
- Alternating left/right positioning (3%, 2% right, 1%, 3% right, 4%, 1% right)
- Slight rotations (-3deg, 4deg, -2deg, 2deg, -5deg, 3deg)
- Different parallax speeds (0.02, 0.04, 0.025, 0.05, 0.03, 0.035)
- All have aria-hidden="true" and empty alt for accessibility (decorative only)

### 3. JavaScript (lines 1815-1844)
- Replaced the old hero-only scroll listener with a combined rAF-throttled handler
- On page load: queries all `.parallax-bg-img` elements, extracts their rotation values and speed from data attributes
- On scroll: applies translateY offset (negative, based on scrollY * speed) while preserving rotation
- Hero background parallax preserved (scrollY * 0.3 for backgroundPositionY)
- Uses requestAnimationFrame throttling for smooth 60fps performance

### Images Used
1. Students studying: photo-1503676260728-1c00da094a0b
2. Classroom: photo-1580582932707-520aed937b7b
3. Child writing math: photo-1596495578065-6e0763fa1178
4. School: photo-1509062522246-3755977927d7
5. Math formulas blackboard: photo-1635070041078-e363dbe005cb
6. Kid with notebook: photo-1518133910546-b6c2fb7d79e0
