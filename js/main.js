



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



//popup
// Get all buttons with the "openPopup" class
var openButtons = document.getElementsByClassName('openPopup');

// Add click event listeners to each button
for (var i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', togglePopup);
}

// Function to toggle the popup's visibility
function togglePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  // Toggle the display of the overlay and popup
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
};



$(function(){
  3
    jQuery('[data-vbg]').youtube_background();
  4
    // OPTIONAL
  5
    const videoBackgrounds = VIDEO_BACKGROUNDS;
  6
  });





//faq
document.addEventListener("DOMContentLoaded", function () {
  var faqIcons = document.querySelectorAll(".card-header");

  faqIcons.forEach(function (icon) {
    // Listening for a click event on each icon
    icon.addEventListener("click", function () {
      // Introduce a delay to allow aria-expanded to update
      setTimeout(() => {
        console.log("FAQ item clicked");

        // Get the parent .card-header of the clicked icon
        var cardHeader = this.closest(".card-header");
        var isExpanded =
          cardHeader.getAttribute("aria-expanded") === "true";

        // Add or remove the new class from other card headers
        document
          .querySelectorAll(".card-header")
          .forEach(function (otherHeader) {
            if (otherHeader !== cardHeader) {
              if (isExpanded) {
                // Add class if the section is being opened
                otherHeader.classList.add("new-class");
              } else {
                // Remove class if the section is being closed
                otherHeader.classList.remove("new-class");
              }
            }
          });

        // Optional: Remove the class from the current card header if it's being opened
        if (isExpanded) {
          cardHeader.classList.remove("new-class");
        }
      }, 10); // Delay of 100 milliseconds
    });
  });
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
      items: 2,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000, // 3 seconds
      autoplayHoverPause: true,
      nav: false,
      margin: 30,
      responsive: {
          0: { items: 1 },
          480: { items: 1 },
          768: { items: 1 },
          992: { items: 1.8 }
      },
      smartSpeed: 800, // Adjust the speed of the slide transition
      fluidSpeed: 800
  });

  $('.custom-nav .prev').click(function() {
      $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.custom-nav .next').click(function() {
      $('.owl-carousel').trigger('next.owl.carousel');
  });
});




const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  initialCountry: "ae", // Set UAE as the default country
}
);
var iti = phoneInput

//filter
function filterItems(category) {
  var items = document.querySelectorAll('.item');

  items.forEach(function(item) {
      if (category === 'all' || item.classList.contains(category)) {
          item.classList.remove('hidden');
      } else {
          item.classList.add('hidden');
      }
  });
}



const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {
            const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
                currentlyActiveAccordionItemHeader.classList.toggle("active");
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });

    // Manually trigger a click event on the first accordion item to open it by default
    accordionItemHeaders[0].click();


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

// animation

  new WOW().init();