const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

document.querySelectorAll('.drink-choice').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.drink-choice.active')?.classList.remove('active');
    button.classList.add('active');
    document.querySelector('.drink-note').textContent = button.dataset.note;
    document.querySelector('.cocktail-caption').textContent = `0${[...button.parentElement.children].indexOf(button) + 1} / ${button.dataset.drink}`;
    const liquid = document.querySelector('.drink-liquid');
    const palettes = {
      NEGRONI: 'linear-gradient(90deg,#712f1c,#a64a26 50%,#722a19)',
      MOJITO: 'linear-gradient(90deg,#678645,#a9b65a 50%,#5d7d3c)',
      'TU CLÁSICO': 'linear-gradient(90deg,#8c5628,#d49b42 50%,#8b4d21)',
    };
    liquid.style.background = palettes[button.dataset.drink];
  });
});

const revealTargets = document.querySelectorAll('.manifesto-content, .story-copy, .story-photo, .beer-lineup, .pinta-title, .cocktail-layout, .lounge-copy, .gallery-heading, .gallery-shot, .events-copy, .location-title');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

