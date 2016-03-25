"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .controller("TodayController", TodayController);

    function TodayController($scope, $rootScope, $location, UserService) {
        $(document).ready(function () {
            $('.bxslider').bxSlider();
        });
    }
})();
