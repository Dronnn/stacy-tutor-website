# Design: Reviews via Google Sheets

## Goal
Allow visitors to submit reviews through a form on the site, store them in Google Sheets, and display approved reviews dynamically in the existing carousel.

## Architecture

```
Visitor → Form on site → Google Apps Script (POST) → Google Sheets
                                                          ↓
Site on load → Google Apps Script (GET) → approved reviews only → carousel
```

## Google Sheets (database)
Columns: `Date | Name | Who (parent/student) | Grade | City | Text | Rating (1-5) | Approved (checkbox)`

## Google Apps Script (free API)
- **POST** — accepts new review, adds row with `Approved = FALSE`
- **GET** — returns JSON with approved reviews only

## Form on site
- Button "Оставить отзыв" below the carousel
- On click: section smoothly expands (`max-height` + CSS transition), revealing the form
- On second click: form collapses back
- Fields: name, who (parent/student), grade, city, text, rating (stars)
- Styled to match the site (dark/light theme, accent color)
- After submit: form collapses, success message "Спасибо! Отзыв появится после проверки"

## Moderation
1. Review arrives → row in sheet with `Approved = ☐`
2. Owner opens Google Sheets, reads, checks ☑
3. On next page load, review appears in carousel

## Changes to site
- Remove 10 hardcoded fictional reviews
- Carousel renders dynamically from Google Sheets
- Add review submission form with expand/collapse animation
- Fallback: "Отзывов пока нет" if sheet is empty/unavailable
