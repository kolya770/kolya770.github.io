function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

/*
 *  Bootstrap showing popup after popup fix
 */
function show_popup (button, modal_close, modal_show) {

    button.on('click', function(){
        modal_close.modal('hide');
        modal_show.modal('show');
        setTimeout(function(){
            $('body').addClass('modal-open');
        }, 400);
    });
}

$(document).ready(function() {
    // input validation
    $('input').on('change', function () {
        $(this).removeClass('error');
    });

    $('#order-completed').on('click', function () {

        var selectors = [
            $('#input-name'),
            $('#input-surname'),
            $('#input-email'),
            $('#input-phone'),
            $('#input-password')
        ];

        var email = $('#input-email').val();

        var isErrors = false;
        selectors.forEach(function (selector, i, selectors) {

            if (!selector.val()) {
                selector.addClass('error');
                isErrors = true;
            } else {
                selector.removeClass('error');
            }
        });

        if (isEmail(email)) {
            $('#input-email').removeClass('error');
        } else {
            $('#input-email').addClass('error');
            isErrors = true
        }

        if (!isErrors) {
            $('#modal-basket').modal('show');
        }

    });

    $('#input-promocode').on('change tap keyup', function () {
        console.log($(this).val());
        if ($(this).val() == '111') {
            $('.success-message').fadeIn('slow');
        } else {
            $('.success-message').fadeOut('slow');
        }
    });

    $(function ($) {
        $("#input-phone").mask("+7(999) 999-99-99");
    });

    show_popup($('#submit-order'), $('#modal-basket'),  $('#modal-thanks'));
    show_popup($('#modal-news-open'),  $('#modal-thanks'), $('#modal-news'));
});
