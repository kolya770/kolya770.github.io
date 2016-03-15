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

        $('.question-icon').tooltip({
            delay: { "show": 50, "hide": 200 }
        });

    });

    //send email modal window
    $('#send-email').on('click', function() {

        var send_text =  $('#email').val();

        $('#your-mail').html(send_text);

        $('.fade-password').fadeOut("slow", function() {});

        setTimeout(function() {
            $('.modal-sended-email').fadeIn("slow");
        }, 750);

    });

    //change your password page
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

    //$(".js-example-placeholder-multiple").select2({
    //    placeholder: "Select a state"
    //});
    
});