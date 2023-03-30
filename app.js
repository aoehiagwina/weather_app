const request = require('postman-request');
require('dotenv').config();

// const getAPI_KEY = require('../app.js');

// const WEATHER_API_KEY = getAPI_KEY();

// console.log(WEATHER_API_KEY);

const url = 'http://api.weatherstack.com/current';

const apiKey = process.env.WEATHER_API_KEY;
const access = 'access_key='+ apiKey;

let location = 'Liverpool';
const query = 'query='+ location

const unit = 'units=m'

const link = `${url}?${access}&${query}&${unit}`

request({url:link, json:true}, (error, response)=> {
    let feels_like = response.body.current.feelslike;
    let temp = response.body.current.temperature;
    let weather_description = response.body.current.weather_descriptions;
    console.log(`The current tmeprature is ${temp} degrees. However, it feels like ${feels_like} degrees, although its a bit ${weather_description[0]}.`);
})
