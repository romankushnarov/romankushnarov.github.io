const menuToggle = document.querySelector('#menuToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
let counterMenu = 0;

menuToggle.onclick = function(){
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    if(counterMenu % 2 == 0) {
        document.querySelector('.overlay').classList.add('block');
        document.querySelector('body').classList.add('hidden');
        counterMenu++;
    } else {
        document.querySelector('.overlay').classList.remove('block');
        document.querySelector('body').classList.remove('hidden');
        counterMenu++;
    }
}

document.querySelector('.overlay').onclick = function() {
    document.querySelector('.overlay').classList.remove('block');
    document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
    document.querySelector('#mobileMenuToggle').classList.toggle('mobile-nav-active');
    counterMenu++;
}


// ---------------- WORK ----------------

$('.work-text').hide();
$('.work-item').on('click', function() {
    $(this).find('.work-text').slideToggle(500);
    console.log($(this));
});