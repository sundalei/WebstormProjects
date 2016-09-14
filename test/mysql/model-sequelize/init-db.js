'use strict';

var register = require('babel-register');

register({
    presets: ['stage-3']
});

const model = require('./model.js');
model.sync();

console.log('init db ok.');