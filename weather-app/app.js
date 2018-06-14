
const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Praceta%20de%20Avilho%2079&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY',
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`)
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
});
