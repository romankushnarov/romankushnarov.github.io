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

    // pop up table delay

    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    document.querySelector('#shop__item-info__link1').addEventListener('click', function() {
        if (width > 576) {
            delay(500);
        } else {
            delay(800);
        }
        function delay(time) {
            setTimeout(() => {
                document.querySelector('#compare-1').scrollIntoView({behavior: "smooth"}); 
            }, time);
        }
    });
});