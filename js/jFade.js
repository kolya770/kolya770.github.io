$(document).ready(function() {
    $('.first-screen-animation').animate({
         bottom: "+=10vh",
         opacity: 1
        }, 1500);

    $(window).fadeThis({speed: 1000});
    
    $('.container').fadeThis({
        speed: 1000
    });
});
