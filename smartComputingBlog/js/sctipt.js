$(document).ready(function(){

    const menuToggle = document.querySelector('#menuToggle');
    const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
    
    menuToggle.onclick = function(){
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    }

  $(".fa-search").click(function(){
    $(".mob-search-container, .mob-search-input").toggleClass("active");
    $(".mob-search-input").focus();
  });
  
});