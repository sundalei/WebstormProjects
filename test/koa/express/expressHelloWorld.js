'use strict';

var 
    express = require('express'),
    fs = require('fs');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/test', function(req, res) {
    fs.readFile(__dirname + '/static/file1', function (err, data) {
        if (err) {
            // console.log(err);
            res.status(500).send('read file1 error');
        }
        fs.readFile(__dirname + '/static/file2', function (err, data) {
            if(err) {
                res.status(500).send('read file2 error');
            }
            res.type('text/plain');
            res.send(data);
        });
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});