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
    }
})();