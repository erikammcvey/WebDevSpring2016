'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("ClosetController",ClosetController);

    function ClosetController($scope,$rootScope, ClothingService, $location){
        $scope.itemAdded = itemAdded;

        function init() {
            var userId = $rootScope.currentUser._id;
            getAllCothesForUser();
            getCleanClothes();
            getDirtyClothes();

            function getAllCothesForUser(){
                ClothingService.getAllClothingForUser(userId)
                    .then(
                        function(val) {
                            $scope.clothing = val;
                        }
                    )
            };
            function getCleanClothes(){
                ClothingService.getClothingForUser(userId, true)
                    .then(
                        function(val) {
                            $scope.clean = val;
                        }
                    )
            };
            function getDirtyClothes(){
                ClothingService.getClothingForUser(userId, false)
                    .then(
                        function(val) {
                            $scope.dirty = val;
                        }
                    )
            };
        }
        init();

        function itemAdded() {
            $location.url('/closet');
        }
    }
})();