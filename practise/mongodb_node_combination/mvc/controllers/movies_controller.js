const conn = require('../models/dbconnection');
const CONFIG = require('../config')
require('body-parser')
    // const ObjectId = require('mongodb').ObjectId;

module.exports.addMovie = (req, res, next) => {
    console.log("Add One Movie");
    console.log(req.body);
    if (req.body && req.body.name) {
        var collection = conn.get().db(CONFIG.DBNAME).collection('telugu');
        collection.insertOne(req.body, function(error, response) {
            if (error) {
                res
                    .status(500).json({
                        message: "Internal Server Error",
                        error: error
                    });
            } else {
                res.status(200).json(response);
            }
        })
    } else {
        res
            .status(200)
            .json({
                message: "Required Feilds For creating movie is Missing"
            });
    }
}