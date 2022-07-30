// Event Listener to search Button
// Event Listener to Hospitals
    // Event listener to current location
// Set up Air quality API fetch based on search
// Set up hosipital API  fetch
// Use Local Storage *****
// Save search in local storage to then apply it to the find hospitals??
    // pull 3 closest hospitals initially
    // find closest hosptital
    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples

            //Need distance calculator from lats and longs
            //This function uses distance as the crow flies
            
//Function to display air quality data
//Function to display the hospital information
    //"If you are having dificulties breathing - here is the closest hospital to you"

// Add information about poor air quality / images of smog

//buttons
let search = document.querySelector("#check");
let hospitalFinder = document.querySelector("#find");
//hospital data inputs
let nameOne = document.querySelector(".name1");
let distanceOne = document.querySelector(".distance1")
let contactOne = document.querySelector(".contact1");
let nameTwo = document.querySelector(".name2");
let distanceTwo = document.querySelector(".distance2")
let contactTwo = document.querySelector(".contact2");
let nameThree = document.querySelector(".name3");
let distanceThree = document.querySelector(".distance3")
let contactThree = document.querySelector(".contact3");
//location data
let lat1;
let lon1;
let lat2;
let lon2;



function getAirQuality(){
    console.log ("Button Works");
    // fetch
    // postAirQuality();
}

function getHospitalData(){
    console.log ("This button works too!")
    // fetch
    // postHospitalData();
}


function postAirQuality(){

}

function postHospitalData(){


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

search.addEventListener("click", getAirQuality);

hospitalFinder.addEventListener("click", getHospitalData);
