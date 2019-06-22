var section = document.querySelector('main');
        const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            let towndata = request.response;
            let towns = towndata['towns'];

            let output = document.querySelector('main');

            towns.forEach(town => {
                if (town.name == 'Preston')
                 {
                      document.getElementById("PrestonName").innerHTML=town.name;
                      document.getElementById("PrestonMotto").innerHTML=town.motto;
                      document.getElementById("PrestonYearFounded").innerHTML=town.yearFounded;
                      document.getElementById("PrestonCurrentPopulation").innerHTML=town.currentPopulation;
                      document.getElementById("PrestonAverageRainFall").innerHTML=town.averageRainfall;
                    }
                else if (town.name == 'Soda Springs') 
                {
                    document.getElementById("SodaSpringsName").innerHTML=town.name;
                      document.getElementById("SodaSpringsMotto").innerHTML=town.motto;
                      document.getElementById("SodaSpringsYearFounded").innerHTML=town.yearFounded;
                      document.getElementById("SodaSpringsCurrentPopulation").innerHTML=town.currentPopulation;
                      document.getElementById("SodaSpringsAverageRainFall").innerHTML=town.averageRainfall;
                }
                else if (town.name =='Fish Haven') 
                {
                    document.getElementById("FishHavenName").innerHTML=town.name;
                      document.getElementById("FishHavenMotto").innerHTML=town.motto;
                      document.getElementById("FishHavenYearFounded").innerHTML=town.yearFounded;
                      document.getElementById("FishHavenCurrentPopulation").innerHTML=town.currentPopulation;
                      document.getElementById("FishHavenAverageRainFall").innerHTML=town.averageRainfall;
                }
                   
            }
            )}