var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/ajax', express.static(__dirname + '/public/ajaxTest.html'));
app.use('/ajaxTest', express.static(__dirname + '/public/ajaxGetTest.html'));
app.use('/ajaxTest2', express.static(__dirname + '/public/ajaxPostTest.html'));
app.use('/ajaxTest3', express.static(__dirname + '/public/ajaxJSONTest.html'));
app.use('/ajaxTest4', express.static(__dirname + '/public/ajaxJSONPTest.html'));

app.get('/api/categories', function(req, res, next) {
	var categories = [];

	var category = {
		"id":"0013738748415562fee26e070fa4664ad926c8e30146c67000",
		"name":"编程",
		"tag":"tech",
		"description":"",
		"display_order":0,
		"created_at":1373874841556,
		"updated_at":1429763779958,
		"version":5
	};

	var category2 = {
		"id":"0013738748248885ddf38d8cd1b4803aa74bcda32f853fd000",
		"name":"读书",
		"tag":"other",
		"description":"",
		"display_order":1,
		"created_at":1373874824888,
		"updated_at":1429763779974,
		"version":5
	};

	categories.push(category);
	categories.push(category2);

    res.json({'categories' : categories});
});

app.get('/api/get', function(req, res, next) {
	var query = JSON.stringify(req.query);
	res.send(query);
});

app.post('/api/post', function(req, res, next) {
	var body = JSON.stringify(req.body);
	res.send(body);
});

app.get('/api/json', function(req, res, next) {
	res.send(req.query);
});

app.get('/api/jsonp', function(req, res, next) {
	var categories = [];

	var category = {
		"id":"0013738748415562fee26e070fa4664ad926c8e30146c67000",
		"name":"编程",
		"tag":"tech",
		"description":"",
		"display_order":0,
		"created_at":1373874841556,
		"updated_at":1429763779958,
		"version":5
	};

	var category2 = {
		"id":"0013738748248885ddf38d8cd1b4803aa74bcda32f853fd000",
		"name":"读书",
		"tag":"other",
		"description":"",
		"display_order":1,
		"created_at":1373874824888,
		"updated_at":1429763779974,
		"version":5
	};

	categories.push(category);
	categories.push(category2);

	var message = JSON.stringify(categories);
	console.log(message);
	res.send('helloworld(' + message + ')');
});

app.listen(3000, function() {
	console.log('Server is listening on port 3000');
});