const MongoClient = require('mongodb').MongoClient;
const CONFIG = require('../config');

let connection = null;
let open = function() {
    MongoClient.connect(CONFIG.DBURL, CONFIG.DBAUTH,
        function(error, client) {
            if (error) {
                console.log("DB Connection Failure !!!");
                console.log(error);
            } else {
                connection = client;
                console.log("DB CONNection SuccessFull !!");
            }
        })
};
var get = function() {
    return connection;
}

module.exports = {
    OPEN: open,
    GET: get
}