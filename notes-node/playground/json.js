
// var obj = {
//     name: "Guilherme",
//     age: 21
// };

// var stringObj = JSON.stringify(obj);
// console.log(stringObj)

// var personString = '{"name": "Guilherme", "age": 21}'

// var person = JSON.parse(personString)

// console.log(person.name)
// console.log(person.age)

const fs = require('fs');

var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(note)


