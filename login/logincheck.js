angular.module('formApp')

        .run(function($rootScope, $location, $localStorage, $state) {
            var path = function() {
                return $location.path();
            };
            $rootScope.$watch(path, function(newVal, oldVal) {
                $rootScope.activetab = newVal;
            });
            $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {

                        if (toState.name != 'login' && toState.name != 'registration' && $localStorage['user'])
                        {

                            $state.go(toState.name);
                        }
                        else if (!$localStorage['user'])
                        {


                            if (toState.name == 'login') {
                                $state.go('login');
                            }
                            else if (toState.name == 'registration') {
                                $state.go('registration');
                            }
                            else {
                                $state.go('login');
                            }
                        }
                        else {

                            $state.go('root.home');
                        }

                    })
                
         });
