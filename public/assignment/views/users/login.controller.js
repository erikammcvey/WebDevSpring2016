(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserServices) {
        $scope.login = login;

        function login(user) {
            UserServices.findUserByCredentials(user.username, user.password, function(res){
                if(res) {
                    $rootScope.currentUser = res;
                    $location.url("/profile");
                }
            });
        }
    }
})();
