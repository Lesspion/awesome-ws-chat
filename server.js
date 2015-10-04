var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var ent = require('ent');
var swig = require('swig');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

swig.setDefaults({cache: false});

app.get('/:room?', function (req, res) {
	console.log(typeof req.params.room);
	var title = req.params.room ? "good" : "bad";
	res.render('hello', {
		good: title
	});
});

server.listen(8080);
console.log('server is running on port 8080');