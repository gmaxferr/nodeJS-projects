console.log('Staring notes.js')
const fs = require('fs')
const _ = require('lodash')

/*
 * Gets Notes from 'notes-data.json' file
 */
var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes-data.json"));
    } catch (err) {
        return [];
    }
}

/*
 * Saves Notes array in 'notes-data.json' file
 */
var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
}



var addNote = (title, body) => {
    var notes = fetchNotes();
    
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var toKeep = notes.filter((note)=> note.title !== title)
    saveNotes(toKeep);
    return (notes.length - toKeep.length) > 0;
};

var getAllNotes = () => {
    console.log('Getting All Notes')
}

var listNotes = () => {
    debugger;
  var notes = fetchNotes();
  for (index in notes) {
    console.log(`Note #${_.toString(_.toInteger(index) +1)}`);
    logNote(notes[index]);
    
  }
};

var getNote = (title) => {
    var notes = fetchNotes()
    var note = notes.filter((note) => note.title === title);
    return note[0];
};

var logNote = (note) => {
    debugger;
    console.log("/---------------------------------------------------------- - - - - - - -  -   -    -    -");
    console.log(`| Title:    => ${note.title}`);
    console.log("+- - - - -                                                                                ");
    console.log(`| Body:     => ${note.body}`);
    console.log("\\---------------------------------------------------------- - - - - - - -  -   -    -    -");
}

module.exports = {
  addNote,
  getAll: getAllNotes,
  listNotes,
  removeNote,
  getNote,
  logNote
};