$(window).ready(function () {

    // ИНПАТЫ

    $('#customRange1').on('input', function () {
        $('.sum-value').attr('value', this.value);
        console.log($('#customRange1').val());
        let value = $('#customRange1').val();
        $('#customRange1').attr('value', value);
        $('.sum-value').val($('#customRange1').val());
    })

    $('#customRange2').on('input', function () {
        $('.time-value__num').attr('value', this.value);
        console.log($('#customRange2').val());
        let value = $('#customRange2').val();
        $('#customRange2').attr('value', value);
        $('.time-value__num').val($('#customRange2').val());
    })

    $('.sum-value').on('input', function(){
        $('#customRange1').attr('value', this.value);
        let value = $('.sum-value').val();
        $('.sum-value').attr('value', value);
        $('#customRange1').val($('.sum-value').val());
    })

    $('.time-value__num').on('input', function(){
        $('#customRange2').attr('value', this.value);
        let value = $('.time-value__num').val();
        $('.time-value__num').attr('value', value);
        $('#customRange2').val($('.time-value__num').val());   
    })

    $("#phone").mask("+7 (999) 999 99 99");

    if ($(window).width() <= 576) {
        $('#info-btn').text('получить кредит');
    }

    const menuToggle = document.querySelector('#menu-togle');
    const mobileNavContainer = document.querySelector('#mobile-nav');

    menuToggle.onclick = function(){
        menuToggle.classList.toggle('menu-icon-active');
        mobileNavContainer.classList.toggle('mobile-nav--active');
    }

    // Модальное окно

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

});