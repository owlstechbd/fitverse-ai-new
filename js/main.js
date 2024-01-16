

//offer-news
const swiper = new Swiper('.news-container', {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 15000,
  slidesPerView: 4,
});

// Add the hover effect immediately
swiper.slides.forEach((slide, index) => {
  slide.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
    slide.classList.add('hovered');
  });

  slide.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
    slide.classList.remove('hovered');
  });
});



$(function(){
  3
    jQuery('[data-vbg]').youtube_background();
  4
    // OPTIONAL
  5
    const videoBackgrounds = VIDEO_BACKGROUNDS;
  6
  });
  7
   





// animation

  new WOW().init();