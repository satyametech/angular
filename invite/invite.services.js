(function() {
    'use strict';
    angular.module('formApp')
            .service('inviteService', inviteService);
    function inviteService($localStorage, $state, $http, $q, $timeout) {
        var self = this;

        self.sendEmail = function(email, role) {
            var urlbase = "Link :- excellencetechnologies.co.in/satyam/satyam/#/registeration/";
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

    }
    ;
})();