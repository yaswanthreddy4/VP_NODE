var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var fs = require('fs')
var app = express();

//Note that in version 4 of express, express.bodyParser() was
//deprecated in favor of a separate 'body-parser' module.
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(bodyParser.json());

//app.use(express.bodyParser());

//middle function for hosting static data

app.use(express.static(path.join(__dirname, 'bootstrap')));


app.post('/myaction', function(req, res) {
    // res.send('You sent the name "' + req.body.email + '".')
    fs.appendFile('./data_from_frontend.txt', "\n" + req.body.email, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('file saved sucessfully');
        res.send('You sent the name "' + req.body.email + '".')

    })
});
// app.get('/myaction', function(req, res) {
//     res.send('You sent the name "' + req.query.email + '".');
// })

app.listen(8000, function() {
    console.log('Server running at http://127.0.0.1:8000/');
});