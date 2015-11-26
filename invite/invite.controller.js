(function() {
    'use strict';

    angular.module('formApp')
            .controller('inviteCtrl', inviteCtrl);
    function inviteCtrl($scope, $http, $q, $state, $timeout, $interval, inviteService, $localStorage) {
        var invite_by = $localStorage['user'].id;
        $scope.userRole = function() {
        }
        $scope.inviteUser = function() {

            var promise = inviteService.sendEmail($scope.invtemail, $scope.selrole, invite_by);
            $scope.emailmsg = "sending email please wait";
            promise.then(function(data) {
                var data = data.data;
                if (data.msg === "Not Success") {
                    $scope.emailmsg = data.err + data.msg;
                } else {
                    console.log("Email Sended Successfully");
                    $scope.emailmsg = "Email Sended Successfully";
                    $state.go('root.inviteUser');
                    $scope.invtemail = "";
                    $scope.selrole = "";
                    var x = $timeout(function() {
                        $scope.emailmsg = "";
                    }, 2000);
                }
            });
            promise.catch(function(data) {
                console.log("Email Not Sended");
                $scope.emailmsg = "Email Not Sended";
            });

            var promise1 = inviteService.inviteSave($scope.invtemail, $scope.selrole, invite_by);
            promise1.then(function(data) {
                var data = data.data;

            })

        }
    }
    ;
})();