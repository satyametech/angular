(function() {
    'use strict';
    angular.module('formApp')
            .service('ajaxService', ajaxService);
    function ajaxService($localStorage, $state, $http, $q, $timeout) {
        var self = this;
        self.storeData = function(name, remail, rpassword, role, date_of_birth) {



            $http.post("connection/signup.php", {'name': name, 'remail': remail, 'rpassword': rpassword, 'role': role, 'date_of_birth': date_of_birth})
                    .success(function(data, status, headers, config) {
//                        console.log(user);
                        console.log("inserted Successfully");
                        $localStorage.loc_email = remail;
                        $localStorage.role = role;
                        var x = $timeout(function() {
                            $state.go('login');
                        }, 200);
                    });

        }

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
//    }

        self.delete = function(id) {
            function delRes() {
                var def = $q.defer();
                var deleteRes = $http.post("connection/delete.php", {'id': id});
                def.resolve(deleteRes);
                return def.promise;
            }
            var promise = delRes();
            return promise;
        };

        self.sendEmail = function(email, role) {
            var urlbase = "Link :- excellencetechnologies.co.in/satyam/satyam/#/register/";
            var txtmsg = urlbase + role + "/" + email + ";";

            function emailReturn() {
                var def = $q.defer();
                var emailRes = $http.post("connection/email.php", {'emailId': email, 'role': role, 'msg': txtmsg});
                def.resolve(emailRes);
                return def.promise;
            }
            var promise = emailReturn();
            return promise;
        };

        self.updateRecord = function(id, name, email, password, role,date_of_birth) {


            $http.post("connection/update.php", {'id': id, 'name': name, 'email': email, 'password': password, 'role': role,'date_of_birth': date_of_birth})
                    .success(function(data, status, headers, config) {
//                        console.log(user);
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