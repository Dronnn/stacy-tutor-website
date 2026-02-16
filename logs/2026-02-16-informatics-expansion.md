# Log: Add More Informatics Content & Change 1-9 to 1-11

## Started: 2026-02-16

## Step 1: Change 1-9 to 1-11
- Changed title tag: 1–9 -> 1–11
- Changed meta description: 1–9 -> 1–11
- Changed hero subtitle: 1–9 -> 1–11
- Changed stats section: data-target="9" -> data-target="11", display "1–9" -> "1–11"
- Verified no remaining 1-9 instances with grep

## Step 2: Add 2 audience cards
- Added "Подготовка к ЕГЭ по информатике (10–11 класс)" card with target emoji
- Added "Хочу научиться программировать" card with rocket emoji
- Updated reveal-delay classes (delay-6, delay-7)
- Removed hardcoded delay from CIS banner (now just "reveal")

## Step 3: Add 2 types cards
- Added "Подготовка к ОГЭ по информатике" card
- Added "Подготовка к ЕГЭ по информатике" card

## Step 4: Add 2 programs accordion items
- Added "Информатика: подготовка к ОГЭ (9 класс)" with 9 items
- Added "Информатика: подготовка к ЕГЭ (10–11 класс)" with 9 items
- Increased program-answer max-height from 400px to 600px for longer lists

## Step 5: Add 1 method card
- Added "Практика с первого урока" card about informatics methodology

## Step 6: Expand about section
- Added "Информатику преподаю с 1999 года — больше 25 лет опыта"
- Added "основами робототехники" to skills
- Verified existing mentions: Yandex GPT trainer, assistant at informatics pedagogy dept, robofest participation

## Step 7: Add 3 FAQ items
- Added "Какой язык программирования лучше для ОГЭ/ЕГЭ?"
- Added "Нужен ли свой компьютер для занятий информатикой?"
- Added "Можно ли начать программирование с нуля?"

## Step 8: Add myth 6
- Added "Программирование — это только для технарей и мальчиков"
- Updated section heading from "5 мифов" to "6 мифов"

## Step 9: Adjustments
- Updated form dropdown: split ОГЭ/ЕГЭ informatics into separate options, added ЕГЭ math option
- All new elements have proper reveal animation classes
- Grids work fine with new counts (3-col grids handle 7/8 items naturally)
