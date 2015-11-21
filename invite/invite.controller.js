(function () {
'use strict';

    angular.module('formApp')
.controller('inviteCtrl',inviteCtrl);
function inviteCtrl($rootScope, $scope, $http, $q, $state, $timeout,$interval, inviteService){
    var role1;
    $scope.userRole = function () {


    }
    $scope.inviteUser = function () {
         
            
            var promise = inviteService.sendEmail($scope.invtemail, $scope.selrole);
            $scope.emailmsg = "sending email please wait";
            promise.then(function (data) {
                var data = data.data;
                console.log("hello" + data.err);
                if (data.msg === "Not Success") {
                    $scope.emailmsg = data.err + data.msg;
                } else {
                    console.log("Email Sended Successfully");
                    $scope.emailmsg = "Email Sended Successfully";
                    $state.go('inviteUser');
                    $scope.invtemail = "";
                    $scope.selrole = "";
                    var x = $timeout(function () {
                        $scope.emailmsg = "";
                    }, 2000);
                }
            });
            promise.catch(function (data) {
                console.log("Email Not Sended");
                $scope.emailmsg = "Email Not Sended";
            });
        
    };
};
})();