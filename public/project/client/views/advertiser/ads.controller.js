'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("AdsController", AdsController);

    function AdsController($scope,$rootScope, AdvertisementService, $location){
        $scope.adAdded = adAdded;

        function init() {
            var userId = $rootScope.currentUser._id;
            getAllAdsForUser();
            function getAllAdsForUser(){
                AdvertisementService.getAdsForUser(userId)
                    .then(
                        function(val) {
                            $scope.ads = val;
                        }
                    )
            }
        }
        init();

        function adAdded() {
            $location.url('/ads');
        }
    }
})();