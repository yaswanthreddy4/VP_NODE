const mongoose = require('mongoose');
let roomSchema = mongoose.Schema({
    type: String,
    number: String,
    description: String,
    photos: [String],
    price: Number
});

let locationSchema = mongoose.Schema({
    address: String,
    coordinates: [Number]
});

let reviewSchema = mongoose.Schema({
    name: String,
    id: String,
    review: String,
    rating: Number
});

let hotelSchema = mongoose.Schema({
    name: String,
    stars: Number,
    description: String,
    photos: String,
    currency: String,
    rooms: [roomSchema],
    location: locationSchema,
    reviews: [reviewSchema],
    services: String
});


mongoose.model('Hotel', hotelSchema, 'hotels');