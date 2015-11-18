(function () {
'use strict';
angular.module('formApp')
.controller('fetchCtrl',fetchCtrl);
function fetchCtrl($rootScope, $scope, $http, $interval, ajaxService){
        var self = this;
        $scope.itemsPerPage = 5;
        $scope.currentPage = 0;
        $scope.records = [];
        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };
        $scope.pageCount = function () {
            return Math.ceil($scope.records.length / $scope.itemsPerPage) - 1;
        };
        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };
        self.fetch = function () {
            $http.get('connection/fetch.php').success(function (data) {
                $scope.records = data;
            });
        };
        self.fetch();
        $scope.$on('eventName', function (event, args) {
            self.fetch();
        });
        
        $scope.editData = function (recAll) {
            $scope.editingData = [];
            $scope.editbtnn = [];
            $scope.updbtn = [];
            $scope.editingData[recAll.id] = true;
            $scope.editbtnn[recAll.id] = false;
            $scope.updbtn[recAll.id] = true;
        };
        $scope.updateData = function (rec) {
            console.log(rec.Name);
            ajaxService.updateRecord(rec.id, rec.name, rec.email, rec.password, rec.role);
            $scope.editingData[rec.id] = false;
            $scope.editbtnn[rec.id] = true;
            $scope.updbtn[rec.id] = false;
            self.fetch();
        };

        $scope.deleteData = function (rec) {
            var promise = ajaxService.delete(rec);
            promise.then(function (data) {
                $scope.delmsg = "Record Deleted...";
                console.log("Record Deleted");
                self.fetch();
            });
            promise.catch(function (data) {
                $scope.delmsg = "Record Not Deleted...";
            });
        };
    };

// formApp.filter('offset', function () {
    angular.module('formApp')
.filter('offset',offset);
function offset(){
    return function (input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
};
})();