var express = require('express');
var AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.region = 'eu-west-3';

var app = express();
var port = process.env.PORT || 3000;

var lambda = new AWS.Lambda();

app.get('/', function (req, res) {
    res.send('Sample Node.js App');
});

app.get('/test-lambda', function (req, res) {
    var params = {
        FunctionName: process.env.AWS_HELLO_WORLD_LAMBDA,
        InvocationType: 'RequestResponse',
    };

    lambda.invoke(params, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data.Payload);
        }
    })
});

app.listen(port, function () {
    console.log('Sample Application Listening on Port ' + port);
});