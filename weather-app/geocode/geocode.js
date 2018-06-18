
const request = require('request') 

var geocodeAddress  = (address, callback) => {

    if(address){
        var encoded_address = address = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY`,
            json: true
        }, (error, response, body) => {
            if(error){
                callback("ERROR: Can't connect to google server.");
            }else if(body.status === "ZERO_RESULTS"){
                callback("ERROR: Unable to find address.");
            }else if(body.status === "OK"){
                callback(undefined,{
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
        
    }else{
        console.log("ERROR: address must be provided.");
    }
};




module.exports = {
    geocodeAddress
};
