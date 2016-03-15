$(document).ready(function() {
    /* autocomplete for cities, example */
    var cities = [
        {value: 'Moskow', data: 'moskow'},
        {value: 'Киев', data: 'kiev'},
        {value: 'Warsaw', data: 'warsaw'},
        {value: 'London', data: 'london'},
        {value: 'St. Petersburg', data: 'spb'},
        {value: 'Milan', data: 'milan'},
        {value: 'Grodno', data: 'grodno'}

    ];

    $('#city-autocomplete').autocomplete({
        lookup: cities
    });

    /* !! use code below to send ajax requests */
//$('#city-autocomplete').autocomplete({
//    serviceUrl: '/autocomplete/countries',
//    onSelect: function (suggestion) {
//        console.log('You selected: ' + suggestion.value + ', ' + suggestion.data);
//    }
//});

//$('#street-autocomplete').autocomplete({
//    serviceUrl: '/autocomplete/countries',
//});

    $('#city-autocomplete').on('change tap keyup', function () {
        var autocomplete_width = $('.autocomplete-suggestions').width();

        autocomplete_width = parseInt(autocomplete_width);

        $('.autocomplete-suggestions').width(autocomplete_width + 2);
    });
});