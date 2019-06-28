const RequestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const RequestData = new XMLHttpRequest();
RequestData.open('GET',RequestTownDataUR, true);
RequestData.responseType = 'json'
RequestData.send();

RequestData.onload = function() {
    let prestonData = RequestData.response;
    let towns = prestonData['towns'];

    towns.forEach (town => {
        if (town.name= 'Preston') {
            document.getElementById('prestonevents').innerHTML = town.events[0];
            document.getElementById('prestonevents1').innerHTML = town.events[1];
            document.getElementById('prestonevents2').innerHTML = town.events[2];
        }
    })
}