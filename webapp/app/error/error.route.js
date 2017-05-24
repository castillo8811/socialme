(function () {
    'use strict';

    angular
        .module('app.error')
        .config(['$routeProvider', setRoute])
        .run(appRun);


    function appRun($rootScope, $location) {
        $rootScope.location = $location;
    }

    function setRoute($routeProvider) {
        let route = {
            url: '/404',
            config: {
                templateUrl: 'app/error/404.html',
                controller: 'Error',
                controllerAs: 'vm',
                title: 'Error',
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