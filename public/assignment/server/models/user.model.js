var mock = require("./user.mock.json");
var uuid = require("node-uuid");

module.exports = function(app) {
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUserById: deleteUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;

    var users = findAllUsers();

    function createUser(user) {
        user._id = (new Date()).getTime();
        users.push(user);
    }

    function findAllUsers() {
        return mock;
    }

    function findUserById(userId) {
        for (var i = 0; i < users.length; i++) {
            if (users[i] === userId) {
                return users[i];
            }
        }
    }

    function updateUser(userId, newUser) {
        for (var i = 0; i < users.length(); i++) {
            var user = users[i];
            if (user._id === userId) {
                users[i] = newUser;
            }
        }
    }

    function deleteUserById(userId) {
        var user = findUserById(userId);
        if (user) {
            var index = users.indexOf(user);
            users.splice(index, 1);
        }
    }

    function findUserByUsername(username) {
        for (var i = 0; i < users.length; i++) {
            if (users[i] === username) {
                return users[i];
            }
        }
    }

    function findUserByCredentials(username, password) {
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username === username &&
                user.password === password) {
                return user;
            }
        }
    }
};