const fs = require('fs');
let css = fs.readFileSync('site/assets/css/style.min.css', 'utf8');

const override = `
/* Works showcase container cleanup */
.works-showcase {
  background: #F4F6F4 !important;
  color: #171717 !important;
  border-block: 1px solid #E2E8F0 !important;
}
.works-showcase::before {
  display: none !important;
}
.works-showcase .section-head h2 {
  color: #0F172A !important;
}
.works-showcase .section-head p {
  color: #475569 !important;
}
`;

css += override;
fs.writeFileSync('site/assets/css/style.min.css', css, 'utf8');
console.log('Cleaned up works-showcase background');
