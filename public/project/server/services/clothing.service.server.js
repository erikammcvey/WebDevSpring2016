var clothing = require("./../models/user.model.js")();
module.exports = function(app, Model) {

    app.post('/api/project/clothing', addClothing);
    app.put('/api/project/clothing/:id', updateClothing);
    app.delete('/api/project/clothing/:id', deleteClothing);
    app.get('/api/project/clothing/', getClothing);
    app.get('/api/project/clothing/:id', findClothingById);

    function addClothing(req, res) {
        res.json(clothing.addClothing(req.body));
    }

    function updateClothing(req, res) {
        var id = req.params.id;
        var updates = req.body;
        updates._id = id;
        res.json(clothing.updateClothing(updates));
    }

    function deleteUser(req, res) {
        res.json(clothing.deleteUserById(req.params.id));
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
        res.json(clothing.findUserById(uid));

    }

    function login(req, res) {
        res.json(clothing.findUserByCredentials(req.query.username, req.query.password));
    }

    function getUserByUsername(req, res) {
        res.json(clothing.findUserByUsername(req.query.username))
    }

    function getAllUsers(req, res) {
        res.json(clothing.findAllUsers());
    }
};