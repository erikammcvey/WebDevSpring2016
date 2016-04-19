(function(){
    "use strict";
    angular
        .module("FashionWeatherApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, $scope, UserService) {
        $scope.register = register;
        var x = this;

        function register(user) {
            UserService.createUser(user)
                .then(function(doc) {
                    x.user = doc;
                    if (doc) {
                        UserService.setUser(x.user);
                        $location.url("/closet");
                    }
                })

        }
    }
})();