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
var homeBtn = document.getElementById("home");

// Post searched air quality
function searchAirQuality(){
    var postAirq = JSON.parse(localStorage.getItem("searchedCity"));
    airResults.textContent = `Searched City: ${postAirq.city}`;
    aqiResult.textContent = postAirq.aqi;
// color code searched air quality
    var airQuality = postAirq.aqi;
    if (airQuality <= 50) {
        aqiResult.setAttribute("id", "good");
    } else if (airQuality > 50 && airQuality <= 100) {
        aqiResult.setAttribute("id", "moderate");
    } else if (airQuality > 100 && airQuality <= 150) {
        aqiResult.setAttribute("id", "sensitive");
    } else if (airQuality > 150 && airQuality <= 200) {
        aqiResult.setAttribute("id", "unhealthy");
    } else {
        aqiResult.setAttribute("id", "very-unhealthy");
    }
};

// Post local air quality
function searchLocalAirQuality(){
    var localAirq = JSON.parse(localStorage.getItem("localCity"));
    local.textContent = `Local City: ${localAirq.city}`;
    localAirResults.textContent = localAirq.aqi;
// Color code local air quality
    var airQuality = localAirq.aqi;
    if (airQuality <= 50) {
        localAirResults.setAttribute("id", "good");
    } else if (airQuality > 50 && airQuality <= 100) {
        localAirResults.setAttribute("id", "moderate");
    } else if (airQuality > 100 && airQuality <= 150) {
        localAirResults.setAttribute("id", "sensitive");
    } else if (airQuality > 150 && airQuality <= 200) {
        localAirResults.setAttribute("id", "unhealthy");
    } else {
        localAirResults.setAttribute("id", "very-unhealthy");
    }
};

// Post searched green house gas data
function postGreenHouseGasData(){
    var postGHG = JSON.parse(localStorage.getItem("searchedGreenhouse"));
    co2Searched.textContent = `Searched CO² Concentration: ${postGHG.co2} ppmv`;
    ch4Searched.textContent = `Searched CH⁴ Concentration: ${Number(postGHG.ch4).toLocaleString()} mol/cm²`;
    ozoneSearched.textContent = `Searched Ozone Concentration: ${Number(postGHG.ozone).toLocaleString()} mol/cm²`;
    vaporSearched.textContent = `Searched Water Vapor Concentration: ${postGHG.water_vapor} cm`;
};

// Post local green house gas data
function postGHGLocal(){
    var postGHGLocal = JSON.parse(localStorage.getItem("localGreenhouse"));
    co2Local.textContent = `Local CO² Concentration: ${postGHGLocal.co2} ppmv`;
    ch4Local.textContent = `Local CH⁴ Concentration: ${Number(postGHGLocal.ch4).toLocaleString()} mol/cm²`;
    ozoneLocal.textContent = `Local Ozone Concentration: ${Number(postGHGLocal.ozone).toLocaleString()} mol/cm²`;
    vaporLocal.textContent = `Local Water Vapor Concentration: ${postGHGLocal.water_vapor} cm`;
};

homeBtn.addEventListener("click", function(){
    window.location.href = "./index.html";
});

searchAirQuality();
searchLocalAirQuality();
postGreenHouseGasData();
postGHGLocal();