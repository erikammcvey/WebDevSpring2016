'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("ClosetController",ClosetController);

    function ClosetController($scope,$rootScope,ClothingService){

        var vm = this;

        function init() {
            getFormsForUser($rootScope.currentUser._id);
        }
        init();

        function getFormsForUser(userId){
            ClothingService.getClothingForUser(userId)
                .then(
                    function (doc) {
                        vm.clothing = doc;
                        $scope.clothing = vm.clothing;
                    }
                )
        };
    }
})();