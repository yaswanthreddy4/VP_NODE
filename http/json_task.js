const express = require('express');
// const fs = require('fs');
// const path = require('path');

const app = express();
app.set('port', 3050);
app.set('host', '127.0.0.1');

//data sending to client
// if (app.get == '/') {
//     (req, res) => {
//         res.send('default')
//     }
// };

const options = new URL('http://localhost:3050');

const req = http.request(/, (res) => {
res.send("hi")
});

app.get('/jsonfile1', function(req, res) {
    res.send('JSONfile1')
});
app.get('/jsonfile2', function(req, res) {
    res.send('JSONfile2')
});
app.get('/jsonfile3', function(req, res) {
    res.send('JSONfile3')
});
app.get('/jsonfile4', function(req, res) {
    res.send('JSONfile4')
});
app.get('/jsonfile5', function(req, res) {
    res.send('JSONfile5')
});

//Creating SERVER
app.listen(app.get('port'), app.get('host'), function() {});
console.log("Server is Created");