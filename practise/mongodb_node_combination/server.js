require('./mvc/models/dbconnection').OPEN;
const EXPRESS = require('express');
const CONFIG = require('./mvc/config');
const router = require('./mvc/routers/route');
// var path = require('path');
// var bodyParser = require('body-parser');


const app = EXPRESS();

app.use(function(req, res, next) {
    console.log(req.method + "    " + req.url);
    next();
})

app.use('/api', router)


app.listen(CONFIG.PORT, CONFIG.HOST, function(req, res) {
    console.log('server is up');
});