// API key
var airQualityAPIkey = "4929c896-1465-4dd5-927c-6506a0034f03";
//buttons
let search = document.querySelector("#check");

//location data
let lat1;
let lon1;
let lat2;
let lon2;

var cityName;

//current air quality element
let airQualityConditions = document.querySelector("#air-q");

//use Geolocation API to get user location on entering site
function getGeolocation() {
    if (navigator.geolocation) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            lat1 = position.coords.latitude;
            lon1 = position.coords.longitude;
        });
    } 
};

getGeolocation();

// API fetch for searched air quality data
function getAirQuality() {
    let requestUrl = `http://api.airvisual.com/v2/city?city=${cityName}&state=${stateInput}&country=USA&key=${airQualityAPIkey}`;
    
    fetch(requestUrl)
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        storeAir(data);
        console.log(data);
        return (data);       
    })
    return;
};

// store searched air quality in local storage
function storeAir(data) {
    let aqius = data.data.current.pollution.aqius;
    let mainus = data.data.current.pollution.mainus;
    lon2 = data.data.location.coordinates[0];
    lat2 = data.data.location.coordinates[1];

    let currentCityScore = {
        city: cityName,
        aqi: aqius,
        main: mainus,
        lon2,
        lat2
    };
    localStorage.setItem("searchedCity", JSON.stringify(currentCityScore));
    getGreenhouseInfo();
    getGreenhouseInfoLocal();
    
};


//API fetch for local air quality data
function getLocalAir(){
    
    let localURL = `http://api.airvisual.com/v2/nearest_city?key=${airQualityAPIkey}`;

    fetch (localURL)
    .then(function(response) {
        return response.json()
    }).then(function(data2) {
        console.log(data2);
        storeLocalAir(data2);
        return (data2);
    })
};

//Store local air quality in local storage
function storeLocalAir(data2) {
    let aqius = data2.data.current.pollution.aqius;
    let mainus = data2.data.current.pollution.mainus;
    lon1 = data2.data.location.coordinates[0]
    lat1 = data2.data.location.coordinates[1];

    let currentCityScore = {
        city: data2.data.city,
        aqi: aqius,
        main: mainus,
        lon1,
        lat1
    };
    localStorage.setItem("localCity", JSON.stringify(currentCityScore)); 
};

// API fetch for searched greenhouse gas data
function getGreenhouseInfo() {
    console.log(lat2);
    console.log(lon2);
    fetch (`https://api.ambeedata.com/ghg/latest/by-lat-lng?lat=${lat2}&lng=${lon2}`, {
        "method": "GET",
        "headers": {
            "x-api-key": "fbca53ae9f526d76e4d68cd72d51e83aded8b5b0000ae8b3cc47de6a5521c541",
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data);
        storeSearchedGas(data);
        return (data);
    })
   
};

// store Greenhouse searched Data
function storeSearchedGas(data){
    let co2Searched = data.data[0].co2.value;
    let ozoneSearched = data.data[0].ozone.value;
    let ch4Searched = data.data[0].ch4.value;
    let waterVaporSearched = data.data[0].water_vapor.value;

    let searchedGas = {
        co2: co2Searched,
        ozone: ozoneSearched,
        ch4: ch4Searched,
        water_vapor: waterVaporSearched
    }
    localStorage.setItem("searchedGreenhouse", JSON.stringify(searchedGas));
    // Change html after data is saved
    // window.location.href = "./results.html";
};

// API for local greenhouse gas data
function getGreenhouseInfoLocal() {
    console.log(lat1);
    console.log(lon1);
    fetch (`https://api.ambeedata.com/ghg/latest/by-lat-lng?lat=${lat1}&lng=${lon1}`, {
        "method": "GET",
        "headers": {
            "x-api-key": "fbca53ae9f526d76e4d68cd72d51e83aded8b5b0000ae8b3cc47de6a5521c541",
            "Content-type": "application/json"
        }
    })
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data);
        storeLocalGas(data);
        return (data);
    })
};

// store loca greenhouse data to local storage
function storeLocalGas(data){
    let co2Searched = data.data[0].co2.value;
    let ozoneSearched = data.data[0].ozone.value;
    let ch4Searched = data.data[0].ch4.value;
    let waterVaporSearched = data.data[0].water_vapor.value;

    let localGas = {
        co2: co2Searched,
        ozone: ozoneSearched,
        ch4: ch4Searched,
        water_vapor: waterVaporSearched
    }
    localStorage.setItem("localGreenhouse", JSON.stringify(localGas));
}


// event listener on search button starts function calls
search.addEventListener("click", function(event) {
    cityName = document.querySelector("#search-input").value
    e = document.querySelector("#state-select");
    stateValue = e.options[e.selectedIndex].value;
    stateInput = e.options[e.selectedIndex].text;
    getAirQuality();
    getLocalAir();
    
});