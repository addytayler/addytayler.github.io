let weatherRequest = new XMLHttpRequest();
var apiURLstring= "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=a292f85c385e59f13bb3c030b904c97f";

weatherRequest.open('GET',apiURLstring, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
let icon= "http://openweathermap.org/img/w/" + weatherData.weather.icon + ".png"
let desc = weatherData.weather[0].description;
document.getElementById("current-img").setAttribute('src', icon);
document.getElementById("current-img").setAttribute('description', desc);


}