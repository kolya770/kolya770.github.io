$(document).ready(function() {

    $('#go-to-step-2').on('click', function(){
        location.href = 'address.html';
    });

    $('#go-to-sub-4').on('click', function(){
        location.href = 'subscription-management-4.html';
    });

    $(function(){

        $("#days-drop .dropdown-menu li a").click(function(){

            $('#days-drop button')[0].childNodes[0].nodeValue=($(this).text());

        });

        $("#month-drop .dropdown-menu li a").click(function(){

            $('#month-drop button')[0].childNodes[0].nodeValue=($(this).text());

        });

        $("#time-drop .dropdown-menu li a").click(function(){

            $('#time-drop button')[0].childNodes[0].nodeValue=($(this).text());

        });

    });

});