const express = require('express');
const fs = require('fs');
const path = require('path')

const server = express();
server.set('port', 3050);
server.set('host', '127.0.0.1');

//console.log SERVER
server.get('/', function(req, res) {
    console.log(req.url);
    console.log(req.method);
    console.log(`Got Get Req ON :`, req.url);
    res.send('/ page')
});
server.get('/home', function(req, res) {
    console.log(req.query);
    const user = {
        name: "yaswanth",
        email: "yas@gmail.com"
    }
    if (!req.query || !req.query.name || !req.query.email) {
        res.send(`the default user is: ${user.name} and email is ${user.email}`)
    } else {
        res.send(`the given user is: ${req.query.name} & email is ${req.query.email}`)
    }
});
server.get('/json', function(req, res) {
    const jhonson = {
        name: "johonson",
        type: "powder",
        seller: "xx-yyy-zzzz"
    }
    res
        .status(200)
        .json(jhonson)
});
server.get('/file', function(req, res) {
        filepath = path.join(__dirname, 'package.json')
        if (fs.existsSync(filepath)) {
            res.status(200)
                .sendFile(filepath);
        } else {
            res.status(404)
                .sendFile(filepath)
        }
        // res.send(path.join(__filename, 'package.json'))
        // res.sendfile("./package.json")
    })
    //Server Creation
server.listen(server.get('port'), server.get('host'), function() {
    console.log("server is setup");
});
console.log("last line fasak dude");