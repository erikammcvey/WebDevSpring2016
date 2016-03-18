"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService(){
        var users = [
            {        "_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]                },
            {        "_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]                },
            {        "_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]                },
            {        "_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {        "_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]                }
        ];
        var services = {
            users: users,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return services;

        function findUserByCredentials(username, password, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var user = services.users[u];
                if (user.username === username &&
                    user.password === password) {

                    callback(user);
                    break;
                }
            }
            callback(null);
        }

        function findAllUsers(callback) {
            callback(services.users);
        }

        function createUser(user, callback) {
            user["_id"] = (new Date()).getTime();
            services.users.push(user);
            callback(user);
        }

        function deleteUserById(userId, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var user = services.users[u];
                if (user._id === userId) {
                    services.users.splice(u, 1);
                }
            }
            callback(services.users)
        }

        function updateUser(userId, user, callback) {
            for (var u = 0; u < services.users.length; u++) {
                var curUser = services.users[u];
                if (curUser._id === userId) {
                    services.users[u] = user;
                    callback(curUser);
                }
            }
        }
    }
})();