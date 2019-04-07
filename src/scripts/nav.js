window.addEventListener('load', function() {
  document
    .querySelector('.jsNavToggle')
    .addEventListener('click', toggleNavigation);

    document
      .querySelectorAll('.nav__link')
      .forEach(item => {
        item.addEventListener('click', navigate);
      });
  }, false);

function toggleNavigation() {
  let body = document.querySelector('body');
  body.classList.toggle('nav-open');
}

function closeNavigation() {
  let body = document.querySelector('body');
  body.classList.remove('nav-open');
}

function navigate() {
  const target = document.querySelector(this.dataset['link']);
  if (target) {
    const top = target.offsetTop;
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    closeNavigation();
  }
}
