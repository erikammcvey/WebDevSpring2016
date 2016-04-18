"use strict";
module.exports = function(app, db, mongoose) {

    var userModel = require("./models/user/user.model.server.js")(db, mongoose);
    var clothingModel = require("./models/clothing/clothing.model.server.js")(db, mongoose);

    require("./services/user.service.server.js")(app, userModel);
    require("./services/clothing.service.server.js")(app, clothingModel);
};