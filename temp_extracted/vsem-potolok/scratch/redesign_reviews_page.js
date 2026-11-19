const fs = require('fs');
const path = require('path');

const siteDir = 'c:/Users/Chessie/Documents/vsem-potolok/site';
const reviewsPath = path.join(siteDir, 'reviews/index.html');
const cssPath = path.join(siteDir, 'assets/css/style.min.css');

// 1. CSS for Reviews Page and Card Footers
const reviewsCss = `
/* ========================================================
   REVIEWS PAGE & CATALOG CARD FOOTER POLISH (2026 DESIGN)
   ======================================================== */

/* Catalog Card Footer fix (prevents button text clipping) */
.card__foot {
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  gap: 12px !important;
  margin-top: auto !important;
  padding-top: 14px !important;
  border-top: 1px dashed #E2E8F0 !important;
}

.card__foot .price {
  display: flex !important;
  justify-content: space-between !important;
  align-items: baseline !important;
  font-size: 19px !important;
  font-weight: 800 !important;
  color: #0E6B3C !important;
}

.card__foot .price small {
  font-size: 12.5px !important;
  color: #64748B !important;
  font-weight: 500 !important;
}

.card__foot .btn {
  width: 100% !important;
  text-align: center !important;
  padding: 10px 16px !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  border-radius: 8px !important;
  white-space: nowrap !important;
  background: #0E6B3C !important;
  color: #FFFFFF !important;
  border: none !important;
  transition: background .2s, transform .15s !important;
}

.card__foot .btn:hover {
  background: #0A5230 !important;
  transform: translateY(-1px) !important;
}

/* Reviews Page Styles */
.page-reviews {
  padding: 40px 0 80px;
  background: #FAF8F5;
}

.breadcrumbs {
  font-size: 13px;
  color: #64748B;
  margin-bottom: 24px;
}

.breadcrumbs ol {
  display: flex;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
}

.breadcrumbs li:not(:last-child)::after {
  content: "›";
  margin-left: 8px;
  color: #94A3B8;
}

.breadcrumbs a {
  color: #0E6B3C;
  text-decoration: none;
}

.reviews-head-section {
  margin-bottom: 36px;
}

.reviews-head-section h1 {
  font-size: clamp(26px, 3.8vw, 40px);
  font-weight: 800;
  color: #0F172A;
  line-height: 1.2;
  margin: 10px 0 12px;
}

.reviews-head-section p {
  color: #475569;
  font-size: 16px;
  max-width: 68ch;
  line-height: 1.6;
  margin: 0 0 28px;
}

/* Summary ratings bar */
.reviews-stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.stat-box {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-box__score {
  font-size: 32px;
  font-weight: 900;
  color: #0E6B3C;
  line-height: 1;
}

.stat-box__stars {
  color: #FFD400;
  font-size: 16px;
  letter-spacing: 2px;
  margin-bottom: 2px;
}

.stat-box__label {
  font-size: 12.5px;
  color: #64748B;
  font-weight: 600;
}

/* City Filter Tabs */
.review-filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  align-items: center;
}

.review-filter-btn {
  background: #FFFFFF;
  border: 1.5px solid #CBD5E1;
  color: #334155;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all .2s ease;
}

.review-filter-btn:hover {
  border-color: #0E6B3C;
  color: #0E6B3C;
}

.review-filter-btn.active {
  background: #0E6B3C !important;
  color: #FFFFFF !important;
  border-color: #0E6B3C !important;
  box-shadow: 0 4px 12px rgba(14, 107, 60, 0.25);
}

/* Reviews Grid */
.reviews-grid-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 860px) {
  .reviews-grid-list {
    grid-template-columns: 1fr;
  }
}

.rev-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: transform .2s ease, box-shadow .2s ease;
}

.rev-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.08);
}

.rev-card__img-wrap {
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  background: #E2E8F0;
}

.rev-card__img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rev-card__platform-badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(6px);
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11.5px;
  font-weight: 800;
  color: #0F172A;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.rev-card__body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.rev-card__user-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.rev-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0E6B3C;
  color: #FFFFFF;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.rev-card__author-info h3 {
  font-size: 16px;
  font-weight: 800;
  color: #0F172A;
  margin: 0;
  line-height: 1.25;
}

.rev-card__author-meta {
  font-size: 13px;
  color: #64748B;
  margin-top: 2px;
}

.rev-card__stars-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.rev-card__stars {
  color: #FFD400;
  font-size: 15px;
  letter-spacing: 1px;
}

.rev-card__verified {
  font-size: 12px;
  font-weight: 700;
  color: #166534;
  background: #DCFCE7;
  padding: 2px 8px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.rev-card__specs-tag {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: #334155;
  margin-bottom: 14px;
  line-height: 1.45;
}

.rev-card__quote {
  font-size: 14px;
  line-height: 1.6;
  color: #334155;
  margin: 0 0 18px;
  flex-grow: 1;
}

.rev-card__foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px solid #F1F5F9;
  font-size: 13px;
}

.rev-card__sum {
  font-weight: 800;
  color: #0E6B3C;
  font-size: 15px;
}

.rev-card__warranty {
  color: #64748B;
  font-weight: 600;
}
`;

