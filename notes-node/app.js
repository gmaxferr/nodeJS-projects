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
        var note = notes.addNote(argv.title, argv.body);
        if(!note){
            console.log(`Note with title ${argv.title} already exists!`);
        }else {
            notes.logNote(note);
        }
        break;
    case 'list':
        notes.listNotes();
        break;
    case 'getAll':
        notes.getAll();
        break;
    case 'remove':
        var message = notes.removeNote(argv.title) ? 'removed successfully' : 'not found'
        console.log(`The note with title ${argv.title} was ${message}!`)
        break;
    case 'read':
        var note = notes.getNote(argv.title)
        if(note){
            notes.logNote(note)
        }else{
            console.log("Note NOT Found!");
        }
        break;
    default:
        console.log('Command not recognized!')
        break;
}