const express = require('express');
const data_router = require('./mvc/routes/data.router')
const bodyParse = require('body-parser');

const server = express();
server.set('port', 3500);
server.set('hostname', '127.0.0.1');

// server.use(bodyParse.urlencoded({ extended: false }));
// server.use(bodyParse.raw)
server.use(bodyParse.json());
server.use((req, res, next) => {
    next();
})

server.use('/api', data_router)
server.listen(server.get('port'), server.get('host'), function(req, res) {
    console.log("server is up");

});