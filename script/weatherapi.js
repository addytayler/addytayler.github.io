let weatherRequest = new XMLHttpRequest();
var apiURLstring= "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=a292f85c385e59f13bb3c030b904c97f";
weatherRequest.open('GET',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById("current-temp").innerHTML = weatherData.list[0].main.temp;

let icon= "http://openweathermap.org/img/w/" + weatherData.list[0].weather[0].icon + ".png"
let desc = weatherData.list[0].weather[0].description;

console.log(weatherData.list[0].weather[0].description);
document.getElementById("current-img").setAttribute('src', icon);
document.getElementById("current-img").setAttribute('description', desc);


}