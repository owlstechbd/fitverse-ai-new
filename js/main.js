

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
  
//typing effect
const typingText = document.getElementById("typing-text");
const targetSection = document.getElementById("target-section");

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    typeText(); // Start typing effect when section enters viewport
  } else {
    typingText.textContent = ""; // Clear text when section leaves viewport
  }
});

observer.observe(targetSection);

const textToType = "Alexa! I know your work day’s been crazy, so I shortned your workout. Consistency is our motto! Let’s keep that treak going.";
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typingText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, Math.random() * 5 + 50);
  } else {
    // Display full text without animation after typing effect finishes
    typingText.textContent = textToType;
  }
}


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



// animation

  new WOW().init();