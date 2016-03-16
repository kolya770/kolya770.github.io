function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).ready(function() {

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

    // subscription management dropdowns
    $(function() {

        $("#days-drop .dropdown-menu li a").click(function() {
            $('#days-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $("#month-drop .dropdown-menu li a").click(function() {
            $('#month-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $("#time-drop .dropdown-menu li a").click(function() {
            $('#time-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });


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

        // date-time pick
        $("#get-items-pick-date .dropdown-menu li a").click(function() {
            $('#get-items-pick-date button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $("#get-items-pick-time .dropdown-menu li a").click(function() {
            $('#get-items-pick-time button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $("#get-items-todo .dropdown-menu li a").click(function() {
            $('#get-items-todo button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });

        $("#return-items-pick-date .dropdown-menu li a").click(function() {
            $('#return-items-pick-date button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $("#return-items-pick-time  .dropdown-menu li a").click(function() {
            $('#return-items-pick-time  button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
        $("#return-items-todo .dropdown-menu li a").click(function() {
            $('#return-items-todo button').html(($(this).html() + '<i class="fa fa-sort-desc sort-icon"></i>'));
        });
    });

    $('#modal-open-city').on('click', function(){
        $('#modal-pick-city').modal('hide');
        $('#modal-no-city').modal('show');
        setTimeout(function(){
            $('body').addClass('modal-open');
        }, 400);
    });

    $('#modal-open-sub-success').on('click', function(){
        $('#modal-no-city').modal('hide');
        $('#modal-subscription-success').modal('show');
        setTimeout(function(){
            $('body').addClass('modal-open');
        }, 400);
    });

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

    //contacts input validation
    $('input').on('change', function(){
        $(this).removeClass('error');
    });

    $('#order-completed').on('click', function(){

        var selectors = [
            $('#input-name'),
            $('#input-surname'),
            $('#input-email'),
            $('#input-phone'),
            $('#input-password'),
            $('#input-promocode')
        ];

        var isErrors = false;
        selectors.forEach(function(selector, i, selectors) {

            if ( ! selector.val() ){
                selector.addClass('error');
                isErrors = true;
            } else {
                selector.removeClass('error');
            }
        });

        if ( ! isErrors) {
            //show popup
        }

    });

    $('#input-promocode').on('change tap keyup', function() {
        console.log($(this).val());
        if ($(this).val() == '111') {
            $('.success-message').fadeIn('slow');
        } else {
            $('.success-message').fadeOut('slow');
        }
    });
});