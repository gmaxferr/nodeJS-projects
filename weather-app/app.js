
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


geocode.geocodeAddress('4460 686').then((result) => {
    console.log(JSON.stringify(result, undefined, 2))

    return  weather.getWeather(result.latitude, result.longitude).then((resultWeather)=>{
        console.log(JSON.stringify(resultWeather,undefined,2 ));
    }).catch((errors)=>{console.log("ERROR: " + errors)});

}).catch((errorMessage) => {
    console.log("ErrorMessage: " + errorMessage)
});
