var uuid = require("node-uuid");
var q = require("q");

module.exports = function(db, mongoose) {
    var FieldSchema = require("./field.schema.server.js")(mongoose);
    //var FieldModel = mongoose.model('FieldModel', FieldSchema);

    var api = {
        getFieldById: getFieldById,
        createField: createField,
        updateField: updateField,
        deleteField: deleteField
    };
    return api;

    function getFieldById(fieldId) {
        var deferred = q.defer();
        FieldModel.findById(
            fieldId,
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(doc);
                }
            }
        );
    }

    function createField(field) {
        var deferred = q.defer();
        FieldModel.create(
            field,
            function(error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function deleteField(fieldId) {
        var deferred = q.defer();

        FieldModel.remove(
            {_id:fieldId},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(doc);
                }
            }
        );
        return deferred.promise;
    }

    function updateField(fieldId, newField) {
        var deferred = q.defer();
        FieldModel.update(
            {_id: fieldId},
            {$set: newField},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                } else {
                    FieldModel.findById(fieldId,
                        function(error, doc) {
                            if(error) {
                                deferred.reject(error);
                            }
                            else {
                                deferred.resolve(doc);
                            }
                        });
                }
            });
        return deferred.promise;
    }
};