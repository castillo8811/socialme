(function () {
    'use strict';

    angular
        .module('app.login')
        .config(['$routeProvider', setRoute])
        .run(appRun);


    function appRun($rootScope, $location) {
        $rootScope.location = $location;
    }

    function setRoute($routeProvider) {
        let route = {
            url: '/',
            config: {
                templateUrl: 'app/login/login.html',
                controller: 'Login',
                controllerAs: 'vm',
                title: 'Login',
                requireLogin: false
            }
        };

        $routeProvider
            .when(route.url, route.config)
            .otherwise(
                {
                    redirectTo: "/404",
                    requireLogin: false
                }
            )
    }
})();