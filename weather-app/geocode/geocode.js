
const request = require('request') 

var geocodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        var encoded_address = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY`,
            json: true
        }, (error, response, body) => {
            if(error){
                reject("ERROR: Can't connect to google server.");
            }else if(body.status === "ZERO_RESULTS"){
                reject("ERROR: Unable to find address.");
            }else if(body.status === "OK"){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
}

module.exports = {
    geocodeAddress
};
