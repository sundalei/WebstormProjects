/**
 * Created by sun_d on 2016/8/25.
 * http://cnodejs.org/topic/4f939c84407edba2143c12f7
 */
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
