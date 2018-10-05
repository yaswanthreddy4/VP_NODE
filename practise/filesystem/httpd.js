const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': ' text/plain' });
    res.write('hgjhgkjgkj');
    res.end();
}).listen(3031);
console.log("sucess");