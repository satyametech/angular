(function () {
'use strict';
myApp.controller('signupCtrl', function ($rootScope, $scope, $http, ajaxService, $state, $stateParams) {

    $scope.role = $stateParams['q'];
    $scope.email = $stateParams['remail'];
    console.log($scope.role + $scope.remail);
    var role;
//    $rootScope.notLogedin = true;
    $scope.selectRole = function () {
        role = $scope.role;
    },



    $scope.insertData = function () {
        if ($scope.rpassword !== $scope.cpassword) {
            $scope.error = "Password not matched";
        } else {
            console.log(role);
            var x = ajaxService.storeData($scope.name, $scope.remail, $scope.rpassword, $scope.role,$scope.date_of_birth);
            
            console.log(x);
            if (x === false) {
//                alert("erre");  
                $scope.error = "Some Thing Going Wrong";
            } else {
                $scope.error = "Registration is Successful";
            }
            console.log("something " + x);
        }
    };

});
})();
