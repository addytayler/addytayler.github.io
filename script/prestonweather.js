let weatherSummary = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a292f85c385e59f13bb3c030b904c97f';
weatherSummary.open('Get',apiURLstring2, true);
weatherSummary.send();

weatherSummary.onload = function() {
    let weatherData = JSON.parse(weatherSummary.responseText);
    console.log (weatherData);
    document.getElementById('temperature').innerHTML = weatherData.main.temp_max;
    document.getElementById('currently').innerHTML = weatherData.weather[0].main;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

    let temp = parseInt(document.getElementById('temperature').innerHTML);
    let wind = parseInt(document.getElementById('windSpeed').innerHTML);
    let windChill = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)
    document.getElementById('windChill').innerHTML = windChill.toFixed(1) + " &deg;F";

}
