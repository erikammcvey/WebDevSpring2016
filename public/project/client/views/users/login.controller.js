"use strict";
(function(){
    angular
        .module("FashionWeatherApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService) {
        $scope.login = login;

        function login(user){
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(
                    function(res){
                        var user = res;
                        if(user){
                            UserService.setUser(user);
                            $location.url("/today");
                        }
                    }
                )


        }
    }
})();
