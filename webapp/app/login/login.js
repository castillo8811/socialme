(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    Login.$inject = ['$location', 'AuthService'];

    function Login($location, AuthService) {
        let vm = this;

        init();

        vm.login = function () {
            let data = {
                username: vm.userData.username,
                password: vm.userData.password
            };

            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            AuthService.login(data, config)
                .success(function (response) {
                    $location.path('/dashboard');
                })
                .error(function (error) {
                    console.log(error);
                });
        };

        vm.goToForgot = function () {
            $location.path('/forgot-password');
        };

        function init() {
            vm.userData = {
                username: '',
                password: ''
            }
        }
    }
})();