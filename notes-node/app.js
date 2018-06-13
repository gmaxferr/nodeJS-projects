console.log('Starting app.js');

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

// console.log(_.isString(true))
// console.log(_.isString("true"))
// console.log(_.isString(1))^

var filtered_array = _.uniq(["Hey", 1, 2, 3,"Hey", 1, 2, 3])
console.log(filtered_array)