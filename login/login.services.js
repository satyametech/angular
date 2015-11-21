(function() {
    'use strict';
    angular.module('formApp')
            .service('loginService', loginService);
    function loginService($localStorage, $state, $http, $q, $timeout) {
        var self = this;
        

        self.loginData = function(email, password) {

            function logRes() {
                var def = $q.defer();
                var loginRes = $http.post("connection/login.php", {'email': email, 'password': password});
                def.resolve(loginRes);
                return def.promise;
            }
            
            var promise = logRes();
            return promise;
        };
       
    };
})();