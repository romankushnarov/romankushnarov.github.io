$(document).ready(function() {

    // mobile menu

    menuToggle.onclick = function(){
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
        menuToggle.classList.toggle('opacity-0');
    }

    document.querySelector('.mobile-nav__list').onclick = function() {
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
        menuToggle.classList.toggle('opacity-0');
    }


    document.querySelector('.overlay').onclick = function() {
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
        menuToggle.classList.toggle('opacity-0');
    }

    // scroll to popup table delay
    
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    
    width > 576 ? time = 500 : time = 800;
    
    function delay(el) {
        setTimeout(() => {
            document.querySelector(el).scrollIntoView({behavior: "smooth"}); 
        }, time);
    }

    document.querySelector('#shop__item-info__table1').addEventListener('click', function() {
        delay('#compare-1');
    });
    document.querySelector('#shop__item-info__table2').addEventListener('click', function() {
        delay('#compare-2');
    });
    document.querySelector('#shop__item-info__table3').addEventListener('click', function() {
        delay('#compare-3');
    });
    document.querySelector('#shop__item-info__table4').addEventListener('click', function() {
        delay('#compare-4');
    });
    document.querySelector('#shop__item-info__table5').addEventListener('click', function() {
        delay('#compare-5');
    });
    document.querySelector('#shop__item-info__table6').addEventListener('click', function() {
        delay('#compare-6');
    });
    
    // move absolute img in main section

    if(width < 768) {
        document.querySelector('.main__inner-img').src = '../images/new-main__img.png';
        $('.absolute-img').appendTo('.main__inner-col__img');
    };

});