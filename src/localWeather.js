$(document).ready(function () {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function (data) {
    $('#outsideTemperature').text(Math.round(data.main.temp));
    $('#localCity').text(data.name);
  });
});
