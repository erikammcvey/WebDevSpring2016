var clothes = require("./clothing.mock.json");
var uuid = require("node-uuid");

module.exports = function(app) {
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
        var id = (new Date()).getTime();
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
        clothes.push(clothingnew);
        return clothingnew;
    }

    function allClothingForUser(userId) {
        var user_clothes = [];
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item.user_id == userId) {
                user_clothes.push(item);
            }
        }
        return user_clothes;
    }

    function findClothingById(itemId) {
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item._id === itemId) {
                return item;
            }
        }
    }

    function updateClothing(clothingId, newItem) {
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item._id == clothingId) {
                clothes[i] = newItem;
            }
        }
    }

    function deleteClothingById(itemId) {
        var item = findClothingById(itemId);
        if (item) {
            var index = clothes.indexOf(item);
            clothes.splice(index, 1);
        }
    }

    function findClothingByName(name) {
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item.name == name) {
                return item;
            }
        }
    }

    function markClothingClean(itemId) {
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item._id == itemId) {
                item.clean = true;
            }
        }
    }

    function markClothingDirty(itemId) {
        for (var i = 0; i < clothes.length; i++) {
            var item = clothes[i];
            if (item._id == itemId) {
                item.clean = false;
            }
        }
    }
};