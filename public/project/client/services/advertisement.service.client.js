"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .factory("AdvertisementService", AdvertisementService);

    function AdvertisementService($http, $rootScope, $q) {
        var services = {
            getAdsForUser: getAdsForUser,
            getAds: getAds
        };
        return services;

        function getAds() {
            var deferred = $q.defer();
            $http.get('/api/project/all/advertisement/')
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