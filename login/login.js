(function () {
'use strict';
    angular.module('formApp')
.controller('loginCtrl',loginCtrl);
function loginCtrl($rootScope, $localStorage, $scope, $http, $interval, ajaxService){
    
        $scope.loginData = function () {
            var promise = ajaxService.loginData($scope.email, $scope.password);
            promise.then(function (data) {
               
               //console.log(data.msg);
                var data = data.data;
                 
                if (data.msg === "Success") {
//                    alert(data.msg);
                    $scope.error = "Login Successful";
                    $localStorage.loc_email = $scope.email;
                    $localStorage.loc_pass = $scope.password;
                    $localStorage.role = data.role;
                    $state.go('home');
                } else {
                    $scope.error = "Login not done! Email or password is wrong"
                }
            });
            promise.catch(function (data) {
                $scope.error = "Login not done! Email or password is wrong"
            });
        }
    
};
})();
