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