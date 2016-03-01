(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/home", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/admin", {
                templateUrl: "views/admin/admin.view.html"
            })
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html",
                controller: FormsController
            })
            .when("/fields", {
                templateUrl: "views/forms/fields.view.html"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: LoginController
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: ProfileController
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: RegisterController
            });
    }
});