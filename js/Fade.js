$(document).ready(function() {

    var md = new MobileDetect(window.navigator.userAgent);

    if ( ! md.mobile() ) {

        $('.fade-bottom').fadeThis({
            speed: 1000
        });

        $('.first-screen-animation').animate({
            bottom: "+=10vh",
            opacity: 1
        }, 1500);
    }

    if ( md.tablet() ) {

        $('.first-screen-animation').animate({
            bottom: "+=10vh",
            opacity: 1
        }, 1500);
    }

});