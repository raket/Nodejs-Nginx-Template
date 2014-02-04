var express = require('express');
var app = express();
app.get('/hello', function(req, res){
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', Buffer.byteLength(body));
	res.end(body);
});
app.listen('/tmp/node.sock');
console.log('Listening on nginx socket');