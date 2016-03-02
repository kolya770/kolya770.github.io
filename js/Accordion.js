$(document).ready(function () {

    var lastIcon;

    $('.accordion > .accordion-item').click(function () {

        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
            lastIcon = null;
            return true;
        }

        $('.accordion > .accordion-item').removeClass('active');
        $(this).addClass('active');
        $(this).find('i').add(lastIcon).toggleClass('fa-angle-down fa-angle-up');
        lastIcon = $(this).find('i');
    });
});

