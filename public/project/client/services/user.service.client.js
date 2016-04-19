"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope, $q){
        var services = {
            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserByUsername,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setUser: setUser,
            logoutUser: logoutUser,
            getTemperature: getTemp
        };
        return services;

        function findUserByCredentials(username, password) {
            return $http({
                method: 'POST',
                url: '/api/project/login',
                data: {username: username, password: password}
            });
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();

            $http.get("/api/project/user?username="+username)
                .then(function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    });
            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();

            $http.get('/api/project/user')
                .then(function(res) {
                        deferred.resolve(res.data);
                    },
                    function(err) {
                        deferred.reject(err);
                    });
            return deferred.promise;
        }

        function createUser(user) {
            var deferred = $q.defer();

            $http.post('/api/project/register', user)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();

            $http.delete('/api/project/user/'+userId)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }

        function updateUser(userId, user) {
            var deferred = $q.defer();

            $http.put('/api/project/user/'+userId, user)
                .success(function(res) {
                    deferred.resolve(res);
                });
            return deferred.promise;
        }

        function setUser(newUser) {
            $rootScope.currentUser = newUser;
        }

        function logoutUser() {
            return $http.post("/api/project/logout");
        }

        function getTemp() {
            var deferred = $q.defer();
            var key = "90b008e1dc8c7954081ed1d77c3bcc2f";
            var zip = $rootScope.currentUser.zip;
            $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&units=imperial&APPID="+key)
                .then(function(res) {
                    var weather = {temp: res.data.main.temp, des: res.data.weather[0].description};
                        deferred.resolve(weather);
                    },
                    function(err) {
                        deferred.reject(err);
                    });
            return deferred.promise;
        }
    }
})();