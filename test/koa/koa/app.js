'use strict';

var koa = require('koa');
var app = koa();

app.use(function *() {
    yield doReadFile1;
    var data = yield doReadFile2;
    this.body = data;
});

function doReadFile1() {
    return 'hello';
}

function doReadFile2() {
    return 'world';
}

app.listen(3000, function() {
    console.log('Example app is listening on port 3000!');
});

