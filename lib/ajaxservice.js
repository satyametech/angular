angular.module('myApp')
myapp.factory('ajaxService', function($q, $http) {
    var factory = {};
    factory.ajaxService = function(sent) {
        function async1(sent) {
            var def = $q.defer();
            var login = $http.post('connection/login.php', sent);
            def.resolve(login);

            return def.promise;
        }
        function async2(val) {
            var def2 = $q.defer();
            var login = val.data;
            def2.resolve(login);

            return def2.promise;
        }
        function async3(val3) {

            var suc = val3.msg;

            if (suc != 'success') {
                return $q.reject(suc);
            }
            else {
                var def2 = $q.defer();
                def2.resolve(val3);
                return def2.promise;
            }
        }

        var promise = async1(sent).then(async2).then(async3);

        return promise;

    };
    return factory;
});







//angular.module('myApp')
//  .service('ajaxService', ['$http', '$q', function($http, $q){
//    var deferObject,
// 
//    myMethods   = {
// 
//      getPromise: function() {
//        var promise        =  $http.get('/login.php'),
//              deferObject  =  deferObject || $q.defer();
// 
//         }
//      };
// 
//      return myMethods;
// 
//angular.module('myApp')
//    .service('ajaxService', ['$http', '$q', function($http, $q){
//      var deferObject,
//      myMethods = {
// 
//        getPromise: function() {
//          var promise       =  $http.get('connection/login.php'),
//                deferObject =  deferObject || $q.defer();
// 
//                promise.then(
//                  // OnSuccess function
//                  function(answer){
//                    // This code will only run if we have a successful promise.
//                    deferObject.resolve(answer);
//                  },
//                  // OnFailure function
//                  function(reason){
//                    // This code will only run if we have a failed promise.
//                    deferObject.reject(reason);
//                  });
// 
//           return deferObject.promise;
//          }
//       };
// 
//       return myMethods;
// 
//    }]);
//
//
//
//
//
//angular.module('myApp')
//    .controller('loginCtrl',['$scope', 'ajaxService', function($scope, ajaxService){
//       var $scope.success   = false, 
//             $scope.error       = false;
// 
//      var askForPromise = ajaxService.getPromise();
// 
//      askForPromise.then(
//        // OnSuccess function
//        function(answer) {
//          $scope.somethingRight = answer;
//          $scope.success = true;
//        },
//        // OnFailure function
//        function(reason) {
//          $scope.somethingWrong = reason;
//          $scope.error = true;
//        }
//      );
//    }]);