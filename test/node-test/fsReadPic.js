'use strict';

var fs = require('fs');

fs.readFile('/home/sundalei/cat.jpg', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes.');
    }
});