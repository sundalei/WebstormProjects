/**
 * Created by sun_d on 2016/8/25.
 * http://cnodejs.org/topic/4f939c84407edba2143c12f7
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

app.post('/download', function (req, res, next) {

    var imgData = req.body.imageData;

    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    fs.writeFile("out.png", dataBuffer, function(err) {
        if(err){
            res.send(err);
        }else{
            res.send("Success");
        }
    });
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
