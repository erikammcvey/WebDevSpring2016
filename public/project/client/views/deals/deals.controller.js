'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("DealsController", DealsController);

    function DealsController($scope,$rootScope, AdvertisementService, $location){
        function init() {
            var userId = $rootScope.currentUser._id;
            getAds();
            function getAds(){
                AdvertisementService.getAds()
                    .then(
                        function(val) {
                            $scope.deals = val;
                        }
                    )
            }
        }
        init();
    }
})();