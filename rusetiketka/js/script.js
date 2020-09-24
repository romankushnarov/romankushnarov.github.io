$(document).ready(function() {
    $(document).ready( function() {
        $("#fl_inp").change(function(){
            var filename = $(this).val().replace(/.*\\/, "");
            $("#fl_nm").html(filename);
        });
    });

    const menuToggle = document.querySelector('#menuToggle');
    const mobileMenuToggle = document.querySelector('#mobileMenuToggle');

    menuToggle.onclick = function(){
        document.querySelector('.mobile-line').classList.toggle('mobile-line-active');
        document.querySelector('.mobile-nav').classList.toggle('mobile-nav-active');
    }
})