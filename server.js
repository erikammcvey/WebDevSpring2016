var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/webdevelopment';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(__dirname + '/public'));

require("./public/assignment/server/app.js")(app, db, mongoose);
//require("./public/assignment/server/services/user.service.server.js")(app);
//require("./public/assignment/server/services/form.service.server.js")(app);
//require("./public/assignment/server/services/field.service.server.js")(app);

//require("./public/project/server/app.js")(app);
//require("./public/project/server/services/user.service.server.js")(app);

app.listen(port, ipaddress);
