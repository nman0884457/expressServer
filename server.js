var express = require('express');
var app = express();
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
    });

app.get('/about.html', function (req, res) {
    res.sendFile(path.join(__dirname + "/about.html"));
    });

app.listen(3000);