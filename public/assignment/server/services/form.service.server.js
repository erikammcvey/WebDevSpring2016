var model = require("./../models/form/form.model.server.js")();

module.exports = function(app) {
    app.get('/api/assignment/user/:userId/form', getFormsForUser);
    app.get('/api/assignment/form/:formId', getFormById);
    app.delete('/api/assignment/form/:formId', deleteForm);
    app.post('/api/assignment/user/:userId/form', createForm);
    app.put('/api/assignment/form/:formId', updateForm);

    function createForm(req, res) {
        res.json(model.createForm(req.body));
    }

    function updateForm(req, res) {
        var id = req.params.formId;
        var updates = req.body;
        updates._id = id;
        res.json(model.updateForm(updates));
    }

    function deleteForm(req, res) {
        res.json(model.deleteFormById(req.params.formId));
    }

    function getFormsForUser(req, res) {
        res.json(model.findFormsByUserId(req.params.userId));
    }

    function getFormById(req, res) {
        res.json(model.findFormById(req.params.formId));
    }
};