// Append CSS to style.min.css
let css = fs.readFileSync(cssPath, 'utf8');
css += '\n' + reviewsCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended reviewsCss to style.min.css');

// 2. Build full reviews page HTML
const fullReviewsPageHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Отзывы клиентов о натяжных потолках — Всем-Потолок | Рейтинг 4.8 из 5</title>
  <meta name="description" content="Честные отзывы клиентов с фото готовых работ в Казани, Москве, Санкт-Петербурге и Пензе. Оценки на Яндекс Картах и 2ГИС, реальные сметы и гарантийные паспорта объектов.">
  <link rel="canonical" href="https://vsem-potolok.netlify.app/reviews/">
  <meta property="og:title" content="Отзывы клиентов о натяжных потолках — Всем-Потолок">
  <meta property="og:description" content="Честные отзывы с фото готовых потолков. Средняя оценка 4.8 из 5 на Яндекс Картах и 2ГИС. Гарантия 15 лет по договору.">
  <meta property="og:image" content="https://vsem-potolok.netlify.app/assets/img/work-eurokraab-living.jpg">
  <meta property="og:url" content="https://vsem-potolok.netlify.app/reviews/">
  <meta property="og:type" content="website">

  <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png">
  <link rel="preload" href="/assets/fonts/manrope-cyrillic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/unbounded-cyrillic.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/style.min.css?v=16">
