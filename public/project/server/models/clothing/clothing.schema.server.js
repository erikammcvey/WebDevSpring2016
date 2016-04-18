module.exports = function () {
    var mongoose = require("mongoose");

    var ClothingSchema = mongoose.Schema({
        user_id: String,
        name: String,
        color_main: String,
        colors_other: [String],
        pattern: String,
        type: String,
        warmth: Number,
        water: Boolean,
        settings: [String],
        clean: Boolean,
        img: String
    }, {collection: 'project.clothing'});

    return ClothingSchema;
};
