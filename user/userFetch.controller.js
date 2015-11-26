(function() {
    'use strict';
    angular.module('formApp')
            .controller('fetchCtrl', fetchCtrl);
    function fetchCtrl($rootScope, $scope, $http, $interval, updateService, deleteService) {
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
        self.fetch = function(id) {

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

                $scope.iuser = data.users;
                $scope.records = data.data;
                $scope.length = data.length.count;

                for (var k = 0; k < data.data.length; k++) {

                    var duce = [$scope.records[k].id];

                    $http.get('connection/id.php?id=' + duce).success(function(id) {

                    });
                }

            });
        };
        self.fetch();
        $scope.inviteUser = function(id) {
            for (var i = 0; i < $scope.iuser.length; i++)
            {
                if ($scope.iuser[i] == null)
                {
                }
                else if ($scope.iuser[i][0].invite_by == id) {
//                    console.log();
                    var data = $scope.iuser[i];
                    var email = '';
                    for (var j = 0; j < data.length; j++)
                    {
                        email = email + data[j].email + '\n';
                    }
                    return email;
                }
            }
            ;
        }
        ;
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
    }
    ;
})();
