console.log('Starting app.js');

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js')
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err){
//     if(err){
//         console.log('error occured!')
//     }
// })

// var res = notes.addNote();
var result = notes.sum(3, 5);
console.log(result);