(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('PersistenceService', PersistenceService);

    function PersistenceService($cookies) {
        let service = {
            setCookieData: setCookieData,
            getCookieData: getCookieData,
            clearCookieData: clearCookieData
        };

        return service;

        function setCookieData(user) {
            console.log(user);
            console.log('Expiration Date: ' + moment.unix(user.data.exp).format('ddd, DD MMM YYYY HH:MM:SS'));

            $cookies.putObject('UserData', user, { expires: moment.unix(user.data.exp).format('ddd, DD MMM YYYY HH:MM:SS') });
        }

        function getCookieData() {
            return $cookies.getObject('UserData');
        }

        function clearCookieData() {
            $cookies.remove('UserData');
        }
    }
})();