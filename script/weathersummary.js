let weatherSummary = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=78c05017e1ba7edbb699f99a4fb4aec5';
weatherSummary.open('Get',apiURLstring2, true);
weatherSummary.send();

weatherSummary.onload = function() {
    let weatherData = JSON.parse(weatherSummary.responseText);
    console.log (weatherData);
    document.getElementById('temperature').innerHTML = weatherData.main.temp_max;
    document.getElementById('current').innerHTML = weatherData.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

}