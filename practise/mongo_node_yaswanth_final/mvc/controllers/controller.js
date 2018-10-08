const config = require('../configs/config');
const model = require('../models/model');
var ObjectId = require('mongodb').ObjectId;

module.exports.getAllHotels = (req, res, next) => {
    console.log(req.query);
    let collection = model.GET().db(config.DBNAME).collection('hotels');
    var offset = 0;
    var count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    collection.find({}).skip(offset).limit(count)
        .toArray(function(error, hotels) {
            if (error) {
                console.log(error);
                res
                    .status(404)
                    .json({
                        message: "Hotels Records Not Found",
                        error: error
                    });
            } else {
                res
                    .status(200)
                    .json(hotels);
            }

        })
}


module.exports.getOneHotel = (req, res, next) => {
    var hotelId = req.params.hotelId;
    console.log(req.params.hotelId);
    var collection = model.GET().db(config.DBNAME).collection('hotels');
    if (req.params && req.params.hotelId) {
        collection.findOne({
                _id: ObjectId(hotelId)
            },
            function(error, hotel) {
                if (error) {
                    res
                        .status(404)
                        .json({
                            message: "Hotel Records Not Found",
                            error: error
                        });
                } else {
                    res
                        .status(200)
                        .json(hotel);
                }
            });
    } else {
        res
            .status(404)
            .json({
                message: "Request Params HotelId is Not In Url"
            })
    }

}

module.exports.addUser = (req, res, next) => {
    console.log('adding one user');
    console.log((req.body));
    var collection = model.GET().db(config.DBNAME).collection('users');
    collection.insertOne(req.body,
        function(error, response) {
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
}


module.exports.deleteHotel = (req, res, next) => {
    var hotelId = req.params.hotelId;
    console.log(req.params.hotelId);
    var collection = model.GET().db(config.DBNAME).collection('hotels');
    if (req.params && req.params.hotelId) {
        collection.deleteOne({
                _id: ObjectId(hotelId)
            },
            function(error, hotel) {
                if (error) {
                    res
                        .status(404)
                        .json({
                            message: "Hotel Records Not Found",
                            error: error
                        });
                } else {
                    res
                        .status(200)
                        .json(hotel);
                }
            });
    }
    // if (req.params && req.params.name) {
    //     collection.deleteOne({
    //             name
    //         },
    //         function(error, hotel) {
    //             if (error) {
    //                 res
    //                     .status(404)
    //                     .json({
    //                         message: "Hotel Records Not Found",
    //                         error: error
    //                     });
    //             } else {
    //                 res
    //                     .status(200)
    //                     .json(hotel);
    //             }
    //         });
    // } 
    else {
        res
            .status(404)
            .json({
                message: "Request Params HotelId is Not In Url"
            })
    }

}

module.exports.patchUser = (req, res, next) => {
    console.log('patching one user');
    console.log((req.body));
    var collection = model.GET().db(config.DBNAME).collection('users');
    collection.insertOne(req.body,
        function(error, response) {
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
}