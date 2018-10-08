require('./mvc/models/model').OPEN();
const express = require('express');
const config = require('./mvc/configs/config');
const body_parser = require('body-parser');
const router = require('./mvc/routes/route');
const path = require('path');


const app = express();


app.use(body_parser.urlencoded({ extended: false }));
// app.use(body_parser.json({ type: 'application/json' }));
// app.use(body_parser.raw({ type: 'application/json' }))

app.use(function(req, res, next) {
    console.log(req.url + " " + req.method);
    next();
});

app.use('/api', router);

app.listen(config.port, config.host, function(req, res) {
    console.log('server is up at 127.0.0.1: 3250')
});