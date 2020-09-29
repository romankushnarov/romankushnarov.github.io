

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

let counterMenu = 0;
document.querySelector(".mob-search_toggler").onclick = function(){

  if(counterMenu % 2 == 0) {
    document.querySelector('.mob-search_toggler-btn').classList.remove('fa-search');
    document.querySelector('.mob-search_toggler-btn').classList.add('fa-times');
    counterMenu++;
  } else {
    document.querySelector('.mob-search_toggler-btn').classList.remove('fa-times');
    document.querySelector('.mob-search_toggler-btn').classList.add('fa-search');
    counterMenu++;
  }

  

  document.querySelector(".mob-search-container").classList.toggle("active");
  document.querySelector(".mob-search-input").classList.toggle("active");
  document.querySelector(".mob-search-input").focus();
  
};
