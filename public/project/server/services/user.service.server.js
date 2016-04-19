var q = require("q");
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, UserModel, passport) {
    var auth = authorized;

    app.post("/api/project/login", passport.authenticate('project'), login);
    app.post('/api/project/logout', logout);
    app.post('/api/project/register', createUser, passport.authenticate('project'), login);
    app.put("/api/project/user/:id", auth, updateUser);
    app.delete('/api/project/user/:id', deleteUser);
    app.get('/api/project/user', getUser);
    app.get('/api/project/user/:id', getUserById);
    app.get("/api/loggedin", loggedin);


    passport.use('project', new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function localStrategy(username, password, done) {
        UserModel
            .findUserByCredentials(username, password)
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        if (user.followers) {
            return User
                .findById(user._id)
                .then(
                    function(user) {
                        done(null, user);
                    },
                    function(err) {
                        done(err, null);
                    }
                );
        }
        else {
            UserModel
                .findUserById(user._id)
                .then(
                    function(user) {
                        done(null, user);
                    },
                    function(err) {
                        done(err, null);
                    }
                );
        }
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };


    function loggedin(req, res) {
        if(req.isAuthenticated()) {
            res.send(req.user);
        } else {
            res.send(req.isAuthenticated() ? req.user : '0');
        }

    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function login(req, res) {
        var user = req.user;
        delete user.password;
        res.json(user);
    }

    function createUser(req, res) {
        UserModel.createUser(req.body)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.json(err);
                }
            );
    }

    function updateUser(req, res) {
        var id = req.params.id;
        var updates = req.body;
        updates._id = id;

        UserModel.updateUser(updates)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.json(err);
                }
            );
    }

    function deleteUser(req, res) {
        UserModel.deleteUserById(req.params.id)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.json(err);
                }
            );
    }

    function getUser(req, res) {
        // need to switch on context
        if (req.query.username && req.query.password) {
            return login(req, res);
        } else if (req.query.username) {
            return getUserByUsername(req, res);
        } else {
            return getAllUsers(req, res);
        }
    }

    function getUserById(req, res) {
        var uid = req.params.id;
        UserModel.findUserById(uid)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.json(err);
                }
            );

    }

    function getUserByUsername(req, res) {
        UserModel.findUserByUsername(req.query.username)
            .then(
                function(doc) {
                    res.json(doc);
                },
                function(err) {
                    res.json(err);
                }
            );
    }

    function getAllUsers(req, res) {
       UserModel.findAllUsers()
           .then(
               function(doc) {
                   res.json(doc);
               },
               function(err) {
                   res.json(err);
               }
           );
    }
};