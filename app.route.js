angular.module('formApp')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider

                    // Login State
                    .state('login', {
                        url: '/login',
                        views: {
                            'header': {
                                templateUrl: 'login/login.html',
                                controller: 'loginCtrl'
                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }


                        },
                    })

                    // Registration State
                    .state('register', {
                        url: '/register/:role/:email',
                        views: {
                            'header': {
                                templateUrl: 'registration/register.html',
                                controller: 'signupCtrl'
                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }
                        }

                    })

                    // Registration State
                    .state('leftMenu', {
                        url: '/leftMenu',
                        views: {
                            'header': {
                                templateUrl: 'menu/topMenu.html',
                                controller: 'menuCtrl'

                            },
                            'menu': {
                                templateUrl: 'menu/topMenu.html',
                                controller: 'menuCtrl'

                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }
                        }

                    })

                    // Home form State
                    .state('home', {
                        url: '/home',
                        views: {
                            'header': {
                                templateUrl: 'home/home.html',
                                controller: 'homeCtrl'
                            },
                            'menu': {
                                templateUrl: 'menu/topMenu.html',
                                controller: 'menuCtrl'
                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }

                        }

                    })

                    // Home form State
                    .state('inviteUser', {
                        url: '/inviteUser',
                        views: {
                            'header': {
                                templateUrl: 'invite/invite.html',
                                controller: 'inviteCtrl'
                            },
                            'menu': {
                                templateUrl: 'menu/topMenu.html',
                                controller: 'menuCtrl'
                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }
                        }

                    })

                    // Home form State
                    .state('viewUser', {
                        url: '/viewUser',
                        views: {
                            'header': {
                                templateUrl: 'user/user.html',
                                controller: 'fetchCtrl'
                            },
                            'menu': {
                                templateUrl: 'menu/topMenu.html',
                                controller: 'menuCtrl'
                            },
                            'footer': {
                                templateUrl: 'common/footer.html',
                            }


                        }


                    });


        })

        .run(function($rootScope, $location, $document, $localStorage, $state) {
            var path = function() {
                return $location.path();
            };
            $rootScope.$watch(path, function(newVal, oldVal) {
                $rootScope.activetab = newVal;
            });
            $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {

                        if (toState.name != 'login' && toState.name != 'register' && $localStorage['user'])
                        {

                            $state.go(toState.name);
                        }
                        else if (!$localStorage['user'])
                        {


                            if (toState.name == 'login') {
                                $state.go('login');
                            }
                            else if (toState.name == 'register') {
                                $state.go('register');
                            }
                            else {
                                $state.go('login');
                            }
                        }
                        else {

                            $state.go('home');
                        }

                    })

//
//
//
            // $document.ready(function () {
            //     console.log('adsf');
            //     if ($localStorage['user'])
            //     {
            //         $state.go('home');
            //     }
            //     else
            //     {
            //         $state.go('login');
            //     }
            // });



        });
