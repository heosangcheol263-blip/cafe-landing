const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function setMenuOpen(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
}

navToggle.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('open'));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenuOpen(false);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    setMenuOpen(false);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
