"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope){
        var services = {
            findUserByCredentials: findUserByCredentials,
            findUserByUsername: findUserByUsername,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setUser: setUser
        };
        return services;

        function findUserByCredentials(username, password) {
            return $http({
                method: 'GET',
                url: 'api/assignment/user',
                params: {
                    username: username,
                    password: password
                }
            });
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();
            return $http({
                method: 'GET',
                url: 'api/assignment/user',
                params: {username: username}
            });
        }

        function findAllUsers() {
            return $http({
                method: 'GET',
                url: 'api/assignment/user'
            });
        }

        function createUser(user) {
            return $http({
                method: 'POST',
                url: 'api/assignment/user',
                data: user
            });
        }

        function deleteUserById(userId) {
            return $http({
                method: 'DELETE',
                url: 'api/assignment/user',
                params: {userId: userId}
            });
        }

        function updateUser(userId, user, callback) {
            return $http({
                method: 'PUT',
                url: 'api/assignment/user',
                data: user
            });
        }

        function setUser(newUser) {
            $rootScope.user = newUser;
        }
    }
})();