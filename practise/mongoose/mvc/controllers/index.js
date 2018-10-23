const mongoose = require('mongoose');
const Hotel = mongoose.model('Hotel')
module.exports.getAllHotels = (req, res, next) => {
    var offset = 0;
    var count = 5;
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    Hotel
        .find({})
        .skip(offset).limit(count)
        .exec((error, hotels) => {
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
};

module.exports.getOneHotel = (req, res, next) => {
    var hotelId = req.params.hotelId;
    console.log(req.params.hotelId);
    if (req.params && req.params.hotelId) {
        Hotel
            .findById(hotelId)
            .exec((error, hotel) => {
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

module.exports.addHotel = (req, res, next) => {
    console.log('adding one HOtel');
    console.log((req.body));
    Hotel.insertMany(req.body,
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
};

module.exports.updateOneHotel = (req, res, next) => {
    let hotelId = req.params.hotelId;
    console.log(req.params.hotelId);

    if (req.params && req.params.hotelId) {
        Hotel
            .findByIdAndUpdate(hotelId)
            .exec((error, hotel) => {
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

};

module.exports.deleteOneHotel = (req, res, next) => {
    let hotelId = req.params.hotelId;
    console.log(req.params.hotelId);

    if (req.params && req.params.hotelId) {
        Hotel
            .findByIdAndDelete(hotelId)
            .exec((error, hotel) => {
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

};