'use strict';

var fs = require('fs');

var rs = fs.createReadStream('/home/sundalei/study/learnJS/jquery/ajaxTest.html', {encoding: 'utf8'});
var ws = fs.createWriteStream('pipe.txt', {defaultEncoding: 'utf8'});

rs.pipe(ws);