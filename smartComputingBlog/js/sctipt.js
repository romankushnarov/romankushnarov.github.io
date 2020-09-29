

const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
const mobileMenuToggleClose = document.querySelector("#mobile-nav_cross")


menuToggle.onclick = function(){
  document.querySelector('.mobile-line').classList.add('mobile-line-active');
  document.querySelector('.mobile-nav').classList.add('mobile-nav-active');
}

mobileMenuToggleClose.onclick = function() {
  document.querySelector('.mobile-line').classList.remove('mobile-line-active');
  document.querySelector('.mobile-nav').classList.remove('mobile-nav-active');
}
