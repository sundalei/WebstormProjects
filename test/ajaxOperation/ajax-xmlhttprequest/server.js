/**
 * Created by sun_d on 2016/8/27.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api/categories', function (req, res, next) {
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
