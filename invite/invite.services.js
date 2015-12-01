(function() {
    'use strict';
    angular.module('formApp')
            .service('inviteService', inviteService);
    function inviteService($localStorage, $state, $http, $q, $timeout) {
        var self = this;

        self.sendEmail = function(email, role, address) {
            var urlbase = "Link :- excellencetechnologies.co.in/satyam/satyam/#/registration/";
            var txtmsg = urlbase + role + "/" + email + "/" + address + ";";

            function emailReturn() {
                var def = $q.defer();
                var emailRes = $http.post("connection/email.php", {'emailId': email, 'role': role,'address': address, 'msg': txtmsg});
                def.resolve(emailRes);
                return def.promise;
            }
            var promise = emailReturn();
            return promise;
        };
        self.inviteSave = function(email, role, address, invite_by) {
            console.log(email);
            var def = $q.defer();
            $http.post("connection/require.php", {'remail': email, 'role': role, 'address':address, 'id': invite_by})
                    .success(function(data, status, headers, config) {
                        def.resolve(data);

                    }).error(function(data) {

                def.reject(data);

            })
            return def.promise;


        }

    }
    ;
})();
