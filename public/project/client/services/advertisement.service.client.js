"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .factory("AdvertisementService", AdvertisementService);

    function AdvertisementService($http, $rootScope, $q) {
        var services = {
            getAdsForUser: getAdsForUser
        };
        return services;

        function getAdsForUser(user) {
            var deferred = $q.defer();
            $http.get('/api/project/advertisement/' + user)
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