'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("ClosetController",ClosetController);

    function ClosetController($scope,$rootScope,ClothingService){

        function init() {
            getAllCothesForUser($rootScope.currentUser._id);
            $scope.erg = "bleh";

            function getAllCothesForUser(userId){
                ClothingService.getClothingForUser(userId)
                    .then(
                        function(val) {
                            console.log('closet controller');
                            console.log(val);
                            $scope.clothing = val;
                        }
                    )
            };
        }
        init();
    }
})();