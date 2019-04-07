window.addEventListener("load", function() {
  createObserver();
  hideElements();
  }, false);

function hideElements() {
  let index = 0;
  document
    .querySelectorAll('.bio__info, .bio__point, .bio__date')
    .forEach((item, idx) => {
      item.style.opacity = 0;
      item.transform = 'translateY(15px)';
      index += (idx % 3 == 0 ? 1 : 0);
      item.style.animationDelay = index * 300 + 'ms';
    });

    document
    .querySelector('.bio__line')
    .style.transition = `height ${++index * 450}ms`;
}

function createObserver() {
  let observer;
  const target = document.querySelector('.bio__list');

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => document.querySelector('.jsBio').classList.add('bio-visible'), 25);
      }
    });
  });

  observer.observe(target);
}