(function() {
    'use strict';

    angular.module('formApp')
            .controller('menuCtrl', menuCtrl);
    function menuCtrl($rootScope, $localStorage, $scope, $http, $interval, $state, ajaxService) {
        if ($localStorage.role === 'Admin') {
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
            $rootScope.delOption = false;
        }
        else if ($localStorage.role === 'Guest') {
            $scope.home = true;
            $scope.view = true;
            $rootScope.delOption = false;
        }


        $scope.logout = function() {

            $localStorage.$reset();
            $state.go('login');
            console.log("Now you are logout");
        };
    };

       

    
        
})();