const fs = require('fs');
const jsPath = 'c:/Users/Chessie/Documents/vsem-potolok/site/assets/js/main.min.js';
let js = fs.readFileSync(jsPath, 'utf8');

const jkLogic = `
function initJkExplorer() {
  var filterBtns = document.querySelectorAll('.jk-city-btn');
  var searchInput = document.getElementById('jkSearchInput');
  var cards = document.querySelectorAll('.jk-card');
  if (!cards.length) return;

  var currentCity = 'all';
  var currentSearch = '';

  function applyFilters() {
    cards.forEach(function(card) {
      var matchCity = (currentCity === 'all' || card.dataset.city === currentCity);
      var matchSearch = (!currentSearch || (card.dataset.name && card.dataset.name.toLowerCase().indexOf(currentSearch) !== -1));
      card.style.display = (matchCity && matchSearch) ? '' : 'none';
    });
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) {
        b.classList.remove('active');
        b.style.background = '';
        b.style.color = '';
      });
      btn.classList.add('active');
      btn.style.background = '#0E6B3C';
      btn.style.color = '#fff';
      currentCity = btn.dataset.city || 'all';
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      currentSearch = searchInput.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

window.applyJkPromo = function(jkName) {
  var measureSection = document.getElementById('measure') || document.querySelector('form');
  if (measureSection) {
    measureSection.scrollIntoView({ behavior: 'smooth' });
    var commentInput = measureSection.querySelector('input[name="comment"], textarea[name="comment"], input[name="name"]');
    var phoneInput = measureSection.querySelector('input[type="tel"]');
    if (commentInput) {
      commentInput.value = 'Скидка соседа: ' + jkName;
    }
    if (phoneInput) {
      setTimeout(function() { phoneInput.focus(); }, 600);
    }
  }
};
`;

// Insert before the DOMContentLoaded handler
const target = "document.addEventListener('DOMContentLoaded', function () {";
if (js.includes(target) && !js.includes('initJkExplorer')) {
  js = js.replace(target, jkLogic + '\n' + target);
  // Add initJkExplorer() to DOMContentLoaded
  js = js.replace("initReviewsFilter();", "initReviewsFilter(); initJkExplorer();");
  fs.writeFileSync(jsPath, js, 'utf8');
  console.log('Successfully added initJkExplorer to main.min.js');
} else {
  console.log('initJkExplorer already present or target not found');
}
