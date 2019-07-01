const requestTownDataURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const requestData = new XMLHttpRequest();
requestData.open('GET',requestTownDataURL);
requestData.responseType = 'json';
requestData.send();

requestData.onload = function() {
    let fishHavenData = requestData.response;
    let towns = fishHavenData['towns'];

    towns.forEach (town => {
        if (town.name= 'Preston') {
            document.getElementById('fishHavenEvents').innerHTML = town.events[0];
            document.getElementById('fishHavenEvents1').innerHTML = town.events[1];
            document.getElementById('fishHavenEvents2').innerHTML = town.events[2];
        }
    })
}