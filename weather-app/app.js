
const request = require('request');
const yargs = require('yargs');

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

console.log(argv)

var encoded_address; 

if(argv.a){
    encoded_address = encodeURIComponent(argv.a)
}
console.log("------")
console.log(encoded_address)
console.log("------")

if(encoded_address){

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=AIzaSyDipPwo0vbJ6dnJag9KosAe_uOrLDcEGQY`,
    json: true
}, (error, response, body) => {
    if(error){
        console.log("Can't connect to google server.");
    }else if(body.status === "ZERO_RESULTS"){
        console.log("Unable to find address.");
    }else if(body.status === "OK"){
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});

}