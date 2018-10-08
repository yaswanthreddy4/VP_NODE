const MongoClient = require('mongodb').MongoClient;
const config = require('../configs/config');

let connection = null;
let open = function() {
    MongoClient.connect(config.dbUrl, {
            authSource: config.dbAuth,
            useNewUrlParser: true
        },
        function(error, client) {
            if (error) {
                console.log('DB Connection Failure!');
                console.log(error);
            } else {
                console.log('DB Connection Sucess!');
                connection = client;
            }
        })
}

let get = function() {
    return connection;
}

module.exports = {
    OPEN: open,
    GET: get
}

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