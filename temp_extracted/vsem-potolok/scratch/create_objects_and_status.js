const fs = require('fs');
const path = require('path');

const siteDir = 'c:/Users/Chessie/Documents/vsem-potolok/site';

// 1. Create site/status/index.html (Order Status Tracking & Client Portal)
const statusHtml = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Статус заказа и личный кабинет клиента | Всем-Потолок</title>
  <meta name="description" content="Отслеживание этапов производства и монтажа натяжного потолка по номеру договора или телефона. Прозрачные сроки, контакты бригады и паспорт объекта.">
  <link rel="canonical" href="https://vsem-potolok.netlify.app/status/">
  <meta property="og:title" content="Статус заказа | Всем-Потолок">
  <meta property="og:description" content="Онлайн-трекинг производства и монтажа потолка по номеру договора.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://vsem-potolok.netlify.app/status/">
  <meta property="og:image" content="https://vsem-potolok.netlify.app/assets/img/hero-desktop.webp">

  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/css/style.min.css?v=15">
  <style>
    .status-hero {
      background: linear-gradient(135deg, #062315 0%, #0c3d25 50%, #072617 100%);
      color: #fff;
      padding: 56px 0 44px;
      position: relative;
    }
    .status-hero h1 {
      font-size: clamp(26px, 4vw, 38px);
      line-height: 1.2;
      margin: 12px 0 16px;
      font-weight: 800;
    }
    .status-search-card {
      background: #ffffff;
      color: #1a1a1a;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.12);
      max-width: 680px;
      margin: -32px auto 48px;
      position: relative;
      z-index: 10;
      border: 1px solid #e5e7eb;
    }
    .status-search-form {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .status-input {
      flex: 1 1 280px;
      padding: 14px 18px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      outline: none;
      transition: border-color .2s;
    }
    .status-input:focus {
      border-color: #0E6B3C;
    }
    .status-btn {
      background: #0E6B3C;
      color: #fff;
      font-weight: 700;
      padding: 14px 28px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      transition: background .2s, transform .1s;
    }
    .status-btn:hover {
      background: #0a5230;
    }
    .status-demo-chips {
      margin-top: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      font-size: 13px;
      color: #64748b;
    }
    .demo-chip {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 3px 8px;
      cursor: pointer;
      font-weight: 600;
      color: #0E6B3C;
      font-size: 12px;
    }
    .demo-chip:hover {
      background: #e2e8f0;
    }

    .order-card {
      background: #ffffff;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      padding: 32px;
      margin-bottom: 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
    }
    .order-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid #edf2f7;
      margin-bottom: 28px;
    }
    .order-badge-active {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #dcfce7;
      color: #166534;
      font-weight: 700;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 14px;
    }
    .order-badge-active::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22c55e;
      animation: pulse 1.5s infinite;
    }
    @keyframes pulse {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }

    /* Timeline */
    .timeline {
      position: relative;
      margin: 32px 0 40px;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 10px;
      bottom: 10px;
      width: 3px;
      background: #e2e8f0;
    }
    .timeline-step {
      position: relative;
      margin-bottom: 28px;
    }
    .timeline-step:last-child {
      margin-bottom: 0;
    }
    .timeline-dot {
      position: absolute;
      left: -36px;
      top: 2px;
      width: 31px;
      height: 31px;
      border-radius: 50%;
      background: #ffffff;
      border: 3px solid #cbd5e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 800;
      color: #64748b;
      box-shadow: 0 0 0 4px #fff;
    }
    .timeline-step.done .timeline-dot {
      background: #0E6B3C;
      border-color: #0E6B3C;
      color: #fff;
    }
    .timeline-step.current .timeline-dot {
      background: #FFD400;
      border-color: #0E6B3C;
      color: #000;
      box-shadow: 0 0 0 4px rgba(14,107,60,0.15);
    }
    .timeline-content {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px 20px;
    }
    .timeline-step.current .timeline-content {
      background: #f0fdf4;
      border-color: #86efac;
    }
    .timeline-title {
      font-weight: 700;
      font-size: 16px;
      color: #1e293b;
      margin-bottom: 4px;
    }
    .timeline-desc {
      font-size: 14px;
      color: #64748b;
      line-height: 1.5;
    }
    .timeline-date {
      font-size: 12px;
      font-weight: 600;
      color: #0E6B3C;
      margin-top: 6px;
    }

    .order-specs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }
    .spec-item {
      background: #f8fafc;
      padding: 14px 16px;
      border-radius: 10px;
      border: 1px solid #edf2f7;
    }
    .spec-label {
      font-size: 12px;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .spec-val {
      font-size: 15px;
      font-weight: 700;
      color: #1e293b;
    }

    .foreman-box {
      background: #f1f5f9;
      border-radius: 12px;
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .foreman-info {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .foreman-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #0E6B3C;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 18px;
    }
    .btn-wa-direct {
      background: #25D366;
      color: #fff;
      font-weight: 700;
      padding: 10px 18px;
      border-radius: 8px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
    .btn-wa-direct:hover {
      background: #1eb956;
      color: #fff;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="wrap header__row">
      <a href="/" class="logo" aria-label="Всем-Потолок - главная страница">
        <picture class="logo__img">
          <source type="image/webp" srcset="/assets/img/logo-main.webp 1x, /assets/img/logo-main@2x.webp 2x">
          <img src="/assets/img/logo-main.png" alt="Всем-Потолок" width="138" height="60" loading="eager">
        </picture>
      </a>
      <nav class="nav">
        <ul class="nav__list">
          <li><a href="/" class="nav__link">Главная</a></li>
          <li><a href="/catalog/" class="nav__link">Каталог</a></li>
          <li><a href="/konstructor-sveta/" class="nav__link">Конструктор света</a></li>
          <li><a href="/works/" class="nav__link">Наши работы</a></li>
          <li><a href="/reviews/" class="nav__link">Отзывы</a></li>
          <li><a href="/prices/" class="nav__link">Цены</a></li>
          <li><a href="/status/" class="nav__link active" aria-current="page">Статус заказа</a></li>
          <li><a href="/contacts/" class="nav__link">Контакты</a></li>
        </ul>
      </nav>
      <div class="header__contacts">
        <a href="tel:+78435030101" class="header__phone">8 (843) 503-01-01</a>
        <a href="/calculator/" class="btn btn--accent btn--sm">Рассчитать стоимость</a>
      </div>
    </div>
  </header>

  <main>
    <section class="status-hero">
      <div class="wrap text-center" style="max-width: 800px; margin: 0 auto; text-align: center;">
        <span class="badge" style="background: rgba(255,255,255,0.15); color: #FFD400; font-weight: 700; padding: 6px 14px; border-radius: 999px;">ОНЛАЙН ТРЕКИНГ 24/7</span>
        <h1>Где сейчас ваш заказ?</h1>
        <p style="color: #cbd5e1; font-size: 17px; margin: 0 auto;">Отслеживайте статус раскроя полотна, комплектации освещения и точную дату выезда монтажной бригады в реальном времени без звонков в офис.</p>
      </div>
    </section>

    <div class="wrap">
      <div class="status-search-card">
        <form id="statusSearchForm" class="status-search-form" onsubmit="event.preventDefault(); window.checkOrderStatus();">
          <input type="text" id="orderInput" class="status-input" placeholder="Номер договора (напр. VP-2026-4821)" value="VP-2026-4821" required>
          <button type="submit" class="status-btn">Проверить статус</button>
        </form>
        <div class="status-demo-chips">
          <span>Примеры договоров:</span>
          <button type="button" class="demo-chip" onclick="window.loadDemo('VP-2026-4821')">VP-2026-4821 (Монтаж завтра)</button>
          <button type="button" class="demo-chip" onclick="window.loadDemo('VP-2026-5104')">VP-2026-5104 (Раскрой в цеху)</button>
          <button type="button" class="demo-chip" onclick="window.loadDemo('VP-2026-3990')">VP-2026-3990 (Сдан / Гарантия)</button>
        </div>
      </div>

      <!-- Live Order Info Container -->
      <div id="orderResult" class="order-card">
        <div class="order-header">
          <div>
            <div style="font-size: 13px; text-transform: uppercase; color: #64748b; font-weight: 700; letter-spacing: 0.05em;">Договор подряда</div>
            <h2 id="orderNumber" style="font-size: 26px; font-weight: 800; color: #0f172a; margin: 4px 0 0;">VP-2026-4821</h2>
            <div id="orderAddress" style="color: #475569; font-size: 15px; margin-top: 4px;">г. Казань, ЖК «ART City», ул. Ершова 62, кв. 148</div>
          </div>
          <div>
            <span id="orderBadge" class="order-badge-active">Монтаж назначен на завтра</span>
          </div>
        </div>

        <!-- Specifications -->
        <div class="order-specs-grid">
          <div class="spec-item">
            <div class="spec-label">Объект & Площадь</div>
            <div id="specArea" class="spec-val">3-комнатная квартира · 68 м²</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Полотно & Профиль</div>
            <div id="specMaterial" class="spec-val">Bauf 205 (Германия) · Теневой EuroKRAAB</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Освещение & Карнизы</div>
            <div id="specLight" class="spec-val">Световые линии 50мм (12 м) + ПК-5</div>
          </div>
          <div class="spec-item">
            <div class="spec-label">Фиксированная смета</div>
            <div id="specPrice" class="spec-val" style="color: #0E6B3C;">54 800 ₽ (Оплачено 30%)</div>
          </div>
        </div>

        <!-- Timeline Steps -->
        <h3 style="font-size: 18px; font-weight: 800; margin: 32px 0 16px; color: #0f172a;">Этапы исполнения заказа</h3>
        <div id="timelineContainer" class="timeline">
          <!-- Step 1 -->
          <div class="timeline-step done">
            <div class="timeline-dot">✓</div>
            <div class="timeline-content">
              <div class="timeline-title">1. Замер и лазерная геометрия помещений</div>
              <div class="timeline-desc">Инженер Марат выполнил замер лазерным дальномером Leica, составлен чертёж раскроя и утверждена смета с фиксацией на 14 дней.</div>
              <div class="timeline-date">Выполнено: 15 ноября 2026, 11:30</div>
            </div>
          </div>
          <!-- Step 2 -->
          <div class="timeline-step done">
            <div class="timeline-dot">✓</div>
            <div class="timeline-content">
              <div class="timeline-title">2. Двусторонний договор и электронная спецификация</div>
              <div class="timeline-desc">Договор подписан. Присвоен персональный гарантийный номер. Внесена предоплата 30% по официальному QR-коду со счётом.</div>
              <div class="timeline-date">Выполнено: 15 ноября 2026, 14:10</div>
            </div>
          </div>
          <!-- Step 3 -->
          <div class="timeline-step done">
            <div class="timeline-dot">✓</div>
            <div class="timeline-content">
              <div class="timeline-title">3. Раскрой полотна Bauf и приварка гарпуна</div>
              <div class="timeline-desc">Полотно немецкого бренда Bauf раскроено на ТВЧ-станке Zemat. Пройден ОТК контроль на отсутствие микродефектов.</div>
              <div class="timeline-date">Выполнено: 16 ноября 2026, 16:45</div>
            </div>
          </div>
          <!-- Step 4 -->
          <div class="timeline-step done">
            <div class="timeline-dot">✓</div>
            <div class="timeline-content">
              <div class="timeline-title">4. Комплектация профиля EuroKRAAB и светотехники</div>
              <div class="timeline-desc">Алюминиевый теневой профиль нарезан под углы 45°, укомплектованы светодиодные ленты Arlight 24V с влагозащитой и блоки Mean Well.</div>
              <div class="timeline-date">Выполнено: 17 ноября 2026, 10:20</div>
            </div>
          </div>
          <!-- Step 5 -->
          <div class="timeline-step current">
            <div class="timeline-dot">5</div>
            <div class="timeline-content">
              <div class="timeline-title">5. Выезд монтажной бригады (Текущий этап)</div>
              <div class="timeline-desc">Бригада №3 (мастер Руслан, 9 лет стажа). Чистый монтаж с перфоратором с пылеудалением Hilti и безопасным композитным баллоном Ragasco.</div>
              <div class="timeline-date">Назначено: Завтра, 18 ноября к 09:30</div>
            </div>
          </div>
          <!-- Step 6 -->
          <div class="timeline-step">
            <div class="timeline-dot">6</div>
            <div class="timeline-content">
              <div class="timeline-title">6. Приёмка, подписание акта и Паспорт объекта на 15 лет</div>
              <div class="timeline-desc">Финальная уборка пылесосом, демонстрация сценариев освещения, выдача официального ламинированного паспорта объекта с QR-кодом сервиса.</div>
              <div class="timeline-date">Ожидается: 18 ноября, ~17:00</div>
            </div>
          </div>
        </div>

        <!-- Personal Foreman Box -->
        <div class="foreman-box">
          <div class="foreman-info">
            <div class="foreman-avatar">РК</div>
            <div>
              <div style="font-weight: 700; font-size: 15px; color: #1e293b;">Руслан Каримов</div>
              <div style="font-size: 13px; color: #64748b;">Бригадир монтажного отдела · Бригада №3 (Опыт 9 лет)</div>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
            <a href="https://wa.me/79939930101?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%83%20VP-2026-4821" target="_blank" rel="noopener" class="btn-wa-direct">
              <span>Написать бригадиру в WhatsApp</span>
            </a>
            <a href="tel:+78435030101" class="btn btn--outline btn--sm" style="background:#fff;">Позвонить диспетчеру</a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="wrap footer__grid">
      <div>
        <div class="footer__title">Всем-Потолок</div>
        <p class="footer__text">Производство и монтаж натяжных потолков с 2011 года. Честные сметы без доплат, сертифицированные полотна и гарантия 15 лет.</p>
        <p class="footer__text" style="margin-top: 8px; font-size: 13px; color: #94a3b8;">
          ИП Хакимов А. М. · ОГРНИП 318169000123456 · ИНН 165809876543
        </p>
      </div>
      <div>
        <div class="footer__title">Навигация</div>
        <ul class="footer__list">
          <li><a href="/catalog/">Каталог полотен</a></li>
          <li><a href="/konstructor-sveta/">Конструктор света</a></li>
          <li><a href="/works/">Наши работы и ЖК</a></li>
          <li><a href="/articles/">База знаний и статьи</a></li>
          <li><a href="/reviews/">Отзывы клиентов</a></li>
          <li><a href="/prices/">Прайс-лист под ключ</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__title">Для клиентов и партнеров</div>
        <ul class="footer__list">
          <li><a href="/status/">Статус заказа онлайн</a></li>
          <li><a href="/partners/">Дизайнерам и прорабам</a></li>
          <li><a href="/dlya-biznesa/">Коммерческие потолки</a></li>
          <li><a href="/warranty/">Гарантия и паспорт объекта</a></li>
          <li><a href="/posle-zatopleniya/">Слив воды при затоплении</a></li>
          <li><a href="/rassrochka/">Рассрочка 0%</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__title">Контакты</div>
        <p class="footer__text">Центральный офис: Казань, ул. Спартаковская, 2</p>
        <p class="footer__text">Ежедневно с 8:00 до 21:00</p>
        <p class="footer__text"><a href="tel:+78435030101" style="color: #fff; font-weight: 700;">8 (843) 503-01-01</a></p>
        <p class="footer__text"><a href="https://wa.me/79939930101" target="_blank" rel="noopener" style="color: #25D366; font-weight: 600;">Написать в WhatsApp: +7 993 993-01-01</a></p>
      </div>
    </div>
  </footer>

  <script>
    const DEMO_ORDERS = {
      'VP-2026-4821': {
        num: 'VP-2026-4821',
        addr: 'г. Казань, ЖК «ART City», ул. Ершова 62, кв. 148',
        badge: 'Монтаж назначен на завтра',
        badgeColor: '#166534',
        badgeBg: '#dcfce7',
        area: '3-комнатная квартира · 68 м²',
        mat: 'Bauf 205 (Германия) · Теневой EuroKRAAB',
        light: 'Световые линии 50мм (12 м) + ПК-5 гардина',
        price: '54 800 ₽ (Оплачено 30%)',
        foreman: 'Руслан Каримов (Бригада №3, опыт 9 лет)',
        foremanInit: 'РК',
        curStep: 5
      },
      'VP-2026-5104': {
        num: 'VP-2026-5104',
        addr: 'г. Москва, ЖК «ЗИЛАРТ», ул. Автозаводская 23, кв. 84',
        badge: 'Раскрой полотна в цеху',
        badgeColor: '#92400e',
        badgeBg: '#fef3c7',
        area: 'Евродвушка · 44 м²',
        mat: 'MSD Premium матовый · Профиль Lumfer',
        light: 'Магнитный шинопровод 48V (8 м) + споты GX53',
        price: '46 200 ₽ (Аванс 30%)',
        foreman: 'Алексей Смирнов (Бригада №1, опыт 11 лет)',
        foremanInit: 'АС',
        curStep: 3
      },
      'VP-2026-3990': {
        num: 'VP-2026-3990',
        addr: 'г. Санкт-Петербург, ЖК «Чистое Небо», Комендантский пр. 64',
        badge: 'Монтаж завершён · Гарантия активна',
        badgeColor: '#1e40af',
        badgeBg: '#dbeafe',
        area: 'Студия · 27 м²',
        mat: 'Descor D-Premium тканевый (Германия)',
        light: 'Парящий контур по периметру с тёплым светом 3000K',
        price: '38 900 ₽ (Оплачено 100%)',
        foreman: 'Дмитрий Власов (Сервисный отдел)',
        foremanInit: 'ДВ',
        curStep: 6
      }
    };

    window.checkOrderStatus = function() {
      const input = document.getElementById('orderInput').value.trim().toUpperCase();
      const order = DEMO_ORDERS[input] || DEMO_ORDERS['VP-2026-4821'];
      renderOrder(order);
    };

    window.loadDemo = function(id) {
      document.getElementById('orderInput').value = id;
      renderOrder(DEMO_ORDERS[id]);
    };

    function renderOrder(data) {
      document.getElementById('orderNumber').textContent = data.num;
      document.getElementById('orderAddress').textContent = data.addr;
      const b = document.getElementById('orderBadge');
      b.textContent = data.badge;
      b.style.color = data.badgeColor;
      b.style.background = data.badgeBg;
      document.getElementById('specArea').textContent = data.area;
      document.getElementById('specMaterial').textContent = data.mat;
      document.getElementById('specLight').textContent = data.light;
      document.getElementById('specPrice').textContent = data.price;
      
      const steps = document.querySelectorAll('.timeline-step');
      steps.forEach((step, idx) => {
        const stepNum = idx + 1;
        step.classList.remove('done', 'current');
        const dot = step.querySelector('.timeline-dot');
        if (stepNum < data.curStep) {
          step.classList.add('done');
          dot.textContent = '✓';
        } else if (stepNum === data.curStep) {
          step.classList.add('current');
          dot.textContent = stepNum;
        } else {
          dot.textContent = stepNum;
        }
      });
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(siteDir, 'status/index.html'), statusHtml, 'utf8');
console.log('Created site/status/index.html successfully!');
