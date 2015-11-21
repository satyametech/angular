(function() {
    'use strict';

    angular.module('formApp')
            .controller('menuCtrl', menuCtrl);
    function menuCtrl($rootScope, $localStorage, $scope, $http, $interval, $state, ajaxService) {



        if ($localStorage.user.role === 'Admin') {
            $scope.home = true;
            $scope.invite = true;
            $scope.view = true;
            $rootScope.editOption = true;

            $rootScope.delOption = true;

        }
        else if ($localStorage.user.role === 'User') {
            $scope.home = true;
            $scope.view = true;
            $scope.invite = false;
            $rootScope.editOption = true;
            $rootScope.delOption = false;

        }
        else if ($localStorage.user.role === 'Guest') {
            $scope.home = true;
            $scope.view = true;
            $scope.invite = false;
            $rootScope.editOption = true;
            $rootScope.delOption = false;
        }


        $scope.logout = function() {

            $localStorage.$reset();
            $state.go('login');
            console.log("Now you are logout");
        };
    }
    ;





})();