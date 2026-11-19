const fs = require('fs');

let catHtml = fs.readFileSync('site/catalog/index.html', 'utf8');

catHtml = catHtml.replace(
  /<div class="card__foot">[\s\S]*?<\/div>/g,
  `<div class="card__foot">
      <div class="price">от 550 ₽ <small>под ключ с монтажом</small></div>
      <button class="btn btn--primary btn--block" data-modal-open="order" data-product="Расчёт потолка под ключ">Рассчитать стоимость</button>
    </div>`
);

fs.writeFileSync('site/catalog/index.html', catHtml, 'utf8');
console.log('Updated catalog/index.html card footers!');
