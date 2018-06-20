// third party modules
const yargs = require('yargs');
const axios = require('axios')

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

var encoded_address = encodeURIComponent(argv.a);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY`


axios.get(geocodeURL).then((response) => {

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find the address.');
    }
    console.log(response.data);


    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherURL = `https://api.darksky.net/forecast/7f76abe9057e3aa5f1605944ef489d49/${lat},${lng}`

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL);

}).then((weatherResponse)=>{
    var info = {
        summary: weatherResponse.data.currently.summary,
        precipProbability: weatherResponse.data.currently.precipProbability,
        temperature: (weatherResponse.data.currently.temperature -32)*5/9, //converted to celsius
        humidity: weatherResponse.data.currently.humidity,
        pressure: weatherResponse.data.currently.pressure,
        windSpeed: weatherResponse.data.currently.windSpeed
    }

    console.log(JSON.stringify(info, undefined, 2));


}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log("cannot connect to servers.");
    } else {
        console.log(e.message);
    }
});