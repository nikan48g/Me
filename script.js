const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const icon = toggle?.querySelector('.theme-icon');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#171513' : '#fff8ef');
}

applyTheme(initialTheme);

toggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
