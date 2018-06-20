
const request = require('request');

var getWeather = (lat, lng) => {

    return new Promise((resolve, reject)=>{

        if(lat && lng){    

            request({
                url: `https://api.darksky.net/forecast/7f76abe9057e3aa5f1605944ef489d49/${lat},${lng}`,
                json: true
            }, (error, response, body) => {
    
                if(error){
                    reject("ERROR: Can't connect to forecast server");
                }else if(response.code === 400){
                    reject(body.error);
                }else{
                    resolve({
                        summary: body.currently.summary,
                        precipProbability: body.currently.precipProbability,
                        temperature: (body.currently.temperature -32)*5/9, //converted to celsius
                        humidity: body.currently.humidity,
                        pressure: body.currently.pressure,
                        windSpeed: body.currently.windSpeed
                    })
                }
    
            });
            
        }else{
            reject("Invalid Latitude or Longitude")
        }

    });


};

module.exports = {
    getWeather
}