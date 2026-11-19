const fs = require('fs');
const path = require('path');

const siteDir = 'c:/Users/Chessie/Documents/vsem-potolok/site';
const indexPath = path.join(siteDir, 'index.html');
const reviewsPath = path.join(siteDir, 'reviews/index.html');
const cssPath = path.join(siteDir, 'assets/css/style.min.css');

// 1. Refined CSS for .work and .works-grid
const modernWorkCss = `
/* ========================================================
   MODERN PREMIUM PORTFOLIO GRID & CARDS (2026 DESIGN)
   ======================================================== */
.works-grid {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 24px !important;
  margin-top: 24px !important;
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr !important;
    gap: 18px !important;
  }
}

.work {
  grid-column: auto !important;
  position: relative !important;
  display: flex !important;
  flex-direction: column !important;
  border: 1px solid #E2E8F0 !important;
  border-radius: 16px !important;
  overflow: hidden !important;
  aspect-ratio: auto !important;
  min-height: auto !important;
  background: #FFFFFF !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;
  transition: transform .25s ease, box-shadow .25s ease !important;
  margin: 0 !important;
}

.work:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1) !important;
}

/* Remove ugly brutalist red rotated number box */
.work::before {
  display: none !important;
  content: none !important;
}

.work__media {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #E2E8F0;
}

.work__media img {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  filter: none !important;
  transition: transform .4s ease !important;
}

.work:hover .work__media img {
  transform: scale(1.04) !important;
}

.work__badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  background: rgba(8, 41, 26, 0.88);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #FFD400;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 5px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 212, 0, 0.3);
}

.work__body {
  padding: 20px 22px 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #FFFFFF;
}

.work__location {
  font-size: 13px;
  font-weight: 700;
  color: #0E6B3C;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.work__title {
  font-size: 18px;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.3;
  margin: 0 0 10px;
}

.work__specs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 13.5px;
  color: #475569;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid #F1F5F9;
}

.work__specs span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.work__specs b {
  color: #1E293B;
}

.work__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.work__price-box {
  display: flex;
  flex-direction: column;
}

.work__price-label {
  font-size: 11px;
  text-transform: uppercase;
  color: #64748B;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.work__price-val {
  font-size: 20px;
  font-weight: 900;
  color: #0E6B3C;
  letter-spacing: -0.01em;
}

.work__cta-btn {
  background: #0E6B3C;
  color: #FFFFFF;
  font-size: 13.5px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background .2s, transform .15s;
}

.work__cta-btn:hover {
  background: #0A5230;
  transform: translateY(-1px);
}
`;

// Append CSS to style.min.css
let css = fs.readFileSync(cssPath, 'utf8');
css += '\n' + modernWorkCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended modernWorkCss to style.min.css');

