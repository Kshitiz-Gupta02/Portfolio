/**
 * Kshitiz Gupta - Portfolio Client Controller
 * Pure Vanilla JavaScript. Zero external dependencies.
 */

// 1. Theme Initialization & Toggle
function initTheme() {
  const savedTheme = localStorage.getItem('kg-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('kg-theme', next);
      updateThemeButton(next);
    });
  }
}

function updateThemeButton(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  if (theme === 'light') {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute('aria-label', 'Switch to light theme');
  }
}

// 2. Static Project Tile Category Filtering
function initCategoryFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update aria-pressed states
      filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');

      const filter = btn.getAttribute('data-filter') || 'all';

      // Toggle visibility on static HTML cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.removeAttribute('hidden');
          card.style.display = '';
        } else {
          card.setAttribute('hidden', '');
          card.style.display = 'none';
        }
      });
    });
  });
}

// Setup on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCategoryFiltering();
});
