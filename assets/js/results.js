//Function to display air quality data
//Function to display the hospital information
    //"If you are having dificulties breathing - here is the closest hospital to you"

    //hospital data inputs
// let nameOne = document.querySelector(".name1");
// let distanceOne = document.querySelector(".distance1")
// let contactOne = document.querySelector(".contact1");
// let nameTwo = document.querySelector(".name2");
// let distanceTwo = document.querySelector(".distance2")
// let contactTwo = document.querySelector(".contact2");
// let nameThree = document.querySelector(".name3");
// let distanceThree = document.querySelector(".distance3")
// let contactThree = document.querySelector(".contact3");
//location data
// let lat1;
// let lon1;
// let lat2;
// let lon2;

var airResults = document.getElementById("air-results");
var aqiResult = document.getElementById("aqi-results");
var local = document.getElementById("local-results");
var localAirResults = document.getElementById("local-aqi");
var greenHouseGasResults = document.getElementById("greenhouse-results")
var localGHG = document.getElementById("local-ghg-results")

function searchAirQuality(){
    var postAirq = JSON.parse(localStorage.getItem("searchedCity"));
    console.log(postAirq);
    airResults.textContent = `Searched City: ${postAirq.city}`;
    aqiResult.textContent = `Searched City Air Quality: ${postAirq.aqi}`;
}

function searchLocalAirQuality(){
    var localAirq = JSON.parse(localStorage.getItem("localCity"));
    console.log(localAirq);
    local.textContent = `Local City: ${localAirq.city}`;
    localAirResults.textContent = `Local Air Quality: ${localAirq.aqi}`;
}

function postGreenHouseGasData(){
    var postGHG = JSON.parse(localStorage.getItem("searchedGreenhouse"));
    console.log(postGHG);
    greenHouseGasResults.textContent = `Current Greenhouse Gases: ${postGHG.data[0]}`;
}

function postGHGLocal(){
    var postGHGLocal = JSON.parse(localStorage.getItem("localGreenhouse"));
    console.log(postGHGLocal);
    localGHG.textContent = `Current Greenhouse Gases Locally: ${postGHGLocal.data[0]}`;
}

// distance between browser location and nearest hospital
function distance(){
//function distance(lat1, lon1, lat2, lon2, unit) {
            // 	if ((lat1 == lat2) && (lon1 == lon2)) {
            // 		return 0;
            // 	}
            // 	else {
            // 		var radlat1 = Math.PI * lat1/180;
            // 		var radlat2 = Math.PI * lat2/180;
            // 		var theta = lon1-lon2;
            // 		var radtheta = Math.PI * theta/180;
            // 		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            // 		if (dist > 1) {
            // 			dist = 1;
            // 		}
            // 		dist = Math.acos(dist);
            // 		dist = dist * 180/Math.PI;
            // 		dist = dist * 60 * 1.1515;
            // 		if (unit=="K") { dist = dist * 1.609344 }
            // 		if (unit=="N") { dist = dist * 0.8684 }
            // 		return dist;
            // 	}
            // }
}

searchAirQuality()
searchLocalAirQuality()
postGreenHouseGasData()