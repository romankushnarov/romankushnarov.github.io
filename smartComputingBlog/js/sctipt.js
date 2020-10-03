

const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
const mobileMenuToggleClose = document.querySelector("#mobile-nav_cross")


menuToggle.onclick = function(){
  document.querySelector('.mobile-line').classList.toggle('block');
  document.querySelector('.mobile-nav').classList.toggle('block');
  document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
  document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
}

let counterMenu = 0;
document.querySelector('.mob-search_toggler-btn').onclick = function() {
  document.querySelector('.mob-search-input').classList.toggle('active');
  if(counterMenu % 2 == 0) {
    document.querySelector('.mob-search_toggler-btn').classList.remove('fa-search');
    document.querySelector('.mob-search_toggler-btn').classList.add('fa-times');
    document.querySelector('.form-btn').style.display = 'block';
    counterMenu++;
  } else {
    document.querySelector('.mob-search_toggler-btn').classList.remove('fa-times');
    document.querySelector('.mob-search_toggler-btn').classList.add('fa-search');
    document.querySelector('.form-btn').style.display = 'none';
    counterMenu++;
  }

  
}