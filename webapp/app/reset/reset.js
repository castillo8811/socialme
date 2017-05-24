(function () {
    'use strict';

    angular
        .module('app.reset')
        .controller('Reset', Reset);

    Reset.$inject = ['$location', '$routeParams', 'AuthService'];

    function Reset($location, $routeParams, AuthService) {
        let vm = this;

        init();

        vm.resetPassword = function () {
            let data = {
                token: $routeParams.token,
                password: vm.password
            };

            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            AuthService.reset(data, config)
                .success(function (response) {
                    vm.passwordChanged = true;
                })
                .error(function (error, status) {
                    if (status === 400) {
                        vm.passwordChanged = true;
                    }
                });
        };

        vm.goToLogin = function () {
            $location.path('/');
        };

        function init() {
            vm.passwordChanged = false;
            vm.password = '';

            vm.messages = {
                error: {
                    title: '',
                    content: ''
                }
            }
        }
    }
})();