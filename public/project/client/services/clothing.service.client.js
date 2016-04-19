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

        function getClothingForUser(userId) {
            console.log('uid');
            console.log(userId);
            var deferred = $q.defer();
            $http.get('/api/project/clothing/user/' +userId)
                .success(
                    function(response) {
                        console.log('clothing service clinet');
                        console.log(response.data);
                        deferred.resolve(response.data);
                    }
                );
            return deferred.promise;
        }

        //function findUserByCredentials(username, password) {
        //    var deferred = $q.defer();
        //    $http.get("/api/project/user?username="+username+"&password="+password)
        //        .then(
        //            function(response) {
        //                deferred.resolve(response.data);
        //            },
        //            function(error) {
        //                deferred.reject(error);
        //            }
        //        );
        //    return deferred.promise;
        //}
        //
        //function findUserByUsername(username) {
        //    var deferred = $q.defer();
        //
        //    $http.get("/api/project/user?username="+username)
        //        .then(function(res) {
        //                deferred.resolve(res.data);
        //            },
        //            function(err) {
        //                deferred.reject(err);
        //            });
        //    return deferred.promise;
        //}
        //
        //function findAllUsers() {
        //    var deferred = $q.defer();
        //
        //    $http.get('/api/project/user')
        //        .then(function(res) {
        //                deferred.resolve(res.data);
        //            },
        //            function(err) {
        //                deferred.reject(err);
        //            });
        //    return deferred.promise;
        //}
        //
        //function createUser(user) {
        //    var deferred = $q.defer();
        //
        //    $http.post('/api/project/user', user)
        //        .success(function(res) {
        //            deferred.resolve(res);
        //        });
        //    return deferred.promise;
        //}
        //
        //function deleteUserById(userId) {
        //    var deferred = $q.defer();
        //
        //    $http.delete('/api/project/user/'+userId)
        //        .success(function(res) {
        //            deferred.resolve(res);
        //        });
        //    return deferred.promise;
        //}
        //
        //function updateUser(userId, user) {
        //    var deferred = $q.defer();
        //
        //    $http.put('/api/project/user/'+userId, user)
        //        .success(function(res) {
        //            deferred.resolve(res);
        //        });
        //    return deferred.promise;
        //}
    }
})();