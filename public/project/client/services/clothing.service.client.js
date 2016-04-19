"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .factory("ClothingService", ClothingService);

    function ClothingService($http, $rootScope, $q) {
        var services = {
            getClothingForUser: getClothingForUser
        };
        return services;

        function getClothingForUser(user, clean) {
            var deferred = $q.defer();
            $http.get('/api/project/clothing/user/' + user + '/clean/' + clean)
                .then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (err) {
                        deferred.reject(err);
                    }
                );
            return deferred.promise;
        }
    }
})();