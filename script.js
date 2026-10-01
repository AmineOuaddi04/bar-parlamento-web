const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const closeMenu = () => {
  document.body.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
  menu.inert = true;
};
toggle.addEventListener('click', () => {
  if (document.body.classList.contains('menu-open')) return closeMenu();
  document.body.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Cerrar menú');
  menu.inert = false;
  menu.querySelector('a')?.focus();
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    closeMenu();
    toggle.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
