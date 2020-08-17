$(document).ready(function(){
    $(".owl-carousel1").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        dots: false,
    });
    $(".owl-carousel2").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
    });
    $(".owl-carousel3").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        dots: false,
        responsive: {
            1200 : {
                items: 4,
            },
            768 : {
                items: 3,
            },
            567 : {
                items: 2,
            }, 
            0 : {
                items: 1, 
            }
        }
    });
    $(".owl-carousel4").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        nav:true,
        responsive: {
            1600 : {
                items: 5,
                nav: true,
                dots: false,
            },
            1400: {
                items: 4,
                nav: true,
                dots: false,
            },
            1200 : {
                items: 3,
                nav: true,
                dots: false,
            },
            768 : {
                items: 2,
                nav: true,
                dots: false,
            },
            0 : {
                items: 1, 
                nav: false,
                dots: true,
            }
        }
    });
    $(".owl-carousel5").owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        nav: true,
        dots: false,
        responsive: {
            1200 : {
                items: 6,
            },
            992 : {
                items: 3,
            },
            576 : {
                items: 3,
            },
            0 : {
                items: 1, 
            }
        }
    });

    $('.lightzoom').lightzoom({speed: 400, viewTitle: true});


    // -------------- LINKS IN PORTFOLIO ------------

    $('.portfolio-item').click(function (e) {
        document.location = '#';
    });


    // ---------------- FAQ ----------------

    $('.question-text').hide();
    $('.question').on('click', function() {
        $(this).find('.question-text').slideToggle(500);
        console.log($(this));
    });


});
