console.log('Staring notes.js')

var addNote = (title, body) => {
    console.log('adding note:\nTitle: ' + title + '\nBody: ' + body)
};

var removeNote = (title) => {
    console.log('removing note with title: \"' + title + '\"')
};

var getAllNotes = (title, body) => {
    console.log('listing all notes to console')
};

var getNote = (title) => {
    console.log('getting note with title: \"' + title + '\"')
};

module.exports = {
    addNote,
    getAll: getAllNotes,
    removeNote,
    getNote
};