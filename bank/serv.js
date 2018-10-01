var http = require('http');

http.createServer((request, response) => {
    // response.writeHead(200, 'this is test ok by  code ');
    response.write('<h1>hi this is just test for me</h1> ');
    response.end();

}).listen(8085)
console.log('tst ok 8081');