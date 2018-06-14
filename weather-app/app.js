
const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=Praceta%20de%20Avilho%2079&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});
