var http = require('http');

var callback = 
	function(req, res) {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end('Hello AWS!');
	}

var server = http.createServer(callback);
server.listen(8081);