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
                mouseDrag: false,
                touchDrag: false
            },
            1400: {
                items: 4,
                nav: true,
                dots: false,
                mouseDrag: false,
                touchDrag: false
            },
            1200 : {
                items: 3,
                nav: true,
                dots: false,
                mouseDrag: false,
                touchDrag: false
            },
            768 : {
                items: 2,
                nav: true,
                dots: false,
                mouseDrag: true,
                touchDrag: true
            },
            0 : {
                items: 1, 
                nav: false,
                dots: true,
                mouseDrag: true,
                touchDrag: true
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

    // открыть по кнопке
    $('.js-main__btn').click(function() { 
        
        $('.js-overlay').fadeIn();
        $('.js-overlay').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-popup').click(function() { 
        $('.js-overlay').fadeOut();
        
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay').fadeOut();
            
        }
    });


    // открыть по кнопке
    $('.js-main__btn-form').click(function() { 
    
        $('.js-overlay-form').fadeIn();
        $('.js-overlay-form').addClass('disabled');
    });

    // закрыть на крестик
    $('.js-close-popup-form').click(function() { 
        $('.js-overlay-form').fadeOut();
        
    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) { 
        var popup = $('.js-popup-form');
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.js-overlay-form').fadeOut();
            
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
