(function () {
'use strict';
myApp.controller('menuCtrl', function ($scope, $rootScope, $localStorage, $state) {

    if ($localStorage.role ==='Admin') {
        $scope.home = true;
        $scope.invite = true;
        $scope.view = true;
        $scope.line2 = true;
        $scope.line3 = true;
        $rootScope.delOption = false;
        $rootScope.editOption = false;
        $rootScope.editth = false;
        $rootScope.edittd = false;

    } 
    else if ($localStorage.role === 'User') {
        $scope.home = true;
        $scope.invite = false;
        $scope.view = true;
        $scope.line2 = false;
        $scope.line3 = true;
        $rootScope.editOption = false;
        $rootScope.editth = false;
        $rootScope.edittd = false;
        $rootScope.delOption = true;
    } 
    else if ($localStorage.role === 'Guest') {
        $scope.home = true;
        $scope.invite = false;
        $scope.view = true;
        $scope.line2 = false;
        $scope.line3 = true;
        $rootScope.delOption = true;
        $rootScope.editOption = true;
        $rootScope.editth = true;
        $rootScope.edittd = true;
    }
    
    
    $scope.logout = function () {

        $localStorage.$reset();
        $state.go('login');
        console.log("Now you are logout");
    };
});

        myApp.directive('menuDiv', function($document) {
                return {
                    restrict: 'A',
                    templateUrl: 'template/leftmenu.html',
                    link: function(scope, element, attrs) {
                    }
                };
            });
        })();