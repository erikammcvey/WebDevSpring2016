module.exports = function () {
    var mongoose = require("mongoose");
    var AdvertisementSchema = mongoose.Schema({
        user_id: String,
        name: String,
        type: String,
        warmth: String,
        water: Boolean,
        img: String
    }, {collection: 'project.advertisement'});

    return AdvertisementSchema;
};
