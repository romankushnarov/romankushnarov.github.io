const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');

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

// $('shopModal1').ready(function() {
//     function scrollTo(hash) {
//         location.hash = "#" + hash;
//     }
// });

document.querySelector('#shop__item-info__link1').addEventListener('click', function() {
        setTimeout(() => {
            document.querySelector('#compare-1').scrollIntoView({behavior: "smooth"}); 
        }, 500);
});