
    var temp = parseFloat(document.getElementById("temperature").innerText);
    var wind = parseFloat(document.getElementById("windSpeed").innerText);
    var windchill = 35.74 + 0.6215 * temp -35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16)
    windchill = windchill.toFixed(2);
    document.getElementById("windChill").innerHTML = windchill + " &deg;F";