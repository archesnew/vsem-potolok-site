const fs = require('fs');
const calcPath = 'c:/Users/Chessie/Documents/vsem-potolok/site/calculator/index.html';
let html = fs.readFileSync(calcPath, 'utf8');

const photoEstimateSection = `
    <!-- Экспресс-расчёт по фото или плану БТИ за 15 минут (Аудит 06.C) -->
    <section class="section section--alt reveal" style="background: linear-gradient(135deg, #072617 0%, #0e4c2c 100%); color: #fff; border-radius: 16px; margin: 48px auto; padding: 40px 32px; max-width: 1120px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; align-items: center;">
        <div>
          <span style="font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #FFD400; background: rgba(255,212,0,0.15); padding: 4px 10px; border-radius: 999px;">ЭКСПРЕСС-СМЕТА БЕЗ ВЫЕЗДА</span>
          <h2 style="font-size: clamp(22px, 3vw, 32px); font-weight: 800; margin: 12px 0 10px; color: #fff; line-height: 1.25;">Пришлите фото комнаты или план БТИ — сделаем расчёт за 15 минут</h2>
          <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6; margin-bottom: 20px;">
            Инженер-технолог рассчитает точный периметр, требуемое количество световых точек и предложит оптимальную фактуру полотна прямо в WhatsApp. Без навязчивых звонков.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 24px; color: #e2e8f0; font-size: 14px; display: grid; gap: 8px;">
            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #FFD400; font-weight: 800;">✓</span> Расчёт с вилкой «эконом / оптимум / премиум»</li>
            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #FFD400; font-weight: 800;">✓</span> Схема расстановки спотов или световых линий в подарок</li>
            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #FFD400; font-weight: 800;">✓</span> Фиксация скидки 10% на полотно по коду «ФОТО-СМЕТА»</li>
          </ul>
          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="https://wa.me/79939930101?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%20%D0%BF%D0%BE%D1%82%D0%BE%D0%BB%D0%BA%D0%B0%20%D0%BF%D0%BE%20%D1%84%D0%BE%D1%82%D0%BE%2F%D0%BF%D0%BB%D0%B0%D0%BD%D1%83%20%D0%91%D0%A2%D0%98.%20%D0%9A%D0%BE%D0%B4%3A%20%D0%A4%D0%9E%D0%A2%D0%9E-%D0%A1%D0%9C%D0%95%D0%A2%D0%90" 
               target="_blank" rel="noopener" 
               style="background: #25D366; color: #fff; font-weight: 700; padding: 14px 24px; border-radius: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; font-size: 15px; box-shadow: 0 4px 14px rgba(37,211,102,0.3);">
              <span>Отправить план в WhatsApp</span>
            </a>
            <button type="button" class="btn btn--outline" data-modal-open="measure" style="border-color: rgba(255,255,255,0.4); color: #fff; border-radius: 10px; padding: 14px 20px;">
              Вызвать замерщика на дом
            </button>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.06); border: 1px dashed rgba(255,255,255,0.2); border-radius: 12px; padding: 24px; text-align: center;">
          <div style="font-size: 38px; margin-bottom: 8px;">📐 📸</div>
          <div style="font-weight: 700; font-size: 16px; margin-bottom: 6px; color: #fff;">Какие фото подходят?</div>
          <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin: 0 0 16px;">
            1. План БТИ или дизайн-проект с размерами стен<br>
            2. Фото потолка из угла комнаты (чтобы видеть углы и стояки отопления)<br>
            3. Скриншот планировки от застройщика
          </p>
          <div style="font-size: 12px; color: #86efac; font-weight: 600;">Отвечаем ежедневно с 8:00 до 22:00</div>
        </div>
      </div>
    </section>
`;

const target = '<section class="section section--measure';
if (html.includes(target) && !html.includes('ЭКСПРЕСС-СМЕТА БЕЗ ВЫЕЗДА')) {
  html = html.replace(target, photoEstimateSection + '\n' + target);
  fs.writeFileSync(calcPath, html, 'utf8');
  console.log('Successfully injected Express-photo estimation into site/calculator/index.html');
} else {
  console.log('Target not found or section already present');
}
