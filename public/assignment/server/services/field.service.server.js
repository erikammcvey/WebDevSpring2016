module.exports = function(app, fieldModel) {
    app.get('/api/assignment/form/:formId/field', getFieldsByFormId);
    app.get('/api/assignment/form/:formId/field/:fieldId', getField);
    app.delete('/api/assignment/form/:formId/field/:fieldId', deleteField);
    app.post('/api/assignment/form/:formId/field', createField);
    app.put('/api/assignment/form/:formId/field/:fieldId', updateField);

    function createField(req, res) {
        res.json(fieldModel.createField(req.params.formId, req.body))
    }

    function updateField(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var newField = req.body;

        res.json(fieldModel.updateField(formId, fieldId, newField));
    }

    function deleteField(req, res) {
        res.json(fieldModel.deleteField(req.params.formId, req.params.fieldId));
    }

    function getFieldsByFormId(req, res) {
        res.json(fieldModel.getFieldsByFormId(req.params.formId));
    }

    function getField(req, res) {
        res.json(fieldModel.getField(req.params.formId, req.params.fieldId));
    }
};