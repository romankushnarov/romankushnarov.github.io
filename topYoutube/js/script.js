$(document).ready(function() {
    $('.results__slider-inner').slick({
        infinite: true,
        dots: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
    
    $('.reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                infinite: true,
                dots: true
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
              }
            }
        ],
    })
    
    
})