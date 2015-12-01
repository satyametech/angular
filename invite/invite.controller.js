(function() {
    'use strict';

    angular.module('formApp')
            .controller('inviteCtrl', inviteCtrl);
    function inviteCtrl($scope, $http, $q, $state, $timeout, $interval, inviteService, $localStorage) {
        var invite_by = $localStorage['user'].id;
        $scope.userRole = function() {
        }
        $scope.inviteUser = function() {

            var promise = inviteService.sendEmail($scope.invtemail, $scope.selrole, $scope.address, invite_by);



            var address = $scope.address;
            google(address);
            function google(address) {

                var def = $q.defer();
                var add = address;
                console.log(add);
                $http.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + add + '&key=AIzaSyCd6VPMPM-ZABfVeeHslkAi_Tp4tUvRTac').then(function(data) {
                    def.resolve(data);
                    console.log(data);
                    var res = data.data.results[0].geometry.location;
                    var lati = res.lat;
                    var longi = res.lng;
                    console.log(lati);
                    console.log(longi);
                    $scope.address = lati + '\n' + longi;



                    $scope.emailmsg = "sending email please wait";
                    promise.then(function(data) {
                        var data = data.data;
                        if (data.msg === "Not Success") {
                            $scope.emailmsg = data.err + data.msg;
                        } else {
                            console.log("Email Sended Successfully");
                            $scope.emailmsg = "Email Sended Successfully";
                            $state.go('root.inviteUser');
                            $scope.invtemail = "";
                            $scope.selrole = "";
                            $scope.address = "";
                            var x = $timeout(function() {
                                $scope.emailmsg = "";
                            }, 2000);
                        }
                    });
                    promise.catch(function(data) {
                        console.log("Email Not Sended");
                        $scope.emailmsg = "Email Not Sended";
                    });


                    var promise1 = inviteService.inviteSave($scope.invtemail, $scope.selrole, $scope.address, invite_by);
                    promise1.then(function(data) {
                        var data = data.data;

                    })
                });
            }
        }
    }
    ;
})();