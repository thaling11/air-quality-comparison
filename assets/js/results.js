// Variables to put text from storage
var airResults = document.getElementById("air-results");
var aqiResult = document.getElementById("aqi-results");
var local = document.getElementById("local-results");
var localAirResults = document.getElementById("local-aqi");
var co2Searched = document.getElementById("greenhouse-co2");
var ch4Searched = document.getElementById("greenhouse-ch4");
var ozoneSearched = document.getElementById("greenhouse-ozone");
var vaporSearched = document.getElementById("greenhouse-vapor");
var co2Local = document.getElementById("local-co2");
var ch4Local = document.getElementById("local-ch4");
var ozoneLocal = document.getElementById("local-ozone");
var vaporLocal = document.getElementById("local-vapor");

// Post searched air quality
function searchAirQuality(){
    var postAirq = JSON.parse(localStorage.getItem("searchedCity"));
    console.log(postAirq);
    airResults.textContent = `Searched City: ${postAirq.city}`;
    aqiResult.textContent = `Searched City Air Quality: ${postAirq.aqi}`;
};

// Post local air quality
function searchLocalAirQuality(){
    var localAirq = JSON.parse(localStorage.getItem("localCity"));
    console.log(localAirq);
    local.textContent = `Local City: ${localAirq.city}`;
    localAirResults.textContent = `Local Air Quality: ${localAirq.aqi}`;
};

// Post searched green house gas data
function postGreenHouseGasData(){
    var postGHG = JSON.parse(localStorage.getItem("searchedGreenhouse"));
    console.log(postGHG);
    co2Searched.textContent = `Searched CO² Concentration: ${postGHG.co2} ppmv`;
    ch4Searched.textContent = `Searched CH⁴ Concentration: ${postGHG.ch4} mol/cm²`;
    ozoneSearched.textContent = `Searched Ozone Concentration: ${postGHG.ozone} mol/cm²`;
    vaporSearched.textContent = `Searched Water Vapor Concentration: ${postGHG.water_vapor} cm`;
};

// Post local green house gas data
function postGHGLocal(){
    var postGHGLocal = JSON.parse(localStorage.getItem("localGreenhouse"));
    console.log(postGHGLocal);
    co2Local.textContent = `Local CO² Concentration: ${postGHGLocal.co2} ppmv`;
    ch4Local.textContent = `Local CH⁴ Concentration: ${postGHGLocal.ch4} mol/cm²`;
    ozoneLocal.textContent = `Local Ozone Concentration: ${postGHGLocal.ozone} mol/cm²`;
    vaporLocal.textContent = `Local Water Vapor Concentration: ${postGHGLocal.water_vapor} cm`;
};

searchAirQuality();
searchLocalAirQuality();
postGreenHouseGasData();
postGHGLocal();
