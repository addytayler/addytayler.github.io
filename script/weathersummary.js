let weatherSummary = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a292f85c385e59f13bb3c030b904c97f';
weatherSummary.open('Get',apiURLstring2, true);
weatherSummary.send();

weatherSummary.onload = function() {
    let weatherData = JSON.parse(weatherSummary.responseText);
    console.log (weatherData);
    document.getElementById('temperature').innerHTML = weatherData.main.temp_max;
    document.getElementById('current').innerHTML = weatherData.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherData.main.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

}