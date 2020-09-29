var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.username;
    
    res.send(name + ' Logged in Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
