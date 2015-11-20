(function() {
    'use strict';

    angular.module('formApp')
            .controller('homeCtrl', homeCtrl);
    function homeCtrl($rootScope, $scope, $localStorage, $state) {
        $rootScope.notLogedin = false;
        if ($localStorage.loc_email) {
            $scope.email = $localStorage.loc_email;
            $scope.pass = $localStorage.loc_pass;
            $scope.role = $localStorage.role;
        } else {
            $state.go('login');
        }

    }
    ;
})();
