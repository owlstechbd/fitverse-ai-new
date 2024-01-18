

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
  
//hover effect
  document.getElementById('box2').addEventListener('mouseover', function() {
    document.getElementById('box1').classList.add('hovered');
  });
  
  document.getElementById('box2').addEventListener('mouseout', function() {
    document.getElementById('box1').classList.remove('hovered');
  });
  
  document.getElementById('box3').addEventListener('mouseover', function() {
    document.getElementById('box1').classList.add('hovered');
  });
  
  document.getElementById('box3').addEventListener('mouseout', function() {
    document.getElementById('box1').classList.remove('hovered');
  });
  
  document.getElementById('box4').addEventListener('mouseover', function() {
    document.getElementById('box1').classList.add('hovered');
  });
  
  document.getElementById('box4').addEventListener('mouseout', function() {
    document.getElementById('box1').classList.remove('hovered');
  });
  



//faq
$(document).ready(function () {
  $('.card-header').click(function () {
      $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
      $(this).closest('.card').siblings().find('.card-header i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $(this).closest('.card').siblings().find('.card-header').removeClass('active-faq');
      $(this).toggleClass('active-faq');
  });
});


$(document).ready(function() {
  $('.testmonail-all').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    margin: 30,
    dots: true,  // Add this line for dots navigation
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 1
      },
      992: {
        items: 4
      }
    }
  });
});


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true,
    nav: false,
    margin:30,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 1
      },
      992: {
        items: 1.6
      }
    }
  });

  $('.custom-nav .prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.custom-nav .next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});

// animation

  new WOW().init();