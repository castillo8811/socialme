(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('PatientService', PatientService);

    function PatientService($http) {
        let service = {};

        return service;
    }
})();