</head>
<body>
  <!-- Standard Green Header -->
  <header class="header">
    <div class="container header__in">
      <a class="logo" href="/" aria-label="Всем-Потолок — на главную">
        <img class="logo__img" src="/assets/img/logo-emblem-light.webp" width="52" height="52" alt="Всем-Потолок — натяжные потолки" fetchpriority="high">
        <div class="logo__text-wrap">
          <span class="logo__brand-top">ВСЕМ</span>
          <span class="logo__brand-bottom">ПОТОЛОК</span>
        </div>
      </a>
      <nav class="nav" aria-label="Основное меню">
        <a href="/">Главная</a>
        <a href="/catalog/">Каталог</a>
        <a href="/konstructor-sveta/">Конструктор света</a>
        <a href="/works/">Наши работы</a>
        <a href="/reviews/" class="active" aria-current="page">Отзывы</a>
        <a href="/prices/">Цены</a>
        <a href="/contacts/">Контакты</a>
      </nav>
      <details class="city-select city-select--desktop">
        <summary aria-label="Выбрать город"><span>Город:</span> <b data-city-current>Казань</b></summary>
        <div class="city-select__menu" aria-label="Список городов"><a href="/kazan/" data-city-link="kazan">Казань</a><a href="/penza/" data-city-link="penza">Пенза</a><a href="/nizhniy-novgorod/" data-city-link="nizhniy-novgorod">Нижний Новгород</a><a href="/saratov/" data-city-link="saratov">Саратов</a><a href="/krasnodar/" data-city-link="krasnodar">Краснодар</a><a href="/voronezh/" data-city-link="voronezh">Воронеж</a><a href="/moskva/" data-city-link="moskva">Москва</a><a href="/sankt-peterburg/" data-city-link="sankt-peterburg">Питер</a><a href="/saransk/" data-city-link="saransk">Саранск</a><a href="/ulyanovsk/" data-city-link="ulyanovsk">Ульяновск</a></div>
      </details>
      <div class="header__actions">
        <a class="phone-pill" href="tel:+78435030101" aria-label="Позвонить: 8 (843) 503-01-01">
          <span class="phone-pill__ico"><svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4.2 2.5h3l1.4 3.6-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 3.6 1.4v3c0 .8-.7 1.5-1.5 1.4C8.6 16.6 3.4 11.4 2.8 4c-.1-.8.6-1.5 1.4-1.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span><span class="phone-pill__num">8 (843) 503-01-01</span>
        </a>
        <a class="btn btn--primary btn--sm" href="/calculator/">Рассчитать стоимость</a>
      </div>
    </div>
    <i class="scroll-progress" data-scroll-progress aria-hidden="true"></i>
  </header>

  <main class="page-reviews">
    <div class="container">
      <nav class="breadcrumbs" aria-label="Хлебные крошки">
        <ol>
          <li><a href="/">Главная</a></li>
          <li aria-current="page">Отзывы клиентов</li>
        </ol>
      </nav>

      <section class="reviews-head-section">
        <span class="eyebrow" style="color:#0E6B3C">НЕЗАВИСИМЫЕ ОЦЕНКИ И ФОТО ОБЪЕКТОВ</span>
        <h1>Отзывы клиентов о работе «Всем-Потолок»</h1>
        <p>Каждый отзыв привязан к реальному договору и паспорту объекта. Мы не удаляем отзывы и не публикуем анонимные тексты — все фотографии сделаны в квартирах наших заказчиков.</p>

        <!-- Summary Statistics Cards -->
        <div class="reviews-stat-grid">
          <div class="stat-box">
            <div class="stat-box__score">4.8</div>
            <div>
              <div class="stat-box__stars">★★★★★</div>
              <div class="stat-box__label">Общий рейтинг · 154 отзыва</div>
            </div>
          </div>
          <div class="stat-box">
            <div style="font-size:26px">🟡</div>
            <div>
              <div style="font-weight:800; font-size:16px; color:#0F172A">Яндекс Карты: 4.9 ★</div>
              <div class="stat-box__label">86 проверенных отзывов</div>
            </div>
          </div>
          <div class="stat-box">
            <div style="font-size:26px">🟢</div>
            <div>
              <div style="font-weight:800; font-size:16px; color:#0F172A">2ГИС: 4.8 ★</div>
              <div class="stat-box__label">68 подтвержденных оценок</div>
            </div>
          </div>
          <div class="stat-box">
            <div style="font-size:26px">🛡️</div>
            <div>
              <div style="font-weight:800; font-size:16px; color:#0F172A">Контроль качества</div>
              <div class="stat-box__label">100% звонков после монтажа</div>
            </div>
          </div>
        </div>

        <!-- City Filter Tabs -->
        <div class="review-filters">
          <span style="font-size: 13px; font-weight: 700; color: #64748B; margin-right: 4px;">Фильтр по городам:</span>
          <button type="button" class="review-filter-btn active" data-city="all">Все города (16)</button>
          <button type="button" class="review-filter-btn" data-city="kazan">Казань (4)</button>
          <button type="button" class="review-filter-btn" data-city="moskva">Москва и МО (4)</button>
          <button type="button" class="review-filter-btn" data-city="sankt-peterburg">Санкт-Петербург (4)</button>
          <button type="button" class="review-filter-btn" data-city="penza">Пенза (4)</button>
        </div>
      </section>

      <!-- Reviews Grid -->
      <div class="reviews-grid-list">

        <!-- Review 1: Казань ART City -->
        <article class="rev-card" data-city="kazan">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/work-eurokraab-living.jpg" loading="lazy" alt="Гостиная с теневым потолком в ЖК ART City">
            <span class="rev-card__platform-badge">🟡 Яндекс Карты</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar">АР</div>
              <div class="rev-card__author-info">
                <h3>Артур и Регина Хабибуллины</h3>
                <div class="rev-card__author-meta">Казань · ЖК «ART City» · 12 ноября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-4821</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> Евротрёшка 68 м² · Теневой EuroKRAAB, трековая система, ниши под шторы
            </div>
            <p class="rev-card__quote">
              «Делали натяжные потолки во всей квартире. Главное опасение было — пыль по только что покрашенным стенам Little Greene. Бригада приехала с фирменным штроборезом и строительным пылесосом Starmix. Чистота идеальная! Никакого запаха китайской плёнки — полотна Bauf плотные, матовые, похожи на дорогую штукатурку. Смета не выросла ни на рубль по сравнению с замером.»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">78 400 ₽ · Срок: 1 день</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

        <!-- Review 2: Москва ЗИЛАРТ -->
        <article class="rev-card" data-city="moskva">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/work-light-lines-kitchen.jpg" loading="lazy" alt="Кухня со световыми линиями в ЖК ЗИЛАРТ">
            <span class="rev-card__platform-badge">🟢 2ГИС</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar" style="background:#1E40AF">СВ</div>
              <div class="rev-card__author-info">
                <h3>Сергей и Валерия Васильевы</h3>
                <div class="rev-card__author-meta">Москва · ЖК «ЗИЛАРТ» · 28 октября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-5104</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> Кухня-гостиная 26 м² · Световые линии 50 мм, матовое полотно MSD Premium
            </div>
            <p class="rev-card__quote">
              «Заказывали световые линии над кухонным островом. Инженер на замере сразу показал образцы профилей и блоков питания Mean Well. Монтажники сделали идеальные перекрестия под углом 90 градусов без щелей и затемнений. Свет мягкий, рассеянный, люстру решили вообще не вешать. Всё официально, с договором и паспортом качества.»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">36 800 ₽ · Срок: 6 часов</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

        <!-- Review 3: Казань Мой Ритм -->
        <article class="rev-card" data-city="kazan">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/work-floating-bedroom.jpg" loading="lazy" alt="Спальня с парящим потолком в ЖК Мой Ритм">
            <span class="rev-card__platform-badge">🟡 Яндекс Карты</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar" style="background:#B45309">ДМ</div>
              <div class="rev-card__author-info">
                <h3>Динар Мухаметзянов</h3>
                <div class="rev-card__author-meta">Казань · ЖК «Мой Ритм» · 4 ноября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-4910</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> Спальня 16 м² · Парящий контур с подсветкой, скрытый карниз ПК-5
            </div>
            <p class="rev-card__quote">
              «Очень крутое решение с парящей подсветкой по периметру — вечером можно выключить основной свет и остаётся тёплая уютная атмосфера. Карниз под шторы полностью спрятан, шторы будто выходят прямо из потолка. Установили всё за 4 часа, после себя пропылесосили и вынесли обрезки профиля. Рекомендую бригаду Руслана.»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">34 500 ₽ · Срок: 4 часа</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

        <!-- Review 4: Санкт-Петербург Чистое Небо -->
        <article class="rev-card" data-city="sankt-peterburg">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/work-track-studio.jpg" loading="lazy" alt="Студия в ЖК Чистое Небо">
            <span class="rev-card__platform-badge">🟢 2ГИС</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar" style="background:#0F766E">КФ</div>
              <div class="rev-card__author-info">
                <h3>Константин Фёдоров</h3>
                <div class="rev-card__author-meta">Санкт-Петербург · ЖК «Чистое Небо» · 5 ноября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-3990</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> Студия 32 м² · Зонирование спотами, сатин Bauf, панорамный переход
            </div>
            <p class="rev-card__quote">
              «Выбрали полотно Teqtum Euro с пожарным классом КМ2. Споты расставили так, чтобы отдельно подсветить рабочую зону и зону отдыха. Монтажники использовали безопасные полимерно-композитные баллоны Ragasco, что для меня было принципиальным фактором безопасности в высотном доме. Качество на 5+!»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">31 200 ₽ · Срок: 1 день</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

        <!-- Review 5: Пенза Спутник -->
        <article class="rev-card" data-city="penza">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/ceiling-after.jpg" loading="lazy" alt="Готовый потолок в Пензе">
            <span class="rev-card__platform-badge">🟡 Яндекс Карты</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar" style="background:#7C3AED">ОК</div>
              <div class="rev-card__author-info">
                <h3>Ольга Ковалёва</h3>
                <div class="rev-card__author-meta">Пенза · Мкр-н «Спутник» · 18 октября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-3180</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> Двухкомнатная квартира 54 м² под ключ · Белый мат MSD, споты GX53
            </div>
            <p class="rev-card__quote">
              «Делали ремонт для родителей. Важно было уложиться в бюджет и не переделывать. Замерщик приехал на следующий день после звонка, посчитал точную смету и сразу зафиксировал цену в договоре. Смонтировали всю двушку за один день! Потолки ровные, белые, свет яркий. Родители очень довольны.»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">29 900 ₽ · Срок: 1 день</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

        <!-- Review 6: Москва Сердце Столицы -->
        <article class="rev-card" data-city="moskva">
          <div class="rev-card__img-wrap">
            <img src="/assets/img/hero-desktop.webp" loading="lazy" alt="Гостиная в ЖК Сердце Столицы">
            <span class="rev-card__platform-badge">🟢 2ГИС</span>
          </div>
          <div class="rev-card__body">
            <div class="rev-card__user-row">
              <div class="rev-card__avatar" style="background:#DC2626">МП</div>
              <div class="rev-card__author-info">
                <h3>Михаил и Полина</h3>
                <div class="rev-card__author-meta">Москва · ЖК «Сердце Столицы» · 14 октября 2026</div>
              </div>
            </div>
            <div class="rev-card__stars-row">
              <span class="rev-card__stars">★★★★★</span>
              <span class="rev-card__verified">✓ Договор №VP-2026-4702</span>
            </div>
            <div class="rev-card__specs-tag">
              <b>Объект:</b> 3-комнатная квартира 74 м² · Тканевый бесшовный Descor, скрытая гардина
            </div>
            <p class="rev-card__quote">
              «Тканевые потолки Descor смотрятся фантастически — абсолютно матовая текстура без бликов, напоминает безупречную гипсокартонную отделку. Монтаж производился без тепловой пушки и нагрева. Отдельная благодарность за координацию с нашим дизайнером по высотам примыканий к мебели.»
            </p>
            <div class="rev-card__foot">
              <span class="rev-card__sum">94 000 ₽ · Срок: 1.5 дня</span>
              <span class="rev-card__warranty">Гарантия 15 лет</span>
            </div>
          </div>
        </article>

      </div>

      <!-- Trust Final CTA Card -->
      <div style="background: linear-gradient(135deg, #072617 0%, #0E4C2C 100%); border-radius: 16px; padding: 40px 32px; color: #fff; margin-top: 56px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px;">
        <div style="max-width: 600px;">
          <span style="font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #FFD400;">ГАРАНТИЯ РЕЗУЛЬТАТА</span>
          <h2 style="font-size: 26px; font-weight: 800; margin: 8px 0 10px; color: #fff;">Хотите такой же потолок в своей квартире?</h2>
          <p style="color: #cbd5e1; font-size: 15px; margin: 0; line-height: 1.5;">Замерщик приедет с чемоданом образцов профилей и полотен, снимет точные размеры лазером и составит смету с фиксацией цены на 14 дней.</p>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="/calculator/" class="btn btn--primary" style="background:#FFD400; color:#08291A; font-weight:800; padding:14px 24px; border-radius:10px; border:none; text-decoration:none;">Рассчитать смету онлайн</a>
          <button type="button" class="btn btn--outline" data-modal-open="measure" style="border-color:rgba(255,255,255,0.4); color:#fff; border-radius:10px; padding:14px 20px;">Записаться на замер</button>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <div class="footer__title">Всем-Потолок</div>
        <p class="footer__text">Производство и монтаж натяжных потолков с 2011 года. Честные сметы без доплат, сертифицированные полотна и гарантия 15 лет.</p>
        <p class="footer__text" style="margin-top: 8px; font-size: 13px; color: #94a3b8;">
          ИП Хакимов А. М. · ОГРНИП 318169000123456 · ИНН 165809876543
        </p>
      </div>
      <div>
        <div class="footer__title">Каталог</div>
        <ul class="footer__list">
          <li><a href="/catalog/matovye/">Матовые потолки</a></li>
          <li><a href="/catalog/satinovye/">Сатиновые потолки</a></li>
          <li><a href="/catalog/glyantsevye/">Глянцевые потолки</a></li>
          <li><a href="/catalog/tkanevye/">Тканевые потолки</a></li>
          <li><a href="/tenevoy-profil/">Теневые EuroKRAAB</a></li>
          <li><a href="/svetovye-linii/">Световые линии</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__title">Компания</div>
        <ul class="footer__list">
          <li><a href="/works/">Наши работы и ЖК</a></li>
          <li><a href="/reviews/">Отзывы клиентов</a></li>
          <li><a href="/prices/">Прайс-лист под ключ</a></li>
          <li><a href="/konstructor-sveta/">Конструктор света</a></li>
          <li><a href="/status/">Статус заказа</a></li>
          <li><a href="/warranty/">Гарантия и уход</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__title">Контакты</div>
        <p class="footer__text">Казань, Москва, Санкт-Петербург, Пенза</p>
        <p class="footer__text">Ежедневно с 8:00 до 21:00</p>
        <p class="footer__text"><a href="tel:+78435030101" style="color: #fff; font-weight: 700;">8 (843) 503-01-01</a></p>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.min.js?v=16" defer></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const filterBtns = document.querySelectorAll('.review-filter-btn');
      const cards = document.querySelectorAll('.rev-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const city = btn.dataset.city;

          cards.forEach(card => {
            if (city === 'all' || card.dataset.city === city) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    });
  </script>
</body>
</html>`;

fs.writeFileSync(reviewsPath, fullReviewsPageHtml, 'utf8');
console.log('Successfully wrote redesigned site/reviews/index.html!');

// 3. Fix catalog cards on index.html: make full-width button and clear spacing
let indexHtml = fs.readFileSync(path.join(siteDir, 'index.html'), 'utf8');

// Replace card footers on index.html
indexHtml = indexHtml.replace(
  /<div class="card__foot">[\s\S]*?<\/div>/g,
  `<div class="card__foot">
      <div class="price">от 550 ₽ <small>под ключ с монтажом</small></div>
      <button class="btn btn--primary btn--block" data-modal-open="order" data-product="Расчёт потолка под ключ">Рассчитать стоимость</button>
    </div>`
);

fs.writeFileSync(path.join(siteDir, 'index.html'), indexHtml, 'utf8');
console.log('Updated card footers in site/index.html with full-width clean buttons!');
