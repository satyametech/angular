(function() {
    'use strict';
    angular
            .module('formApp', ['uiGmapgoogle-maps'])
            .controller('MapCtrl', function($scope, $q, $http) {        
                $scope.inviteUser = function() {
                    var address = $scope.address;                   
                    google(address);
                    function google(address) {
                        var add;
                        var def = $q.defer();
                                 add = address;
                                console.log(add);
                        $http.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + add + '&key=AIzaSyCd6VPMPM-ZABfVeeHslkAi_Tp4tUvRTac').then(function(data) {
                            def.resolve(data);
                            console.log(data);
                            var res = data.data.results[0].geometry.location;
                            var lati = res.lat;
                            var longi = res.lng;
                            console.log(lati);
                            console.log(longi);
                            $scope.lat = lati;
                            $scope.long = longi;
                            $scope.map = {center: {latitude: $scope.lat, longitude: $scope.long}, zoom: 12};
                        });

                    }

                };
            });
})();
