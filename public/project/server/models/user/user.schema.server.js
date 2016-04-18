module.exports = function () {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        password: String,
        role: String,
        zip: Number
    }, {collection: 'project.user'});

    return UserSchema;
};
