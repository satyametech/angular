(function() {
    'use strict';
    angular.module('formApp')
            .service('inviteService', inviteService);
    function inviteService($localStorage, $state, $http, $q, $timeout) {
        var self = this;

        self.sendEmail = function(email, role) {
            var urlbase = "Link :- excellencetechnologies.co.in/satyam/satyam/#/registration/";
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
        self.inviteSave = function(email, role, invite_by) {
            console.log(email);
            var def = $q.defer();
            $http.post("connection/require.php", {'remail': email, 'role': role, 'id': invite_by})
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
