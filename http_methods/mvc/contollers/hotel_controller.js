const hotelData = require('../models/data/hotel-data.json');

module.exports.getAllHotels = (req, res, next) => {
    console.log(req.query);
    let offset = 0;
    let count = 5;
    if (req.query && req.query.offset && req.query.count) {
        offset = parseInt(req.query.offset, 10);
        count = parseInt(req.query.count, 10);
    }
    let hotels = hotelData.slice(offset, offset + count);
    res
        .status(200)
        .json(hotels);
}

module.exports.getOneHotel = (req, res, next) => {
    console.log(req.url);
    console.log(req.params.hotelId);
    if (req.params && req.params.hotelId) {
        let hotel = hotelData[req.params.hotelId];
        res
            .status(200)
            .json(hotel);
    } else {
        res.status(404)
            .json({ message: "request params is not present " })
    }
};