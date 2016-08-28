var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/timer', express.static(__dirname + '/public/timer-test.html'));
app.use('/jobSeq', express.static(__dirname + '/public/jobSeq-test.html'));
app.use('/ajax', express.static(__dirname + '/public/ajax-test.html'));

app.get('/api/categories', function (req, res, next) {
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

app.listen(3000, function() {
	console.log('Server is listening on port 3000');
});