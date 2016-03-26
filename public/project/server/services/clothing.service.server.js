var clothing = require("./../models/clothing.model.js")();
module.exports = function(app, Model) {

    app.post('/api/project/clothing', addClothing);
    app.put('/api/project/clothing/:id', updateClothing);
    app.delete('/api/project/clothing/:id', deleteClothing);
    app.get('/api/project/clothing/user/:id', getClothing);
    app.get('/api/project/clothing/:id', getClothingById);

    function addClothing(req, res) {
        res.json(clothing.addClothing(req.body));
    }

    function updateClothing(req, res) {
        var id = req.params.id;
        var updates = req.body;
        updates._id = id;
        res.json(clothing.updateClothing(updates));
    }

    function deleteClothing(req, res) {
        res.json(clothing.deleteClothingById(req.params.id));
    }

    function getClothing(req, res) {
        var uid = req.params.id;
        res.json(clothing.allClothingForUser(uid));
    }

    function getClothingById(req, res) {
        var id = req.params.id;
        res.json(clothing.findClothingById(id));

    }
};