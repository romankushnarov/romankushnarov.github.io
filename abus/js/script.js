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