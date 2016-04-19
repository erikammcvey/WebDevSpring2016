"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .controller("TodayController", TodayController);

    function TodayController($scope, $rootScope, $location, UserService) {
        $(document).ready(function () {
            $('.bxslider').bxSlider();
        });

        function init() {
            setTemp();

            function setTemp() {
                var resp = UserService.getTemperature();
                resp.then(function(val){
                    $scope.temp = val.temp;
                    $scope.des = val.des;
                });
            }
        }
        init();
    }
})();
