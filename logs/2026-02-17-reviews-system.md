# Log: Dynamic Reviews via Google Sheets

## Step 1: Create Google Apps Script code
- Created `docs/google-apps-script.js` with doGet/doPost functions
- doGet: returns approved reviews as JSON (filters by column H = TRUE)
- doPost: validates input, appends row with Approved = FALSE
- Includes setup instructions in Russian comments

## Step 2-6: Implement dynamic reviews in index.html
- Removed all 10 hardcoded fictional review cards
- Added loading state "Загрузка отзывов..." inside carousel
- Added "Оставить отзыв" button with plus icon below carousel
- Added expandable form (max-height CSS transition, 0.6s ease)
- Form fields: name, who (parent/student), grade, city, star rating (radio), text
- Star rating uses RTL flex + CSS-only hover/checked states
- JS: loadReviews() fetches from API, renders cards dynamically, escapes HTML (XSS prevention)
- JS: form toggle with aria-expanded
- JS: form submit via POST (Content-Type: text/plain to avoid CORS preflight)
- JS: success message, auto-collapse after 3s, form reset
- Fallback states: empty ("Отзывов пока нет"), error, loading
- All styles support dark/light theme + accent color
- Responsive form wrapper for mobile
- Placeholder `YOUR_GOOGLE_APPS_SCRIPT_URL` left for user to replace

## Step 7: Testing
