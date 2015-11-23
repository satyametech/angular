(function() {
    'use strict';
    angular.module('formApp')
            .service('updateService', updateService);
    function updateService($localStorage, $state, $http, $q, $timeout) {
        var self = this;

        self.updateRecord = function(id, name, email, password, role, date_of_birth) {


            $http.post("connection/update.php", {'id': id, 'name': name, 'email': email, 'password': password, 'role': role, 'date_of_birth': date_of_birth})
                    .success(function(data, status, headers, config) {

                        if (data.msg === 'Success') {
                            console.log("Updated Successfully");
                            return true;
                        } else if (data.msg === 'UnSuccess') {
                            console.log("Unsuccess");
                            return false;
                        }

                    });
        }
    }
    ;

})();