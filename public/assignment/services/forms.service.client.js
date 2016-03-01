(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var forms = [];
        var services = {
            forms: forms,
            createFormForUser: createFormForUser,
            findAllForms: findAllForms,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234},
        ];
        return services;

        function createFormForUser(userId, form, callback) {
            form["_id"] = (new Date()).getTime();
            form["userId"] = userId;
            services.forms.push(form);
            callback(form);
        }

        function findAllForms(userId, callback) {
            var usersForms = [];
            for (var f = 0; f < services.forms.length; f++) {
                var form = services.forms[f];
                if (form.userId === userId) {
                    usersForms.push(form);
                }
            }
            callback(usersForms);
        }

        function deleteFormById(formId, callback) {
            for (var f = 0; f < services.forms.length; f++) {
                var form = services.forms[f];
                if (form._id === formId) {
                    services.forms.splice(f, 1);
                }
            }
            callback(services.forms);
        }

        function updateFormById(formId, newForm, callback) {
            for (var f = 0; f < services.forms.length; f++) {
                var form = services.forms[f];
                if (form._id === formId) {
                    services.forms[f] = newForm;
                }
            }
            callback(newForm);
        }
    }
});