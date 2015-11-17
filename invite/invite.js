(function () {
'use strict';
myApp.controller('inviteCtrl', function ($rootScope, $scope, ajaxService, $q, $state, $timeout) {
    
    var role1;
    $scope.userRole = function () {


    }
    $scope.inviteUser = function () {
         
            
            var promise = ajaxService.sendEmail($scope.invtemail, $scope.selrole);
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
//            $scope.emailmsg = "";
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
});
})();