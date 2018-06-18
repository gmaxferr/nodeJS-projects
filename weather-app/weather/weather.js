
const request = require('request');

var getWeather = (lat, lng, callback) => {

    if(lat && lng){    

        request({
            url: `https://api.darksky.net/forecast/7f76abe9057e3aa5f1605944ef489d49/${lat},${lng}`,
            json: true
        }, (error, response, body) => {

            if(error){
                callback("ERROR: Can't connect to forecast server");
            }else if(response.code === 400){
                callback(body.error);
            }else{
                callback(undefined, {
                    summary: body.currently.summary,
                    precipProbability: body.currently.precipProbability,
                    temperature: (body.currently.temperature -32)*5/9,
                    humidity: body.currently.humidity,
                    pressure: body.currently.pressure,
                    windSpeed: body.currently.windSpeed
                })
            }

        });
        
    }else{
        console.log("ERROR: Invalid Lat or Long")
    }

};

module.exports = {
    getWeather
}