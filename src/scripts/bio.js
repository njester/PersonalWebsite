import { TweenMax, TimelineMax } from 'gsap';

window.addEventListener("load", function() {
  createObserver();
  document
    .querySelectorAll('.jsDetailToggle')
    .forEach(item => {
      item.addEventListener('click', bioItemClicked);
    });

  }, false);

function bioItemClicked() {
  //offsetHeight 
  this.classList.toggle('details-active');
  //console.log(this.querySelector('.bio__details'));
}

function createObserver() {
  let observer;
  const target = document.querySelector('.bio');

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        const lineAnimationTime = document.querySelectorAll('.bio__item').length * 0.4;
        TweenMax.fromTo('.bio__line', lineAnimationTime, {height:'0'}, {height: '100%'});
        TweenMax.staggerFromTo('.bio__info', 1, {y: '+=15', opacity:0}, {y: '0', opacity:1}, 0.2);
        TweenMax.staggerFromTo('.bio__point', 1, {opacity:0}, {opacity:1}, 0.2);
        TweenMax.staggerFromTo('.bio__date', 1, {y: '+=15', opacity:0}, {y: '0', opacity:1}, 0.2);
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(target);
}

// var ctrl = new ScrollMagic.Controller({
//   globalSceneOptions: {
//       triggerHook: 'onLeave'
//   }
// });

// let tween = 

// new ScrollMagic.Scene({
//     duration: '90%'
// })
// .setTween(tween)
// .triggerElement('.header')
// .addTo(ctrl);
// TweenMax.staggerFrom('.bio__date', 1, {x:"+=350"}, 0.2);%