// 2. New 4 Modern Portfolio Cards for index.html
const newWorksGridHtml = `
    <div class="works-grid works-grid--home">
      <!-- Card 1: EuroKRAAB Living -->
      <article class="work reveal">
        <div class="work__media">
          <img src="/assets/img/work-eurokraab-living.jpg" width="1200" height="750" loading="lazy" alt="Гостиная с теневым потолком EuroKRAAB и магнитными треками">
          <span class="work__badge">Теневой EuroKRAAB</span>
        </div>
        <div class="work__body">
          <div class="work__location">Казань · ЖК «ART City»</div>
          <h3 class="work__title">Гостиная 24 м² с теневым зазором и магнитным треком</h3>
          <div class="work__specs">
            <span><b>Полотно:</b> Bauf 205 (Германия)</span>
            <span><b>Свет:</b> Трек 48V (7м)</span>
            <span><b>Срок:</b> 5 часов</span>
          </div>
          <div class="work__foot">
            <div class="work__price-box">
              <span class="work__price-label">Смета под ключ:</span>
              <span class="work__price-val">26 400 ₽</span>
            </div>
            <button type="button" class="work__cta-btn" data-modal-open="measure">Хочу такой же</button>
          </div>
        </div>
      </article>

      <!-- Card 2: Light Lines Kitchen -->
      <article class="work reveal">
        <div class="work__media">
          <img src="/assets/img/work-light-lines-kitchen.jpg" width="1200" height="750" loading="lazy" alt="Кухня со световыми линиями 50 мм">
          <span class="work__badge">Световые линии</span>
        </div>
        <div class="work__body">
          <div class="work__location">Москва · ЖК «ЗИЛАРТ»</div>
          <h3 class="work__title">Кухня-столовая 19 м² с геометрическими световыми линиями</h3>
          <div class="work__specs">
            <span><b>Полотно:</b> MSD Premium матовое</span>
            <span><b>Свет:</b> Линии 50мм (6.5м)</span>
            <span><b>Срок:</b> 1 день</span>
          </div>
          <div class="work__foot">
            <div class="work__price-box">
              <span class="work__price-label">Смета под ключ:</span>
              <span class="work__price-val">29 800 ₽</span>
            </div>
            <button type="button" class="work__cta-btn" data-modal-open="measure">Хочу такой же</button>
          </div>
        </div>
      </article>

      <!-- Card 3: Floating Bedroom -->
      <article class="work reveal">
        <div class="work__media">
          <img src="/assets/img/work-floating-bedroom.jpg" width="1200" height="750" loading="lazy" alt="Спальня с парящим потолком и скрытым карнизом">
          <span class="work__badge">Парящий с подсветкой</span>
        </div>
        <div class="work__body">
          <div class="work__location">Казань · ЖК «Мой Ритм»</div>
          <h3 class="work__title">Спальня 16 м²: парящий контур и скрытый карниз ПК-5</h3>
          <div class="work__specs">
            <span><b>Полотно:</b> Ткань Descor D-Premium</span>
            <span><b>Свет:</b> LED 3000K + ниша</span>
            <span><b>Срок:</b> 4 часа</span>
          </div>
          <div class="work__foot">
            <div class="work__price-box">
              <span class="work__price-label">Смета под ключ:</span>
              <span class="work__price-val">34 500 ₽</span>
            </div>
            <button type="button" class="work__cta-btn" data-modal-open="measure">Хочу такой же</button>
          </div>
        </div>
      </article>

      <!-- Card 4: Track Studio -->
      <article class="work reveal">
        <div class="work__media">
          <img src="/assets/img/work-track-studio.jpg" width="1200" height="750" loading="lazy" alt="Студия с дизайнерским освещением">
          <span class="work__badge">Квартира под ключ</span>
        </div>
        <div class="work__body">
          <div class="work__location">Санкт-Петербург · ЖК «Чистое Небо»</div>
          <h3 class="work__title">Студия 32 м²: зонирование спотами и панорамный переход</h3>
          <div class="work__specs">
            <span><b>Полотно:</b> Bauf сатин без шва</span>
            <span><b>Свет:</b> 10 спотов GX53</span>
            <span><b>Срок:</b> 1 день</span>
          </div>
          <div class="work__foot">
            <div class="work__price-box">
              <span class="work__price-label">Смета под ключ:</span>
              <span class="work__price-val">31 200 ₽</span>
            </div>
            <button type="button" class="work__cta-btn" data-modal-open="measure">Хочу такой же</button>
          </div>
        </div>
      </article>
    </div>
`;

// Replace in index.html
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const oldGridPattern = /<div class="works-grid works-grid--home">[\s\S]*?<\/div>/i;

if (oldGridPattern.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldGridPattern, newWorksGridHtml.trim());
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
  console.log('Replaced works-grid in index.html with 4 modern photorealistic cards!');
} else {
  console.log('Could not find old works-grid in index.html');
}

// 3. Fix header on reviews/index.html
const standardHeader = `
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
`;

let reviewsHtml = fs.readFileSync(reviewsPath, 'utf8');
const oldReviewsHeaderPattern = /<header class="header"[\s\S]*?<\/header>/i;

if (oldReviewsHeaderPattern.test(reviewsHtml)) {
  reviewsHtml = reviewsHtml.replace(oldReviewsHeaderPattern, standardHeader.trim());
  fs.writeFileSync(reviewsPath, reviewsHtml, 'utf8');
  console.log('Replaced header in reviews/index.html with standard unified green header!');
} else {
  console.log('Could not find header in reviews/index.html');
}
