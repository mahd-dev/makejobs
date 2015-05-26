
// load the things we need
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080, function (err) {
	if(err) console.log(err);
	else console.log("Server started");
});