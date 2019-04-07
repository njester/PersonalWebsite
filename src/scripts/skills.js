window.addEventListener("load", createObserver, false);

  function createObserver() {
    let observer;
    const target = document.querySelector('.skills__items');
  
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector('.skills').classList.add('skills-active');
          observer.unobserve(entry.target);
        }
      });
    });
  
    observer.observe(target);
  }