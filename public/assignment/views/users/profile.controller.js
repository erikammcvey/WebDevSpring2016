(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($location, $scope, $rootScope, UserService) {
        $scope.update = update;

        function update(user) {
            UserService.updateUser(user._id, user, function(res){
                $rootScope.currentUser = user;
            });
        }
    }
})();