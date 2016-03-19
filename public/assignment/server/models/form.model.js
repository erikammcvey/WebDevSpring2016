var mock = require("./form.mock.json");
var uuid = require("node-uuid");

module.exports = function(app) {
    var api = {
        createForm: createForm,
        findAllForms: findAllForms,
        findFormById: findFormById,
        updateForm: updateForm,
        deleteFormById: deleteFormById,
        findFormByTitle: findFormByTitle
    };
    return api;

    var forms = findAllForms();

    function createForm(form) {
        form._id = (new Date()).getTime();
        forms.push(form);
    }

    function findAllForms() {
        return mock;
    }

    function findFormById(formId) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i] === formId) {
                return forms[i];
            }
        }
    }

    function updateForm(formId, newForm) {
        for (var i = 0; i < forms.length(); i++) {
            var form = forms[i];
            if (form._id === formId) {
                forms[i] = newForm;
            }
        }
    }

    function deleteFormById(formId) {
        var form = findFormById(formId);
        if (form) {
            var index = forms.indexOf(form);
            forms.splice(index, 1);
        }
    }

    function findFormByTitle(title) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i] === title) {
                return forms[i];
            }
        }
    }
};