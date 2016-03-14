(function(){
    "use strict";
    angular
        .module("FashionWeatherApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/home", {
                templateUrl: "views/home/home.view.html"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/closet", {
                templateUrl: "views/closet/closet.view.html"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/settings", {
                templateUrl: "views/users/settings.view.html",
                controller: "SettingsController"
            })
            .when("/today", {
                templateUrl: "views/today/today.view.html",
                controller: "TodayController"
            })
    }
})();