const fs = require('fs');
const path = require('path');

const worksPath = 'c:/Users/Chessie/Documents/vsem-potolok/site/works/index.html';
let html = fs.readFileSync(worksPath, 'utf8');

// The ЖК section to insert right after the Before/After slider
const jkSectionHtml = `
    <!-- Интерактивная база и карта сданных объектов по ЖК (Аудит 06.C и 06.B) -->
    <section class="jk-explorer reveal" id="jk-map" style="margin: 64px 0 72px;">
      <div class="section-head" style="margin-bottom: 24px;">
        <div>
          <span class="eyebrow">География и новостройки</span>
          <h2>Мы уже работали в вашем жилом комплексе</h2>
        </div>
        <p>Наши бригады знают планировки, высоты и типы перекрытий большинства популярных ЖК. Проверьте ваш дом и активируйте <b>скидку соседа до 15%</b>.</p>
      </div>

      <!-- Фильтры ЖК -->
      <div class="jk-filter-bar" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; align-items: center;">
        <div style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-right: 6px;">Город:</div>
        <button type="button" class="btn btn--sm jk-city-btn active" data-city="all" style="background:#0E6B3C; color:#fff; border-radius:999px;">Все города (100+)</button>
        <button type="button" class="btn btn--sm btn--outline jk-city-btn" data-city="kazan" style="border-radius:999px;">Казань (48 ЖК)</button>
        <button type="button" class="btn btn--sm btn--outline jk-city-btn" data-city="moscow" style="border-radius:999px;">Москва (32 ЖК)</button>
        <button type="button" class="btn btn--sm btn--outline jk-city-btn" data-city="spb" style="border-radius:999px;">Санкт-Петербург (24 ЖК)</button>
        <button type="button" class="btn btn--sm btn--outline jk-city-btn" data-city="penza" style="border-radius:999px;">Пенза (18 ЖК)</button>
      </div>

      <!-- Поисковая строка по ЖК -->
      <div style="margin-bottom: 28px; position: relative; max-width: 540px;">
        <input type="text" id="jkSearchInput" placeholder="Поиск по названию ЖК или улице (напр. ART City, Зиларт, Спутник)..." 
               style="width: 100%; padding: 12px 18px; border: 2px solid #e2e8f0; border-radius: 12px; font-size: 15px; outline: none;">
      </div>

      <!-- Сетка ЖК карточек -->
      <div class="jk-grid" id="jkCardsGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px;">
        
        <!-- Казань: ART City -->
        <div class="jk-card" data-city="kazan" data-name="art city арт сити ершова" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04); transition: transform .2s, box-shadow .2s;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">КАЗАНЬ · СОВЕТСКИЙ Р-Н</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 14 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «ART City»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">ул. Николая Ершова, 62 · Унистрой</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Монолит-кирпич, потолки 2.75м, частые решения — теневой профиль EuroKRAAB и ниши ПК-5 под шторы.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета 1-комн. (38 м²): от 24 500 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -10%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК ART City (Казань)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Казань: Салават Купере -->
        <div class="jk-card" data-city="kazan" data-name="салават купере фаттаха залесный" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">КАЗАНЬ · КИРОВСКИЙ Р-Н</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 22 объекта</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «Салават Купере»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">ул. Нурихана Фаттаха / Наиля Юсупова</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Панельные дома, типовые планировки, идеально подходят пакеты «Вся квартира за 1 день» со спотами.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета 2-комн. (54 м²): от 29 900 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -15%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК Салават Купере (Казань)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Казань: Мой Ритм -->
        <div class="jk-card" data-city="kazan" data-name="мой ритм ахтямова мега победы" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">КАЗАНЬ · ПР. ПОБЕДЫ</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 9 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «Мой Ритм»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">ул. Сабира Ахтямова · Ак Барс Дом</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Евро-форматы с объединёнными кухнями-гостиными, световые линии 50мм и встроенные треки 48V.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета евротрёшки (65 м²): от 42 000 ₽</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -10%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК Мой Ритм (Казань)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Москва: ЗИЛАРТ -->
        <div class="jk-card" data-city="moscow" data-name="зиларт zilart автозаводская лср" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">МОСКВА · ДАНИЛОВСКИЙ</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 7 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «ЗИЛАРТ»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">ул. Автозаводская, 23 · ЛСР</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Бизнес-класс, потолки 3.10м, тканевые бесшовные полотна Descor и теневой профиль EuroKRAAB.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета квартиры (55 м²): от 68 000 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -10%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК ЗИЛАРТ (Москва)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Москва: Сердце Столицы -->
        <div class="jk-card" data-city="moscow" data-name="сердце столицы шелепиха донстрой" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">МОСКВА · ШЕЛЕПИХИНСКАЯ НАБ.</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 6 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «Сердце Столицы»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Шелепихинская набережная, 34 · Донстрой</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Панорамное остекление, монтаж контурной подсветки с плавным диммированием, немецкие полотна Bauf 205.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета квартиры (72 м²): от 79 500 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -10%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК Сердце Столицы (Москва)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Санкт-Петербург: Чистое Небо -->
        <div class="jk-card" data-city="spb" data-name="чистое небо комендантский приморский setl" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">СПБ · ПРИМОРСКИЙ Р-Н</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 11 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">ЖК «Чистое Небо»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Комендантский пр., 64 · Setl City</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Большое количество студий и 1-комн. квартир, популярно скрытое зонирование и парящие профили.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета студии (26 м²): от 19 800 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -12%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('ЖК Чистое Небо (СПб)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

        <!-- Пенза: Спутник -->
        <div class="jk-card" data-city="penza" data-name="спутник светлая терновка термодом" style="background:#fff; border:1px solid #e2e8f0; border-radius:14px; padding:20px; box-shadow:0 2px 12px rgba(0,0,0,0.04);">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
            <span style="font-size: 11px; font-weight: 800; background: #e8f1eb; color: #0E6B3C; padding: 3px 8px; border-radius: 6px;">ПЕНЗА · МКРН СПУТНИК</span>
            <span style="font-size: 12px; font-weight: 700; color: #b45309; background: #fef3c7; padding: 2px 8px; border-radius: 999px;">★ 16 объектов</span>
          </div>
          <h3 style="font-size: 18px; font-weight: 800; margin: 4px 0 6px; color: #0f172a;">Мкр-н «Спутник»</h3>
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">ул. Светлая / Радужная · Термодом</p>
          <div style="background: #f8fafc; border-radius: 8px; padding: 10px; font-size: 13px; line-height: 1.5; margin-bottom: 14px; border: 1px solid #f1f5f9;">
            <div><b>Специфика:</b> Кирпичные и монолитные новостройки. Установка надежных матовых полотен MSD с гарантией 15 лет.</div>
            <div style="margin-top: 4px; color: #0E6B3C; font-weight: 600;">Смета 1-комн. (40 м²): от 18 500 ₽ под ключ</div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 12px; color: #166534; font-weight: 700;">● Скидка соседа: -15%</span>
            <a href="#measure" class="btn btn--sm btn--accent" onclick="window.applyJkPromo('Мкр-н Спутник (Пенза)')" style="padding: 6px 14px; font-size: 13px;">Получить расчет</a>
          </div>
        </div>

      </div>
    </section>
`;

// Insert the ЖК Explorer right before the cases grid or after the BA slider
const insertTarget = '<div class="section-head reveal">\n      <div><span class="eyebrow">Реальные объекты</span><h2>Кейсы монтажей с ценами и сметами</h2></div>';
if (html.includes(insertTarget)) {
  html = html.replace(insertTarget, jkSectionHtml + '\n    ' + insertTarget);
  fs.writeFileSync(worksPath, html, 'utf8');
  console.log('Successfully injected ЖК Explorer into site/works/index.html');
} else {
  console.error('Target string not found in site/works/index.html');
}
