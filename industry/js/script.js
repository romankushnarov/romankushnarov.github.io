const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');

let counter = 0; 
menuToggle.onclick = function(){
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    if(counter % 2 == 0) {
        document.querySelector('body').style.overflow = 'hidden';
        counter ++;
    } else {
        document.querySelector('body').style.overflow = 'auto';
        counter++;
    }
}

window.onscroll = function() {
   var scrollElem = document.getElementById("scrollToTop");
   if (document.documentElement.scrollTop > 1000) {
      scrollElem.style.opacity = "1";
   } else {
       scrollElem.style.opacity = "0";
   }
}

var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

$('.aboutUs-video__wrapper').click(function (e) {
    window.open("https://www.youtube.com/", "_blank"); 
});

