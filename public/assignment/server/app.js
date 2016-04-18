"use strict";
module.exports = function(app, db, mongoose) {

    var userModel = require("./models/user/user.model.server.js")(db, mongoose);
    var formModel = require("./models/form/form.model.server.js")(db, mongoose);
    var fieldModel = require("./models/form/field.model.server.js")(db, mongoose);

    require("./services/user.service.server.js")(app, userModel);
    require("./services/form.service.server.js")(app, formModel);
    require("./services/field.service.server.js")(app, fieldModel);
};