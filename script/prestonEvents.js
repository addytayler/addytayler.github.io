var section = document.querySelector('main');
const RequestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const RequestData = new XMLHttpRequest();
RequestData.open('GET',requestURL);
RequestData.responseType = 'json';
RequestData.send();

RequestData.onload = function() {
    let prestonData = RequestData.response;
    let towns = prestonData['towns'];
    let output = document.querySelector('main');

    towns.forEach (town => {
        if (town.name= 'Preston') {
            document.getElementById('prestonevents').innerHTML = town.events;
        }
    })
}
