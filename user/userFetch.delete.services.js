(function() {
    'use strict';
    angular.module('formApp')
            .service('deleteService', deleteService);
    function deleteService($localStorage, $state, $http, $q, $timeout) {
        var self = this;
        
        self.delete = function(id) {
            function delRes() {
                var def = $q.defer();
                var deleteRes = $http.post("connection/delete.php", {'id': id});
                def.resolve(deleteRes);
                return def.promise;
            }
            var promise = delRes();
            return promise;
        };
    };
})();