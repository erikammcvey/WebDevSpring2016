var uuid = require("node-uuid");
var q = require("q");

module.exports = function(db, mongoose) {
    var ClothingSchema = require("./clothing.schema.server.js")(mongoose);
    var ClothingModel = mongoose.model('ClothingModel', ClothingSchema);

    var api = {
        addClothing: addClothing,
        allClothingForUser: allClothingForUser,
        findClothingById: findClothingById,
        updateClothing: updateClothing,
        deleteClothingById: deleteClothingById,
        findClothingByName: findClothingByName,
        markClothingClean: markClothingClean,
        markClothingDirty: markClothingDirty
    };
    return api;

    function addClothing(item, user) {
        var deferred = q.defer();
        var id = uuid.v1();
        var clothingnew =  {
                "_id": id,
                "user_id": user._id,
                "name": item.name,
                "color_main": item.color_main,
                "colors_other": item.colors_other,
                "pattern": item.pattern,
                "type": item.type,
                "warmth": item.warmth,
                "water": item.water,
                "settings": item.settings,
                "clean": item.clean,
                "img": item.img
            };
        ClothingModel.create(clothingnew, function (error, doc) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function allClothingForUser(userId) {
        console.log(userId);
        var deferred = q.defer();
        ClothingModel.find( {user_id: userId},
            function(error, doc) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function findClothingById(itemId) {
        var deferred = q.defer();
        ClothingModel.findOne({_id: itemId},
        function(error, doc) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function updateClothing(clothingId, newItem) {
        var deferred = q.defer();
        ClothingModel.update (
            {_id: clothingId},
            {$set: newItem},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    ClothingModel.findById(userId,
                        function (err, user) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(user);
                            }
                        });
                }
            });
        return deferred.promise;
    }

    function deleteClothingById(itemId) {
        var deferred = q.defer();
        ClothingModel.remove(
            {_id: itemId},
            function(error, doc) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function findClothingByName(name) {
        var deferred = q.defer();
        ClothingModel.find({name: name},
        function(error, doc) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function markClothingClean(itemId) {
        var deferred = q.defer();
        var item = findClothingById(itemId);
        item.clean = true;

        ClothingModel.update (
            {_id: itemId},
            {$set: item},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    ClothingModel.findById(userId,
                        function (err, user) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(user);
                            }
                        });
                }
            });
        return deferred.promise;
    }

    function markClothingDirty(itemId) {
        var deferred = q.defer();
        var item = findClothingById(itemId);
        item.clean = false;

        ClothingModel.update (
            {_id: itemId},
            {$set: item},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    ClothingModel.findById(userId,
                        function (err, user) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(user);
                            }
                        });
                }
            });
        return deferred.promise;
    }
};