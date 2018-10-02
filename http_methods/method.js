const express = require('express');
const hotel_router = require('../http_methods/mvc/routers/hotel_router')
const server = express();
server.set('port', 3250);
server.set('host', '127.0.0.1');

server.use(function(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});
server.use('/api', hotel_router);
server.listen(server.get('port'), server.get('host'), function(res, req) {
    console.log('server is created');
});