'use strict';

try {
var fs = require('fs');

var data = 'Hello, Node.js\nWelcome';
fs.writeFileSync('output.txt', data);
} catch(err) {
    console.log(err);
}