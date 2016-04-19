'use strict';
(function (){
    angular
        .module("FashionWeatherApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope, $rootScope, $location, UserService) {
        $scope.logout = logout;

        function logout() {
            UserService
                .logoutUser()
                .then(
                    function(response){
                        $rootScope.currentUser = null;
                        $location.url("/welcome");
                    },
                    function(err) {
                    }
                );
        }
    }
})();