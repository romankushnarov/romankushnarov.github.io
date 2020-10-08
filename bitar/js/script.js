const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
let counterMenu = 0;

menuToggle.onclick = function(){
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    if(counterMenu % 2 == 0) {
        document.querySelector('.overlay').classList.add('block');
        counterMenu++;
    } else {
        document.querySelector('.overlay').classList.remove('block');
        counterMenu++;
    }
}

document.querySelector('.overlay').onclick = function() {
    document.querySelector('.overlay').classList.remove('block');
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('#mobileMenuToggle').classList.toggle('mobile-nav-active');
    counterMenu++;
}