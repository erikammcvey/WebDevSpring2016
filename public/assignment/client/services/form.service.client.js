(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {
        var services = {
            createFormForUser: createFormForUser,
            findAllForms: findAllForms,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return services;

        function createFormForUser(userId, form) {
            var deferred = $q.defer();
            $http.post('/api/assignment/user/'+ userId + '/form', form)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }

        function findAllForms(userId) {
            var deferred = $q.defer();

            $http.get('api/assigment/user/'+ userId + '/form')
                .then(function(res) {
                    deferred.resolve(res);
                },
                function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        function deleteFormById(formId) {
            var deferred = $q.defer();
            $http.delete('/api/assignment/form/'+formId)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }

        function updateFormById(formId, newForm) {
            var deferred = $q.defer();

            $http.put('/api/assignment/form/'+ formId)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }
    }
})();