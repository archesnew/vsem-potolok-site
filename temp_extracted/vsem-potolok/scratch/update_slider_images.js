const fs = require('fs');

const files = ['site/index.html', 'site/works/index.html'];

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  
  // Replace the before image
  html = html.replace(
    /<div class="ba-slider__before">[\s\S]*?<\/div>/i,
    `<div class="ba-slider__before">
        <img src="/assets/img/ceiling-before.jpg" width="1600" height="900" alt="До монтажа: черновой бетонный потолок, трещины, швы плит и времянка">
      </div>`
  );

  // Replace the after image
  html = html.replace(
    /<div class="ba-slider__after">[\s\S]*?<\/div>/i,
    `<div class="ba-slider__after">
        <img src="/assets/img/ceiling-after.jpg" width="1600" height="900" alt="После монтажа: идеально ровный теневой потолок EuroKRAAB, трековый свет и скрытый карниз">
      </div>`
  );

  fs.writeFileSync(file, html, 'utf8');
  console.log('Updated Before/After images in', file);
});
