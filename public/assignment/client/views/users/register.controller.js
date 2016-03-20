(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, $scope, UserService) {
        $scope.register = register;
        var x = this;

        function register(user) {
            UserService.createUser(user)
                .then(function(doc) {
                    console.log(x);
                    x.user = doc;
                    console.log(doc);
                    if (doc) {
                        UserService.setUser(x.user);
                        $location.url("/profile");
                    }
                })

        }
    }
})();