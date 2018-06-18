
// third party modules
const yargs = require('yargs');

//my modules
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
            describe: "Address to fetch weather from",
            demand: true,
            alias: 'address',
            string: true
        }
    })
    .help().alias('help', 'h')
    .argv;


var result = geocode.geocodeAddress(argv.a, (errorMessage, result) => {

    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(result.address);

        weather.getWeather(result.latitude, result.longitude, (errorMessage, weatherResult) => {
            if(errorMessage){
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResult, undefined, 2));
            }
        });

    }
});


