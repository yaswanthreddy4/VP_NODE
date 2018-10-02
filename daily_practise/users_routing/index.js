const express = require('express');
const fs = require('fs');
const path = require('path');
const user_route = require('./mvc/routers/user.route');

const server = express();
server.set('port', 3366);
server.set('host', '127.0.0.1');

server.use(function(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});
server.use('/api', user_route)


server.listen(server.get('port'), server.get('host'), function(req, res) {
    console.log("server is setup & ready to launch");
});