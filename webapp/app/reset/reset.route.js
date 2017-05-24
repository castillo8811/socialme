(function () {
    'use strict';

    angular
        .module('app.reset')
        .config(['$routeProvider', setRoute])
        .run(appRun);


    function appRun($rootScope, $location) {
        $rootScope.location = $location;
    }

    function setRoute($routeProvider) {
        let route = {
            url: '/reset-password/:token',
            config: {
                templateUrl: 'app/reset/reset.html',
                controller: 'Reset',
                controllerAs: 'vm',
                title: 'Reset',
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