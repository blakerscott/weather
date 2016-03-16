var apiKey = "ea4a1c467b5ed0a0b65aaace5c70f5d2";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
  });
});
