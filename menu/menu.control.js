(function () {
'use strict';
myApp.controller('menuCtrl', function ($scope, $rootScope, $localStorage, $state) {

    if ($localStorage.role ==='Admin') {
        $scope.home = true;
        $scope.invite = true;
        $scope.view = true;
    

    } 
    else if ($localStorage.role === 'User') {
        $scope.home = true;
        $scope.view = true; 
        $rootScope.editOption = false;
        $rootScope.editth = false;
        $rootScope.edittd = false;
        $rootScope.delOption = true;
    } 
    else if ($localStorage.role === 'Guest') {
        $scope.home = true;
        $scope.view = true;
       
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