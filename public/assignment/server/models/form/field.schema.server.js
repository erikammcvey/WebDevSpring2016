module.exports = function () {
    var mongoose = require("mongoose");

    var FieldSchema = mongoose.Schema({
            label: String,
            type: {type: String, enum: [
                    'TEXT', 'TEXTAREA',
                    'EMAIL', 'PASSWORD',
                    'OPTIONS', 'DATE',
                    'RADIOS', 'CHECKBOXES'
                ]
            },
            placeholder: String,
            options: [{label: String, value: String}]
        }, {collection: 'assignment.field'});
    return FieldSchema;
};
