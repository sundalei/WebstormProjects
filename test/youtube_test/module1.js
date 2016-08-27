/**
 * Created by sun_d on 2016/8/27.
 */

var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('got request');
    response.write('hi');
    response.end();
});

server.listen(3000);