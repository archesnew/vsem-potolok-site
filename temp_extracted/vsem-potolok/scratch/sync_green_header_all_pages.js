const fs = require('fs');
const path = require('path');

const siteDir = 'c:/Users/Chessie/Documents/vsem-potolok/site';

const newLogoMarkup = `<a class="logo" href="/" aria-label="Всем-Потолок — на главную">
      <img class="logo__img" src="/assets/img/logo-emblem-light.webp" width="52" height="52" alt="Всем-Потолок — натяжные потолки" fetchpriority="high">
      <div class="logo__text-wrap">
        <span class="logo__brand-top">ВСЕМ</span>
        <span class="logo__brand-bottom">ПОТОЛОК</span>
      </div>
    </a>`;

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Update old logo patterns
      if (content.includes('logo-header.jpg') || (content.includes('class="logo"') && !content.includes('logo__text-wrap'))) {
        content = content.replace(/<a[^>]*class="logo"[^>]*>[\s\S]*?<\/a>/i, newLogoMarkup);
        changed = true;
      }

      // Bump style.min.css version to ?v=15
      if (content.includes('style.min.css?v=')) {
        content = content.replace(/style\.min\.css\?v=\d+/g, 'style.min.css?v=15');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated header & logo in:', path.relative(siteDir, fullPath));
      }
    }
  }
}

processDir(siteDir);
console.log('Finished updating all HTML pages with the new green header and logo!');
