"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService) {
        $scope.login = login;

        //function login(user) {
        //    UserService.findUserByCredentials(user.username, user.password, function(res){
        //        if(res) {
        //            $rootScope.currentUser = res;
        //            $location.url("/profile");
        //        }
        //    });
        //}

        function login(user){
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(
                    function(res){
                        var user = res;
                        if(user){
                            UserService.setUser(user);
                            $location.url("/profile");
                        }
                    }
                )
        }
    }
})();
