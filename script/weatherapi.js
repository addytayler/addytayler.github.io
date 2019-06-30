let weatherRequest = new XMLHttpRequest();
var apiURLstring= "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=a292f85c385e59f13bb3c030b904c97f";
weatherRequest.open('GET',apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    var weekday = new Array(7);
    weekday[0] ="Monday";
    weekday[1] ="Tuesday";
    weekday[2] ="Wednesday";
    weekday[3] ="Thursday";
    weekday[4] ="Friday";
    weekday[5] ="Saturday";
    weekday[6] ="Sunday";

    let count = 1;

    for (let i = 0; i < forecastData.list.length; i++) {
        if (forecastData.list[i].dt_txt.includes("18:00:00")) {
            document.getElementById('degreeforecast' +count).innerHTML=forecastData.list[i].main.temp_max;
            document.getElementById('imgforecast'+count).setAttribute('src', "https://openweathermap.org/img/w/"+weatherData.weather[0] + ".png");
            document.getElementById('dayforecast' +count).innerHTML=weekday[(new Date().getDay()+count-1)%7];
            count ++;
    }
    if (count==6){
        break;
    }
    }
}