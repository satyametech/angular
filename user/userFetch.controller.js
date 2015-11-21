(function() {
    'use strict';
    angular.module('formApp')
            .controller('fetchCtrl', fetchCtrl);
    function fetchCtrl($rootScope, $scope, $http, $interval, updateService,deleteService) {
        var data = 0;

        var self = this;
        $scope.itemsPerPage = 5;
        $scope.currentPage = 0;
        $scope.records = [];


        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
            else if (data > 0) {
                data = data - 5;
                self.fetch();
                $scope.prevPage.enabled = false;
                
            }
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.records.length / $scope.itemsPerPage) - 1;
        };
        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }

            else if ($scope.records.length !== 0) {
                data = data + 5;
                self.fetch();
                $scope.nextPage.enabled = false;  
            }
        };
        self.fetch = function() {

            if (data + 5 > $scope.length)
                $scope.next = true;
            else {
                $scope.next = false;
            }
            if (data == 0)
                $scope.prev = true;
            else
                $scope.prev = false;
            $http.get('connection/fetch.php?page=' + data).success(function(data) {
                
                $scope.records = data.data;
                $scope.length = data.length.count;
            });
        };
        self.fetch();

        $scope.$on('eventName', function(event, args) {
            self.fetch();
        });
        $scope.editData = function(recAll) {
            $scope.editingData = [];
            $scope.editbtnn = [];
            $scope.updbtn = [];
            $scope.editingData[recAll.id] = true;
            $scope.editbtnn[recAll.id] = false;
            $scope.updbtn[recAll.id] = true;
        };
        $scope.updateData = function(rec) {
            console.log(rec.Name);
            updateService.updateRecord(rec.id, rec.name, rec.email, rec.password, rec.role, rec.date_of_birth);
            $scope.editingData[rec.id] = false;
            $scope.editbtnn[rec.id] = true;
            $scope.updbtn[rec.id] = true;
            self.fetch();
        };

        $scope.deleteData = function(rec) {
            var promise = deleteService.delete(rec);
            promise.then(function(data) {
                $scope.delmsg = "Record Deleted...";
                console.log("Record Deleted");
                self.fetch();
            });
            promise.catch(function(data) {
                $scope.delmsg = "Record Not Deleted...";
            });
        };
    };
})();