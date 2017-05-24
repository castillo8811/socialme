(function () {
    'use strict';

    angular
        .module('app.forgot')
        .config(['$routeProvider', setRoute])
        .run(appRun);


    function appRun($rootScope, $location) {
        $rootScope.location = $location;
    }

    function setRoute($routeProvider) {
        let route = {
            url: '/forgot-password',
            config: {
                templateUrl: 'app/forgot/forgot.html',
                controller: 'Forgot',
                controllerAs: 'vm',
                title: 'Forgot',
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