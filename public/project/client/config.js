(function(){
    "use strict";
    angular
        .module("FashionWeatherApp")
        .config(Configuration);

    function Configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/welcome/welcome.view.html",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/welcome", {
                templateUrl: "views/welcome/welcome.view.html",
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller: "LoginController"
            })
            .when("/closet", {
                templateUrl: "views/closet/closet.view.html",
                controller: "ClosetController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/clean", {
                templateUrl: "views/closet/clean.view.html",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/dirty", {
                templateUrl: "views/closet/dirty.view.html",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/add", {
                templateUrl: "views/closet/add.view.html",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller: "RegisterController"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/today", {
                templateUrl: "views/today/today.view.html",
                controller: "TodayController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/ads", {
                templateUrl: "views/advertiser/ads.view.html",
                controller: "AdsController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/addAd", {
                templateUrl: "views/advertiser/addad.view.html",
                controller: "AdsController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/deals", {
                templateUrl: "views/deals/deals.view.html",
                controller: "DealsController",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .when("/results", {
                templateUrl: "views/closet/results.view.html",
                resolve: {
                    loggedin: checkLoggedIn
                }
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
    var checkCurrentUser = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user) {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0') {
                $rootScope.currentUser = user;
            }
            deferred.resolve();
        });

        return deferred.promise;
    };

    var checkLoggedIn = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();

        $http.get('/api/loggedin').success(function(user) {

            $rootScope.errorMessage = null;

            if (user !== '0') {
                $rootScope.currentUser = user;
                deferred.resolve();
            }

            else {
                deferred.reject();
                $rootScope.errorMessage = "You need to login, ya muggle!!";
                $location.url('/login');
            }
        });

        return deferred.promise;
    };
})();