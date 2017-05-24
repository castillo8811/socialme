(function () {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.layouts',
            'app.login',
            'app.forgot',
            'app.reset',
            'app.dashboard',
            'app.error'
        ])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        }]);
})();