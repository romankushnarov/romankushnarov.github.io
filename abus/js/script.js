$(document).ready(function() {

    // mobile menu

    menuToggle.onclick = function(){
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
    }

    document.querySelector('.mobile-nav__list').onclick = function() {
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
    }


    document.querySelector('.overlay').onclick = function() {
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
        document.querySelector('.overlay').classList.toggle('block');
        document.querySelector('body').classList.toggle('hidden');
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
    
});