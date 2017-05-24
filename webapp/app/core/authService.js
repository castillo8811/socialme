(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('AuthService', AuthService);

    function AuthService($http, BASE_URL, jwtHelper, PersistenceService) {
        let service = {
            login: login,
            forgot: forgot,
            reset: reset
        };

        return service;

        function login(data, config) {
            return $http.post(BASE_URL + 'login-check', data, config)
                .success(function (response) {
                    let user = {
                        token: response.token,
                        data: jwtHelper.decodeToken(response.token)
                    };

                    PersistenceService.setCookieData(user);
                })
                .error(function (error, status) {
                    return error;
                });
        }

        function logout(data, config) {

        }

        function forgot(data, config) {
            return $http.post(BASE_URL + 'forgot-password', data, config)
                .success(function (response) {
                    return response;
                })
                .error(function (error, status) {
                    return error;
                });
        }

        function reset(data, config) {
            return $http.post(BASE_URL + 'reset-password/' + data.token, data, config)
                .success(function (response) {
                    return response;
                })
                .error(function (error, status) {
                    return error;
                });
        }

        function isAuthenticated() {

        }

        function isAuthorized() {

        }
    }
})();