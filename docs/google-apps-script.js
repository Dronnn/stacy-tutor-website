// =============================================================
// Google Apps Script: Система отзывов для сайта
// =============================================================
//
// ИНСТРУКЦИЯ ПО НАСТРОЙКЕ:
//
// 1. Создайте новую Google Таблицу (https://sheets.google.com)
//
// 2. В первой строке задайте заголовки столбцов:
//    A: Timestamp | B: Name | C: Who | D: Grade | E: City | F: Text | G: Rating | H: Approved
//
// 3. Откройте меню: Расширения > Apps Script
//
// 4. Удалите весь код по умолчанию и вставьте содержимое этого файла
//
// 5. Сохраните проект (Ctrl+S), дайте ему имя (например, "Отзывы API")
//
// 6. Нажмите "Начать развертывание" > "Новое развертывание"
//    - Тип: Веб-приложение
//    - Описание: API отзывов
//    - Выполнять как: От моего имени (Me)
//    - Доступ: Все (Anyone)
//
// 7. Нажмите "Развернуть" и разрешите доступ
//
// 8. Скопируйте URL развертывания - он понадобится для сайта
//    Формат: https://script.google.com/macros/s/XXXXXXX/exec
//
// ВАЖНО: При каждом изменении кода нужно создавать НОВОЕ развертывание
// или обновлять существующее, чтобы изменения вступили в силу.
// =============================================================

/**
 * Обработка GET-запросов: возвращает одобренные отзывы в формате JSON.
 * Фильтрует только те строки, где столбец H (Approved) = TRUE.
 */
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();

    var reviews = [];

    // Пропускаем первую строку (заголовки), начинаем с индекса 1
    for (var i = 1; i < data.length; i++) {
      var row = data[i];

      // Столбец H (индекс 7) - Approved: проверяем, что значение TRUE
      var approved = row[7];
      if (approved === true || approved === "TRUE" || approved === "true") {
        reviews.push({
          name: row[1] || "",       // B: Имя
          who: row[2] || "",        // C: Кто (родитель/ученик)
          grade: row[3] || "",      // D: Класс
          city: row[4] || "",       // E: Город
          text: row[5] || "",       // F: Текст отзыва
          rating: Number(row[6]) || 5, // G: Оценка (1-5)
          date: formatDate(row[0])  // A: Дата
        });
      }
    }

    return createJsonResponse({ success: true, reviews: reviews });

  } catch (error) {
    return createJsonResponse({ success: false, error: error.message });
  }
}

/**
 * Обработка POST-запросов: принимает новый отзыв и добавляет его в таблицу.
 * Новый отзыв добавляется с Approved = FALSE (требует модерации).
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({ success: false, error: "No data received" });
    }

    var body = JSON.parse(e.postData.contents);

    // Проверяем обязательные поля
    if (!body.name || !body.text || !body.rating) {
      return createJsonResponse({
        success: false,
        error: "Missing required fields: name, text, rating"
      });
    }

    // Валидация рейтинга
    var rating = Number(body.rating);
    if (rating < 1 || rating > 5 || isNaN(rating)) {
      return createJsonResponse({
        success: false,
        error: "Rating must be a number between 1 and 5"
      });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Добавляем новую строку:
    // A: Timestamp, B: Name, C: Who, D: Grade, E: City, F: Text, G: Rating, H: Approved
    sheet.appendRow([
      new Date(),              // A: Дата и время отправки
      body.name.toString(),    // B: Имя
      body.who || "",          // C: Кто (родитель/ученик)
      body.grade || "",        // D: Класс
      body.city || "",         // E: Город
      body.text.toString(),    // F: Текст отзыва
      rating,                  // G: Оценка (1-5)
      false                    // H: Не одобрено (требует модерации)
    ]);

    return createJsonResponse({
      success: true,
      message: "Review submitted successfully"
    });

  } catch (error) {
    return createJsonResponse({ success: false, error: error.message });
  }
}

/**
 * Создает JSON-ответ с CORS-заголовками.
 * Access-Control-Allow-Origin: * - разрешает запросы с любого домена.
 */
function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Форматирует дату в строку ДД.ММ.ГГГГ.
 * Если значение не является датой, возвращает пустую строку.
 */
function formatDate(value) {
  if (!value) return "";
  try {
    var date = new Date(value);
    if (isNaN(date.getTime())) return "";
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    return day + "." + month + "." + year;
  } catch (e) {
    return "";
  }
}
