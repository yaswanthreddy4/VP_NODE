module.exports.getAllHotels = (req, res) => {
    console.log(req.url);
    console.log(req.method);
    res
        .status(200)
        .json([
            { name: 'Hotel Grand' },
            { name: 'Hotel Devi' },
            { name: 'Devi Pata' }
        ]);
};