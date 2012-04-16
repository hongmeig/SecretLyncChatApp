var http = require('http');
console.log("hello" + process.env.C9_PORT);
http.createServer(function( req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.C9_PORT, '127.0.0.1');
console.log('Server running at http://127.0.0.1');