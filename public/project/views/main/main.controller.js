(function(){
    "use strict";
    angular
        .module("FashionWeatherApp")
        .controller("MainController", MainController);

    function MainController($scope, $location){
        $scope.$location = $location;

    }
})();