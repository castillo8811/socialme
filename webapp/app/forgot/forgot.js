(function () {
    'use strict';

    angular
        .module('app.forgot')
        .controller('Forgot', Forgot);

    Forgot.$inject = ['$location', 'AuthService'];

    function Forgot($location, AuthService) {
        let vm = this;

        init();

        vm.requestPasswordChange = function () {
            let data = {
                email: vm.email
            };

            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            AuthService.forgot(data, config)
                .success(function (response) {
                    vm.emailSent = true;
                })
                .error(function (error, status) {
                    if (status === 400) {
                        vm.message.title = 'Email Sent';
                        vm.message.content = 'Already sent an email previously, please check your email.';

                        vm.emailSent = true;
                    }
                });
        };

        vm.goToLogin = function () {
            $location.path('/');
        };

        function init() {
            vm.emailSent = false;
            vm.email = '';

            vm.message = {
                title: 'Email Sent',
                content: 'A link to change your password has been sent to your email.'
            };
        }
    }
})();