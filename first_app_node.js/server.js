const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send('hello i`m up dude, enjoy unlimited browsing')
})
app.get('/home', function(req, res) {
    res.send('this is home page')
})
app.get('/about', function(req, res) {
    res.send('this is about page')
})
app.listen(3030);
console.log("server is up dude!!");