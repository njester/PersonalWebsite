window.addEventListener('load', function() {
  observeScrolling();
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
  window.removeEventListener('scroll', handleScroll, {capture: false});
}

function navigate() {
  const target = document.querySelector(this.dataset['link']);
  if (target) {
    const top = target.offsetTop;
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
    closeNavigation();
  }
}

function observeScrolling() {
  window.addEventListener('scroll', handleScroll);
}

function handleScroll(e) {
  let timeout;
  window.requestAnimationFrame(function() {
    const scroll = window.scrollY;
    timeout = setTimeout(function() {
      if (Math.abs(scroll - window.scrollY) > 150) {
        closeNavigation();
        clearTimeout(timeout);
      }
    }, 200);
  })
}
