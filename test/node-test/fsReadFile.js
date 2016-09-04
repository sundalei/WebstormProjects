'use strict';

var fs = require('fs');

fs.readFile('/home/sundalei/study/learnJS/jquery/ajaxTest.html', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});