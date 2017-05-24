(function () {
    'use strict';

    angular
        .module('app.core')
        .constant('BASE_URL', 'http://localhost:8000/api/')
        .constant('TOKEN_PREFIX', 'Bearer');
})();