(function(){
    "use strict";
    angular
        .module("FashionWeatherApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, $scope, UserService) {
        $scope.register = register;

        function register(user) {
            UserService.createUser(user, function(res) {
                $rootScope.currentUser = user;
                $location.url("/closet");
            });
        }
    }
})();