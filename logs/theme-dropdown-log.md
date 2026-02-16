# Log: Redesign Theme Toggle into Hover Dropdown Picker

## Step 1: Add CSS styles
- Added `.theme-picker` (position: relative wrapper)
- Added `.theme-dropdown` with hidden-by-default state, translateY animation, z-index 1001
- Added `.theme-dropdown-inner` with frosted glass background matching `.accent-dropdown-inner` pattern
- Added `[data-theme="dark"] .theme-dropdown-inner` dark mode variant
- Added `.theme-picker:hover .theme-dropdown` to show on hover
- Added `.theme-option` flex row with gap, padding, border-radius, font styling
- Added `.theme-option:hover` with accent-soft background
- Added `.theme-option.active` with accent color text and bolder weight
- Added `.theme-option-icon` for emoji sizing
- All styles inserted after `.theme-icon--moon` dark rules, before accent picker CSS (line ~267)

## Step 2: Replace HTML
- Wrapped the `<button class="theme-toggle">` in a `<div class="theme-picker">` container
- Added `.theme-dropdown > .theme-dropdown-inner#themeDropdown` below the toggle button
- Inside dropdown: 3 `<button class="theme-option">` elements with `data-theme-value` attributes:
  - light (sun emoji), dark (moon emoji), system (laptop emoji)
- Changed button title from "Переключить тему" to "Тема оформления"
- Kept both SVG icons (sun/moon) exactly the same

## Step 3: Replace JavaScript
- Removed old `getStoredPreference()` function (no longer needed)
- Added `currentMode` variable to track 'light' / 'dark' / 'system'
- Added `getStoredMode()` — reads localStorage, validates value is one of the 3 modes
- Added `getEffectiveTheme(mode)` — returns actual theme ('light'/'dark') based on mode; 'system' resolves via `getSystemPreference()`
- Added `updateThemeOptions(mode)` — sets `.active` class on matching `.theme-option` button
- Added `applyMode(mode)` — stores mode (removes key for 'system'), applies effective theme, updates UI
- Initial load: reads stored mode, defaults to 'system', applies effective theme
- System preference listener: now checks `currentMode === 'system'` instead of `!getStoredPreference()`
- DOMContentLoaded: calls `updateThemeOptions(currentMode)` to mark active option
- Dropdown click handler: delegates on `#themeDropdown`, finds closest `.theme-option`, calls `applyMode()`
- Toggle button click: cycles system -> light -> dark -> system
- Kept `applyTheme()` function unchanged (sets data-theme, reapplies accent)
- All accent color code left completely intact
