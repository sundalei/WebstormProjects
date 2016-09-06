'use strict';

var 
    koa = require('koa'),
    fs = require('fs');

var app = koa();

app.use(function *() {
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body = data;
});

function doReadFile1() {
    return new Promise(function(resolve, reject) {
        fs.readFile(__dirname + '/static/file1', 'utf8', function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }).then(function(data) {
        console.log(data);
        return data;
    }).catch(function(reason) {
        console.log(reason);
    });
}

function doReadFile2() {
    return new Promise(function(resolve, reject) {
        fs.readFile(__dirname + '/static/file2', 'utf8', function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }).then(function(data) {
        console.log(data);
        return data;
    }).catch(function(reason) {
        console.log(reason);
    });
}

app.listen(3000, function() {
    console.log('Example app is listening on port 3000!');
});

