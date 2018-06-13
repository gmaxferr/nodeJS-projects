console.log('Starting app.js');

 
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');


// console.log(_.isString(true))
// console.log(_.isString("true"))
// console.log(_.isString(1))^

//var filtered_array = _.uniq(["Hey", 1, 2, 3,"PPP", 1, 2, 3])
//console.log(filtered_array)
const argv = yargs.argv;
var command = argv._[0];
// console.log('Command: '+command)
// console.log('Process: '+process.argv)

switch(command){
    case 'add':
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'remove':
        notes.removeNote(argv.title)
        break;
    case 'read':
        notes.getNote(argv.title)
        break;
    default:
        console.log('Command not recognized!')
        break;
}