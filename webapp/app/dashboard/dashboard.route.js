(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(['$routeProvider', setRoute])
        .run(appRun);


    function appRun($rootScope, $location) {
        $rootScope.location = $location;
    }

    function setRoute($routeProvider) {
        let route = {
            url: '/dashboard',
            config: {
                templateUrl: 'app/dashboard/dashboard.html',
                controller: 'Dashboard',
                controllerAs: 'vm',
                title: 'Dashboard',
                requireLogin: true
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