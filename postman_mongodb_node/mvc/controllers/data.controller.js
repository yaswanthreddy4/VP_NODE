const data = require('../models/data.json');
const conn = require('../models/db.connection');
const CONFIG = require('../config');
// let ObjectId = require('mongodb').ObjectId;
// const path = require('path')

// module.exports.getMethod = (req, res, next) => {
//     console.log(req.url + " " + req.method)
//     console.log(req.query);
//     let offset = 0;
//     let count = 5;
//     if (req.query && req.query.offset && req.query.count) {
//         offset = parseInt(req.query.offset, 10)
//         count = parseInt(req.query.count, 10)
//     }
//     let finalData = data.slice(offset, offset + count)
//     res.send(finalData)
//         // res.sendFile(path.join(__dirname, '../models/data.js'))
// };

// module.exports.postMethod = (req, res, next) => {
//     // console.log("Add One Hotels Post");
//     // res.send('this is post method line');
//     console.log(req.url + " " + req.method)
//     console.log(req.body)
//     res.json(req.body)
// };

// module.exports.putMethod = (req, res, next) => {
//     // res.send('this is put method line')
//     console.log(req.url + " " + req.method)
//     console.log(req.body)
//     res.send(req.body)
// };

// module.exports.patchMetod = (req, res, next) => {
//     // res.send('thos is patch method')
//     console.log(req.url + " " + req.method)
//     res.send(req.body)
// };

// module.exports.deleteMethod = (req, res, next) => {
//     // res.send('this is delete method line')
//     console.log(req.url + " " + req.method)
//     console.log(req.body)
//     res.send(req.body)
// };


module.exports.allHotels = (req, res, next) => {
    console.log(req.query);
    let db = conn.get().db(CONFIG.DBNAME).collection('hotels')
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10)
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10)
    }
    collection.find({}).skip(offset).limit(count)
        .toArray(function(error, hotels) {
            if (error) {
                console.log(error)
                res.status(404).json({
                    message: "Hotels Records Not Found",
                    error: error
                })
            } else {
                res.status(200).json(hotels)
            }
        })
};

module.exports.postMethod = (req, res, next) => {
    // console.log("Add One Hotels Post");
    // res.send('this is post method line');
    console.log(req.url + " " + req.method)
    console.log(req.body)
    res.json(req.body)
};

module.exports.putMethod = (req, res, next) => {
    // res.send('this is put method line')
    console.log(req.url + " " + req.method)
    console.log(req.body)
    res.send(req.body)
};

module.exports.patchMetod = (req, res, next) => {
    // res.send('thos is patch method')
    console.log(req.url + " " + req.method)
    res.send(req.body)
};

module.exports.deleteMethod = (req, res, next) => {
    // res.send('this is delete method line')
    console.log(req.url + " " + req.method)
    console.log(req.body)
    res.send(req.body)
};