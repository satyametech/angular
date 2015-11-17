(function () {
'use strict';
myApp.controller('homeCtrl', function ($rootScope, $scope, $localStorage, $state) {
    $rootScope.notLogedin = false;
    if ($localStorage.loc_email) {
        $scope.email = $localStorage.loc_email;
        $scope.pass = $localStorage.loc_pass;
        $scope.role = $localStorage.role;
    } else {
        $state.go('login');
    }

});
})();
