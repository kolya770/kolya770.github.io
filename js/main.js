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

    //Store navigation
    $('.btn-select-item').on('click tap', function() {

        $('.btn-select-item').removeClass('active');

        if ( ! $(this).hasClass('active')) {
            $(this).addClass('active');
        }


        $('.clothes-block').removeClass('active');
        $('.clothes-block').fadeOut(0);

        var target = $(this).data('target');


        $('#' + target).fadeIn('slow');
        $('#' + target).addClass('active');
    });


    //Open modal in store page when password is updated
    if (window.location.hash.toString() == "#passwordUpdated") {
        $('#passwordUpdated').modal({});
    }

    //Click steps
    $('#go-to-step-2').on('click', function() {
        location.href = 'address.html';
    });

    $('#go-to-sub-4').on('click', function() {
        location.href = 'subscription-management-4.html';
    });

    //send email modal window
    $('#send-email').on('click', function() {

        var send_text =  $('#email').val();

        if( isEmail(send_text) ){
            $('#your-mail').html(send_text);

            $('.fade-password').fadeOut("slow", function() {});

            setTimeout(function() {
                $('.modal-sended-email').fadeIn("slow");
            }, 750);
        } else {
            $('p.error-message').fadeIn('slow');
        }

    });

    //compare passwords
    $('.new-password').bind('keyup change tap', function() {

        var password =  $('#password');
        var confirm_password =  $('#confirm_password');

        if (password.val() != confirm_password.val()) {

            password.css('border-color', 'red');
            confirm_password.css('border-color', 'red');
            $('.error-message').fadeIn('slow');

        } else {

            password.css('border-color', '#cbcbcb');
            confirm_password.css('border-color', '#cbcbcb');
            $('.error-message').fadeOut('slow');
        }
    });

    //calendar take date
    $('#take-item > .btn-date-number').click(function(){
        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            return true;
        }
        $('#take-item >  .btn-date-number').removeClass('active');
        $(this).addClass('active');
    });

    $('#delivery > .btn-date-number').click(function(){
        if ($(this).hasClass('active')) {

            $(this).removeClass('active');
            return true;
        }
        $('#delivery >  .btn-date-number').removeClass('active');
        $(this).addClass('active');
    });

    $('.question-icon').popover({
        trigger: "hover",
        delay: { "show": 50, "hide": 200 },
        content: "<p>мех I-ой категории: нутрия, собака, козел, кролик, цигейка, мутон, медведь, крот</p>" +
        "<p>мех II-ой категории: орелаг, норка, чернобурка, каракульча, каракуль, бобер, песец, белка, ондатра, енот, колонок, ласка, волк</p>", html: true, placement: "top"
    });

    $(function() {

        // subscription management dropdowns
        $('#days-drop .dropdown-menu li a').click(function() {
            $('#days-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $('#month-drop .dropdown-menu li a').click(function() {
            $('#month-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $('#time-drop .dropdown-menu li a').click(function() {
            $('#time-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        // date-time pick
        $('#get-items-pick-date .dropdown-menu li a').click(function() {
            $('#get-items-pick-date button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $('#get-items-pick-time .dropdown-menu li a').click(function() {
            $('#get-items-pick-time button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $('#get-items-todo .dropdown-menu li a').click(function() {
            $('#get-items-todo button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });

        $('#return-items-pick-date .dropdown-menu li a').click(function() {
            $('#return-items-pick-date button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $('#return-items-pick-time  .dropdown-menu li a').click(function() {
            $('#return-items-pick-time  button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $('#return-items-todo .dropdown-menu li a').click(function() {
            $('#return-items-todo button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });

        //store drop and total sum
        $('.dropdown-menu li a').on('tap click', function() {
            var id         = $(this).closest('.card').attr('id');
            var price      = $(this).data('price');
            var base_price = $('#' + id + ' .total-block' + ' .price').data('base-price');

            var sum = base_price + price;

            $('#' + id + ' .total-block' + ' .price').html(sum + ' ' + 'руб.');

            $('#' + id + ' .btn-drop-additionally').html(($(this).html() + '<i class="fa fa-sort-desc item-arrow"></i>'));
        });
    });

    show_popup($('#modal-open-city'), $('#modal-pick-city'), $('#modal-no-city'));
    show_popup($('#modal-open-sub-success'), $('#modal-no-city'), $('#modal-subscription-success'));

    $('.modal').on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        }
        else {
            $('body').removeClass("modal-open-noscroll");
        }
    });
    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    });

    //address input validation
    $('#send-address').on('click', function(){

        if ( ! $('#city-autocomplete').val()){
            $('.error-message.city').fadeIn('slow');
        } else {
            $('.error-message.city').fadeOut('slow');
        }

        if ( ! $('#street-autocomplete').val()){
            $('.error-message.street').fadeIn('slow');
        } else {
            $('.error-message.street').fadeOut('slow');
        }

        if ( ! $('#flat-number').val()){
            $('.error-message.code').fadeIn('slow');
        } else {
            $('.error-message.code').fadeOut('slow');
        }
    });

    $('#login').on('click', function(){
        $('.error-message').fadeIn('slow');
    });

    /* Basket delete item */
    $('.btn-delete-item').on('click tap', function() {
        var target = $(this).data('target');

        if (target) {
            $(this).parents('.item-block-with-x').css('display', 'none');
            $('#delete-' + target).css('display', 'block');

            //mobile
            $(this).parents('.basket-item-block-mobile').css('display', 'none');
            $('#delete-m-' + target).css('display', 'block');
        }
    });

    /* Return item to basket */
    $('.return-btn').on('click tap', function() {
        var target = $(this).data('target');

        if (target) {
            $(this).closest('.item-block-with-x').css('display', 'none');
            $('#item-' + target).css('display', 'block');

            // mobile
            $(this).closest('.basket-item-block-mobile').css('display', 'none');
            $('#item-m-' + target).css('display', 'block');
        }
    });

    // Store card height change
    var card_max_height = Math.max.apply(null, $("div.card").map(function () {
        return $(this).height();
    }).get());

    var card_header_height = 52;
    var card_normal_height = 482;

    $('.name-clothe-block').css('height', card_header_height + (card_max_height - card_normal_height));

    //News card height change
    $(window).load(function() {
        var news_card_max_height = Math.max.apply(null, $("div.news-block").map(function () {
            return $(this).height();
        }).get());

        var news_card_header_height = 46;
        var news_card_normal_height = 377;

        $('.news-block h3').css('height', news_card_header_height + (news_card_max_height - news_card_normal_height));
    });

});