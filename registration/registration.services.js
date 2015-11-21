(function() {
    'use strict';
    angular.module('formApp')
            .service('registerService', registerService);
    function registerService($localStorage, $state, $http, $q, $timeout) {
        var self = this;
        self.storeData = function(name, remail, rpassword, role, date_of_birth) {



            $http.post("connection/signup.php", {'name': name, 'remail': remail, 'rpassword': rpassword, 'role': role, 'date_of_birth': date_of_birth})
                    .success(function(data, status, headers, config) {

                        console.log("inserted Successfully");
                        $localStorage.loc_email = remail;
                        $localStorage.role = role;
                        var x = $timeout(function() {
                            $state.go('login');
                        }, 200);
                    });

        }

    

        };
    
    
})();