$(document).ready(function() {
    alert(window.location.hash);
    if (window.location.hash == "#passwordUpdated") {
        //bootstrap show popup JS
        $('#passwordUpdated').modal({});
        alert(window.location.hash);

    }

    $('#go-to-step-2').on('click', function(){
        location.href = 'address.html';
    });

    $('#go-to-sub-4').on('click', function(){
        location.href = 'subscription-management-4.html';
    });

    $(function(){
        // subscription management dropdowns
        $("#days-drop .dropdown-menu li a").click(function(){
            $('#days-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $("#month-drop .dropdown-menu li a").click(function(){
            $('#month-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $("#time-drop .dropdown-menu li a").click(function(){
            $('#time-drop button')[0].childNodes[0].nodeValue=($(this).text());
        });

        $('.question-icon').tooltip({
            delay: { "show": 50, "hide": 200 }
        });

    });

    $('#send-email').on('click', function(){

        var send_text =  $('#email').val();

        $('#your-mail').html(send_text);

        $('.fade-password').fadeOut("slow", function() {});

        setTimeout(function(){
            $('.modal-sended-email').fadeIn("slow");

        }, 750);


    });

    $('.new-password').bind('keyup change tap', function() {

        var password =  $('#password');
        var confirm_password =  $('#confirm_password');

        if (password.val() != confirm_password.val()) {

            password.css('border-color', 'red');
            confirm_password.css('border-color', 'red');

        } else {

            password.css('border-color', '#cbcbcb');
            confirm_password.css('border-color', '#cbcbcb');

        }
    });




    //var password = document.getElementById("password")
    //    , confirm_password = document.getElementById("confirm_password");
    //
    //function validatePassword(){
    //    if(password.value != confirm_password.value) {
    //        confirm_password.setCustomValidity("Passwords Don't Match");
    //    } else {
    //        confirm_password.setCustomValidity('');
    //    }
    //}
    //
    //password.onchange = validatePassword;
    //confirm_password.onkeyup = validatePassword;

    //$('#change-pass').on('click', function() {

        //var password =  $('#first-pass').val();
        //var confirm_password =  $('#second-pass').val();
        //
        //
        //
        //if (newpass == copypass) {
        //    $('#show-ok-message').fadeIn("slow");
        //
        //
        //} else {
        //    $('#error-message').fadeIn("slow");
        //
        //}

        //$('.fade-pass').fadeOut("slow", function() {});
        //
        //setTimeout(function(){
        //    $('.modal-change-pass').fadeIn("slow");
        //
        //}, 750);

    //});

});