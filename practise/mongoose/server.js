require('./mvc/models');
const express = require('express');
const config = require('./mvc/configs');
const route = require('./mvc/routes');
const body_parser = require('body-parser');

let app = express();

app.use(function(req, res, next) {
    console.log(req.url + " " + req.method);
    next();
});


app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());


app.use('/api', route);

app.listen(config.port, config.host, function(req, res) {
    console.log('server is up');
});