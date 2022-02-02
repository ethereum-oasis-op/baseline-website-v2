import Glide from '@glidejs/glide';

if (document.querySelector('.glide')) {
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 6,
    autoplay: 2000,
    hoverpause: false,
    animationDuration: 1000,
    breakpoints: {
      1024: {
        perView: 4
      },
      600: {
        perView: 2
      }
    }
  }).mount();
}
