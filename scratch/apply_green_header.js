const fs = require('fs');
const path = require('path');

const siteDir = 'c:/Users/Chessie/Documents/vsem-potolok/site';
const cssPath = path.join(siteDir, 'assets/css/style.min.css');
const indexPath = path.join(siteDir, 'index.html');

// 1. CSS for the Green Header
const greenHeaderCss = `
/* ========================================================
   GREEN HEADER & SEAMLESS LOGO (USER REQUEST V15)
   ======================================================== */
.header {
  background: #08291A !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  transition: background .2s ease;
}

/* Seamless, larger logo without white frame */
.logo {
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  text-decoration: none !important;
  flex: none !important;
}

.logo__img {
  height: 52px !important;
  width: 52px !important;
  display: block !important;
  object-fit: contain !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.logo__text-wrap {
  display: flex !important;
  flex-direction: column !important;
  line-height: 1.05 !important;
  user-select: none !important;
}

.logo__brand-top {
  font-family: 'Unbounded', system-ui, sans-serif !important;
  font-weight: 900 !important;
  font-size: 19px !important;
  color: #FFFFFF !important;
  letter-spacing: -0.01em !important;
  text-transform: uppercase !important;
}

.logo__brand-bottom {
  font-family: 'Unbounded', system-ui, sans-serif !important;
  font-weight: 900 !important;
  font-size: 19px !important;
  color: #FFD400 !important;
  letter-spacing: -0.01em !important;
  text-transform: uppercase !important;
}

/* Navigation on dark green */
.header .nav a {
  color: #E2E8F0 !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  transition: color .2s ease !important;
}

.header .nav a:hover,
.header .nav a[aria-current="page"] {
  color: #FFD400 !important;
}

.header .nav a::after {
  background: #FFD400 !important;
}

/* City Select on dark green */
.header .city-select summary {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  box-shadow: none !important;
  color: #E2E8F0 !important;
  border-radius: 8px !important;
  transition: background .2s, border-color .2s !important;
}

.header .city-select summary:hover {
  background: rgba(255, 255, 255, 0.14) !important;
  border-color: #FFD400 !important;
}

.header .city-select summary b {
  color: #FFD400 !important;
}

.header .city-select__menu {
  background: #08291A !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45) !important;
  border-radius: 10px !important;
}

.header .city-select__menu a {
  color: #E2E8F0 !important;
}

.header .city-select__menu a:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #FFD400 !important;
}

/* Phone pill on dark green */
.header .phone-pill {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.22) !important;
  box-shadow: none !important;
  color: #FFFFFF !important;
  transition: background .2s, border-color .2s !important;
}

.header .phone-pill:hover {
  background: rgba(255, 255, 255, 0.14) !important;
  border-color: #FFD400 !important;
}

.header .phone-pill__ico svg {
  stroke: #FFD400 !important;
}

.header .phone-pill__num {
  color: #FFFFFF !important;
  font-weight: 700 !important;
}

/* CTA button in header */
.header .header__actions .btn--primary {
  background: #FFD400 !important;
  color: #08291A !important;
  border: none !important;
  font-weight: 800 !important;
  box-shadow: 2px 2px 0 #C91420 !important;
  transition: transform .15s, box-shadow .15s !important;
}

.header .header__actions .btn--primary:hover {
  transform: translateY(-1px) !important;
  box-shadow: 3px 3px 0 #C91420 !important;
}

/* Burger icon on mobile */
.header .burger span,
.header .burger::before,
.header .burger::after {
  background: #FFFFFF !important;
}

/* Marquee bar harmony */
.marquee {
  background: #051A10 !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: #E2E8F0 !important;
}

.marquee b {
  color: #FFD400 !important;
}

.marquee i {
  color: #0E6B3C !important;
}
`;

// Append CSS
let css = fs.readFileSync(cssPath, 'utf8');
css += '\n' + greenHeaderCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Appended green header CSS to style.min.css');

// 2. Update index.html
let html = fs.readFileSync(indexPath, 'utf8');

// Update logo markup in header
const oldLogoTarget = /<a class="logo" href="\/" aria-label="Всем-Потолок — на главную">[\s\S]*?<\/a>/i;
const newLogoMarkup = `<a class="logo" href="/" aria-label="Всем-Потолок — на главную">
      <img class="logo__img" src="/assets/img/logo-emblem-light.webp" width="52" height="52" alt="Всем-Потолок — натяжные потолки" fetchpriority="high">
      <div class="logo__text-wrap">
        <span class="logo__brand-top">ВСЕМ</span>
        <span class="logo__brand-bottom">ПОТОЛОК</span>
      </div>
    </a>`;

if (oldLogoTarget.test(html)) {
  html = html.replace(oldLogoTarget, newLogoMarkup);
  console.log('Updated logo markup in index.html');
} else {
  console.log('Logo regex did not match in index.html');
}

// Update css version to v=15
html = html.replace(/style\.min\.css\?v=\d+/g, 'style.min.css?v=15');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Updated index.html with v=15 successfully!');
