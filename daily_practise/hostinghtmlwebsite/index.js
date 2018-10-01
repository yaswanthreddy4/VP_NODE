const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();
server.set('port', 3035);
server.set('host', '127.0.0.1');
//middle function for hosting static data

server.use(express.static(path.join(__dirname, 'html')));
server.use(express.static(path.join(__dirname, 'coffee')));
//access point
server.use(function(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
})

// sending response to client
server.get('/', function(req, res) {
    console.log(req.method);
    console.log(req.url);
    res.sendFile(path.join(__dirname, './html/index.html'));
});
server.get('/coffee', function(req, res) {
    console.log(req.method);
    console.log(req.url);
    res.sendFile(path.join(__dirname, './coffeewebsite/index.html'));

})
server.get('/fuck', function(req, res) {
    res.send('im from fuck');
});


// Server Creation
server.listen(server.get('port'), server.get('host'), function() {
    console.log('Server is created & running');
})