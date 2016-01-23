var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.post('/populatedata', function(req, res) {
    res.send('cats, dogs, animals!');
});
app.listen(port, ipaddress);