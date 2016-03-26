"use strict";
module.exports = function(app) {

    var userModel = require("./models/user.model.js")();
    require("./services/user.service.server.js")(app, userModel);

    var clothingModel = require("./models/clothing.model.js")();
    require("./services/clothing.service.server.js")(app, clothingModel);
};