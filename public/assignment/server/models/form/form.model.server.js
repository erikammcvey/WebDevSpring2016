var uuid = require("node-uuid");
var q = require("q");

module.exports = function(db, $rootScope) {
    var mongoose = require("mongoose");
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model('FormModel', FormSchema);
    var api = {
        createForm: createForm,
        findFormsByUserId: findFormsByUserId,
        findFormById: findFormById,
        updateForm: updateForm,
        deleteFormById: deleteFormById,
        findFormByTitle: findFormByTitle,
        getFieldsByFormId: getFieldsByFormId,
        getField: getField
    };
    return api;

    function createForm(userId, newForm) {
        var deferred = q.defer();
        newForm["userId"] = userId;
        FormModel.create(newForm,
            function(error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(doc);
                }
            }
        );
        return deferred.promise;
    }

    function findFormsByUserId(userId) {
        var deferred = q.defer();
        FormModel.find(
            { "userId" : userId },
            function(error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(doc);
                }
            }
        );
        return deferred.promise;
    }

    function findFormById(formId) {
        var deferred = q.defer();
        FormModel.findById(
            formId,
            function(error, doc) {
                if (error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function updateForm(formId, newForm) {
        var deferred = q.defer();
        FormModel.update(
            {_id: formId},
            {$set: newForm},
            function(error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    FormModel.findById(formId,
                        function(err, doc) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(doc);
                            }
                        });
                }
            });
        return deferred.promise;
    }

    function deleteFormById(formId) {
        var deferred = q.defer();
        FormModel.remove(
            {_id: formId},
            function(error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(findFormsByUserId($rootScope.currentUser._id));
                }
            }
        );
        return deferred.promise;
    }

    function findFormByTitle(title) {
        var deferred = q.defer();
        FormModel.findBy(
            {title: title},
            function(error, doc) {
                if (error) {
                    deferred.reject(error);
                }
                else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function getFieldsByFormId(formId) {
        var deferred = q.defer();
        FormModel.findById(
            formId,
            function(err, form) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    deferred.resolve(form.fields);
                }
            });
        return deferred.promise;
    }

    function getField(formId, fieldId) {
        var form = findFormById(formId);
        for(var i = 0; i < form.fields.length; i++) {
            var field = form.fields[i];
            if (field._id == fieldId) {
                return field;
            }
        }
        // return an empty map for an empty field? or break? or error?
        return {};
    }
};