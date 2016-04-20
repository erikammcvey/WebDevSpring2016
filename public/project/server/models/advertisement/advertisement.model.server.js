var uuid = require("node-uuid");
var q = require("q");

module.exports = function(db, mongoose) {
    var AdvertisementSchema = require("./advertisement.schema.server.js")(mongoose);
    var AdvertisementModel = mongoose.model('AdvertisementModel', AdvertisementSchema);

    var api = {
        addAd: addAd,
        allAdsForUser: allAdsForUser,
        updateAd: updateAd,
        deleteAdById: deleteAdById,
        getAllAds: getAllAds
    };
    return api;

    function addAd(item, filepath, user) {
        var deferred = q.defer();
        item.img = '/project/images/' + filepath;
        item.user_id = user;
        AdvertisementModel.create(item, function (error, doc) {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function allAdsForUser(params) {
        return AdvertisementModel.find({user_id: params.user_id})
            .then(
                function(ads) {
                    return ads;
                });
    }

    function getAllAds() {
        return AdvertisementModel.find()
            .then(
                function(ads) {
                    return ads;
                });
    }


    function updateAd(adId, newItem) {
        var deferred = q.defer();
        AdvertisementModel.update (
            {_id: adId},
            {$set: newItem},
            function (error, doc) {
                if(error) {
                    deferred.reject(error);
                }
                else {
                    AdvertisementModel.findById(userId,
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

    function deleteAdById(itemId) {
        var deferred = q.defer();
        AdvertisementModel.remove(
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

};