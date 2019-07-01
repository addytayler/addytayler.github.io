const requestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const requestData = new XMLHttpRequest();
requestData.open('GET',requestTownDataURL);
requestData.responseType = 'json';
requestData.send();

requestData.onload = function() {
    let sodaSpringsData = requestData.response;
    let towns = sodaSpringsData['towns'];

    towns.forEach (town => {
        if (town.name= 'Soda Springs') {
            document.getElementById('sodaSpringsEvents').innerHTML = town.events[0];
            document.getElementById('sodaSpringsEvents1').innerHTML = town.events[1];
            document.getElementById('sodaSpringsEvents2').innerHTML = town.events[2];
        }
    })
}