const mongoose = require('mongoose');
const config = require('../configs');
require('./hotel.model')
const options = {
    // user: config.dbuser,
    // pwd: config.dbpwd,
    authSource: config.authSource,
    useNewUrlParser: true
};

mongoose.connect(config.dburl, options);

let connection = mongoose.connection;
connection.on('error', function(error) {
    console.log("Connection Failed Via Mongoose");
    console.log(error);
});

connection.once('open', function() {
    console.log("Connection Successful Via Mongoose");

});

function graceFulShutDown(signal, callback) {
    connection.close();
    console.log('Mongo Connection Object Closed');
    console.log('App Terminated Due To: ' + signal);
    callback();
}

process.on('SIGINT', function() {
    graceFulShutDown('SIGINT', function() {
        process.exit(0);
    });
});