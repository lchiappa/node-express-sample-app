var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Sample Node.js App');
});

app.listen(port, function () {
    console.log('Sample Application Listening on Port ' + port);
});