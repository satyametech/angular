(function () {
    'use strict';

    angular.module('formApp')
            .controller('homeCtrl', homeCtrl);
    function homeCtrl($rootScope, $scope, $localStorage, $state) {
        $rootScope.notLogedin = false;
        if ($localStorage.user) {
            $scope.email = $localStorage.user.email;
            $scope.role = $localStorage.user.role;
        }
       

    }
    ;
})();
