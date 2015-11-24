(function() {
    'use strict';
//myApp.controller('loginCtrl', function ($rootScope, $state, $scope, $http, ajaxService, $q, $localStorage) {
//    var current_state=$state.$current.name;
    angular.module('formApp')
            .controller('loginCtrl', loginCtrl);
    function loginCtrl($rootScope, $state, $scope, $http, loginService, $q, $localStorage) {

        $scope.loginData = function () {
            console.log($scope.email);
            console.log($scope.password);
			     // console.log($scope.id);
            var promise = loginService.loginData($scope.email, $scope.password);
            promise.then(function (data) {
                console.log(data);
                var data = data.data;
                console.log(data.msg);
                if (data.msg == "Success") {

                    console.log('jabsdjh');
                    var user={
                        email:$scope.email,
						id:data.id,
                        role:data.role						
                    };
                    $scope.error = "Login Successful";
                    $localStorage['user'] = user;
                    $state.go('root.home');
                } else {
                    $scope.error = "Login not done! Email or password is wrong"
                }
            });
            promise.catch(function (data) {
                $scope.error = "Login not done! Email or password is wrong"
            });
        }

    }
    ;
})();
