const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
const mobileNavTimes = document.querySelector('#mobile-nav__times');

menuToggle.onclick = function(){
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    document.querySelector('.overlay').classList.add('block');
    document.querySelector('body').classList.add('hidden');
}

mobileNavTimes.onclick = function() {
  document.querySelector('.overlay').classList.remove('block');
  document.querySelector('#mobileMenuToggle').classList.toggle('mobile-nav-active');
  document.querySelector('body').classList.remove('hidden');
}


document.querySelector('.overlay').onclick = function() {
  document.querySelector('.overlay').classList.remove('block');
  document.querySelector('#mobileMenuToggle').classList.toggle('mobile-nav-active');
  document.querySelector('body').classList.remove('hidden');
}

document.querySelector('.mobile-nav__list').onclick = function() {
  document.querySelector('.overlay').classList.remove('block');
  document.querySelector('#mobileMenuToggle').classList.toggle('mobile-nav-active');
  document.querySelector('body').classList.remove('hidden');
}

$('.extra-shelter__carousel').owlCarousel({
  loop:true,
  responsiveClass:true,
  items: 1,
  nav: true,
  navSpeed: 1000,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
})

$('.home__carousel').owlCarousel({
  loop:true,
  responsiveClass:true,
  nav: true,
  navSpeed: 1000,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1,
    },
    800:{
      items:2,
    }
}
})

$('.reports-carousel').owlCarousel({
  loop:true,
  responsiveClass:true,
  nav: true,
  navSpeed: 1000,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
  responsive:{
    0:{
      items:1,
    },
    768:{
      items:2,
    },
    1000:{
      items:3,
    },
    1280:{
      items:4,
    }
}
})


// ---------------- FAQ ----------------

$('.question-text').hide();
$('.question').on('click', function() {
    $(this).find('.question-text').slideToggle(500);
    console.log($(this));
});

// ScrollToTop

$(document).ready(function(){

  $(window).scroll(function(){
      if ($(this).scrollTop() > 1000) {
          $('#scrollToTop').css('opacity', '1');
      } else {
          $('#scrollToTop').css('opacity', '0');
      }
      });
        
      $('#scrollToTop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 100);
      return false;
  });
});