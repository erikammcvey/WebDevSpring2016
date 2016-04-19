"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .factory("ClothingService", ClothingService);

    function ClothingService($http, $rootScope, $q){
        var services = {
            getClothingForUser: getClothingForUser
        };
        return services;

        function getClothingForUser(user, clean) {
            var deferred = $q.defer();
            $http.get('/api/project/clothing/user/'+user+'/clean/'+clean)
                .then(
                    function(response) {
                        console.log('clothing service clinet');
                        console.log(response.data);
                        deferred.resolve(response.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    }
                );
            console.log(deferred.promise);
            return deferred.promise;
        }
    }
})();