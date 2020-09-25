const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');

menuToggle.onclick = function(){
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
}

$(".mob-search").click(function(){ // задаем функцию при нажатиии на элемент <button>
  $( ".mob-search-form" ).focus(); // вызываем событие focus на элементе <div>
});