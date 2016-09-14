'use strict';

var register = require('babel-register');

register({
    presets: ['stage-3']
});

const model = require('./model.js');
model.sync().catch(function (err) {
    console.log(err);
});

console.log('init db ok.');
process.exit(0);