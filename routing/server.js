const express = require('express');
const path = require('path');
const hotelRoutes = require('./apps/routes/hotel.router');
const server = express();
server.set('port', 3244);
server.set('host', '127.0.0.1');

// server.use(express.static(path.join(__dirname, 'apps')));
server.use(function(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});
server.use('/', hotelRoutes);

server.listen(server.get('port'), server.get('port'), function(req, res) {
    console.log('Server is Created and running');
})