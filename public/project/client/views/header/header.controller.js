'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope, $rootScope, UserService) {
        $scope.logout = logout;

        function logout() {
            UserService.logoutUser();
        }
    }

})();