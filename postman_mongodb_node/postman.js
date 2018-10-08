require('./mvc/models/db.connection');
const CONFIG = require('./mvc/config');
const express = require('express');
const data_router = require('./mvc/routes/data.router')
const bodyParse = require('body-parser');

const server = express();
// server.set('port', 3500);
// server.set('host', '127.0.0.1');

server.use(bodyParse.urlencoded({ extended: false }));
// server.use(bodyParse.raw)
// server.use(bodyParse.json());
server.use((req, res, next) => {
    next();
})

// server.use('/api', data_router)
// server.listen(server.get('host'), server.get('port'), function(req, res) {
//     console.log("server is up");
// });

server.use('/api', data_router)
server.listen(CONFIG.PORT, CONFIG.HOST, function(req, res) {
    console.log("server is up");
});