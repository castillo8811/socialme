(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['PersistenceService'];

    function Dashboard(PersistenceService) {
        let vm = this;

        init();

        function init() {
            vm.userData = PersistenceService.getCookieData();
        }
    }
})();