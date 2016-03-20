(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http) {
        var services = {
            createFormForUser: createFormForUser,
            findAllForms: findAllForms,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return services;

        function createFormForUser(userId, form) {
            return $http({
                method: 'POST',
                url: '/api/assignment/user/' + userId + '/form',
                data: form
            });
        }

        function findAllForms(userId) {
            return $http({
                method: 'GET',
                url: '/api/assignment/user/' + userId + '/form'
            });
        }

        function deleteFormById(formId) {
            return $http({
                method: 'DELETE',
                url: '/api/assignment/form/',
                params: {formId: formId}
            });
        }

        function updateFormById(formId, newForm) {
            return $http({
                method: 'PUT',
                url: 'api/assignment/form',
                params: {formId: formId},
                data: newForm
            })
        }
    }
})();