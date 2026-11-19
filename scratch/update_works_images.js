const fs = require('fs');

const worksPath = 'site/works/index.html';
let html = fs.readFileSync(worksPath, 'utf8');

// Update images in case cards
html = html.replace('/assets/img/pvc-lg.webp', '/assets/img/work-eurokraab-living.jpg');
html = html.replace('/assets/img/cat-levels-lg.webp', '/assets/img/work-light-lines-kitchen.jpg');
html = html.replace('/assets/img/tkan-lg.webp', '/assets/img/work-floating-bedroom.jpg');
html = html.replace('/assets/img/reznoy-lg.webp', '/assets/img/work-track-studio.jpg');

fs.writeFileSync(worksPath, html, 'utf8');
console.log('Updated case cards in works/index.html with modern images');
