const request = require('postman-request');
require('dotenv').config();

const getWeather_details = require('./utils/getweather');

const location = process.argv[2]

if (!location) {
    console.log('Please provide a specific location')
} else {
    getWeather_details(location, (error, data)=> {
        if (error){
            return error
        } else {
            console.log(data);
        }
        
    })
}







//Using Radar API
// const radURL = "https://api.radar.io/v1/search/autocomplete"

// const radPlace = '841+Broadway'
// const lat_lon = '40.70390%2C-73.98670'

// const radQuery = '?query='+ radPlace
// const near = '&near='+ lat_lon

// const radAPI = `Authorization: ${process.env.RADAR_API_KEY}`

// const radLink = `${radURL,radQuery,near,radAPI}`;

// "https://api.radar.io/v1/search/autocomplete?query=841+Broadway&near=40.70390%2C-73.98670&-HAuthorization:prj_test_sk_5e627d0dccaf9bd3fc38f9a432402f7a40351d7a"


// 'https://api.radar.io/v1/users-HAuthorization:prj_test_sk_5e627d0dccaf9bd3fc38f9a432402f7a40351d7a'
