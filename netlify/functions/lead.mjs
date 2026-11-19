const allowedForms = new Set(["measure", "call", "order", "calc"]);
const formLabels = {
  measure: "Запись на замер",
  call: "Обратный звонок",
  order: "Заявка по решению",
  calc: "Расчёт стоимости",
};

const response = (statusCode, message) =>
  new Response(JSON.stringify({ status: statusCode === 200 ? "ok" : "error", message }), {
    status: statusCode,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const text = (value, limit = 800) =>
  typeof value === "string"
    ? value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, limit)
    : "";

export default async (request) => {
  if (request.method !== "POST") {
    return response(405, "Для отправки заявки используйте форму на сайте.");
  }

  const rawBody = await request.text();
  if (rawBody.length > 16_384) return response(413, "Заявка слишком большая.");

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return response(400, "Не удалось прочитать заявку. Попробуйте ещё раз.");
  }

  // Honeypot: silently accept automated submissions without forwarding them.
  if (text(payload?.company_url, 200)) return response(200, "Заявка принята.");

  const name = text(payload?.name, 120);
  const phone = text(payload?.phone, 40);
  const phoneDigits = phone.replace(/\D/g, "");
  const formType = text(payload?.form, 40);
  if (!name || phoneDigits.length < 10 || phoneDigits.length > 15 ||
      !allowedForms.has(formType) || !["on", "true", "1"].includes(String(payload?.consent))) {
    return response(422, "Проверьте имя и номер телефона.");
  }

  const botToken = Netlify.env.get("TELEGRAM_BOT_TOKEN");
  const chatId = Netlify.env.get("TELEGRAM_CHAT_ID");
  if (!botToken || !chatId) {
    return response(503, "Приём заявок временно настраивается. Позвоните нам или напишите в WhatsApp.");
  }

  const page = text(payload?.page, 300);
  const referrer = text(payload?.referrer, 500);
  const interest = text(payload?.interest, 500);
  const calculation = text(payload?.calc, 1200);
  const slot = text(payload?.slot, 200);
  const fixPrice = payload?.fix_price ? "Да (на 14 дней)" : "";
  const utm = payload?.utm && typeof payload.utm === "object" && !Array.isArray(payload.utm)
    ? ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
      .map((key) => {
        const value = text(payload.utm[key], 120);
        return value ? `${key}: ${value}` : "";
      })
      .filter(Boolean)
      .join(", ")
    : "";
  const message = [
    "🔥 Новая заявка с сайта «Всем-Потолок»",
    `📋 Форма: ${formLabels[formType] || formType}`,
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    slot ? `⏰ Выбранное время замера: ${slot}` : "",
    fixPrice ? `🔒 Фиксация сметы: ${fixPrice}` : "",
    interest ? `🎯 Интерес: ${interest}` : "",
    calculation ? `🧮 Расчёт:\n${calculation}` : "",
    utm ? `📊 Источник: ${utm}` : "",
    referrer ? `🔗 Переход с: ${referrer}` : "",
    page ? `📄 Страница: ${page}` : "",
  ].filter(Boolean).join("\n");

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message, disable_web_page_preview: true }),
      signal: AbortSignal.timeout(8000),
    });
    const result = await telegramResponse.json();
    if (!telegramResponse.ok || !result.ok) {
      return response(502, "Не удалось передать заявку специалисту. Позвоните нам или напишите в WhatsApp.");
    }
  } catch {
    return response(502, "Не удалось передать заявку специалисту. Позвоните нам или напишите в WhatsApp.");
  }

  return response(200, "Заявка отправлена.");
};

export const config = {
  path: ["/backend/forms.php", "/.netlify/functions/lead"]
};
