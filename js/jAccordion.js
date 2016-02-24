$(document).ready(function() {

    $(".accordion > .nav__btn").click(function(){

        $(".nav__text").removeClass('nav__item--active');

        if(false == $(this).next().is(':visible')) {

            $('.accordion > ul').stop().slideUp(400);
            $(this).addClass('nav__item--active');
        }

        $(this).next().stop().slideToggle(400);
    });

    var link = $('.sub-nav__link--active').parent();

    $(link).parent().attr('id', 'sub-nav--active');
    $('#sub-nav--active').prev().addClass("nav__item__two--active");
});