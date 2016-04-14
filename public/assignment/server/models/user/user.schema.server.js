module.exports = function() {

    var mongoose = require("mongoose");

    var UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        roles: [String]
    }, {collection: 'assignment.user'});
    return UserSchema;
};