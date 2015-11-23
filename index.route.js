(function() {
    'use strict';

    angular.module('formApp')
            .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('/login');
                    $stateProvider
                            .state('root',
                                    {
                                        abstract: true,
                                        url: '/app',
                                        views: {
                                            "container": {
                                                templateUrl: 'menu/topMenu.html',
                                                controller: 'menuCtrl'
                                            },
                                        }
                                    })
                            .state('root.home', {
                                url: '/home',
                                views: {
                                    "view": {
                                        templateUrl: 'home/home.html',
                                        controller: 'homeCtrl'

                                    }
                                }
                            })


                            .state('root.inviteUser', {
                                url: '/inviteUser',
                                views: {
                                    "view": {
                                        templateUrl: 'invite/invite.html',
                                        controller: 'inviteCtrl'

                                    }
                                }
                            })

                            .state('login', {
                                url: '/login',
                                views: {
                                    'container': {
                                        templateUrl: 'login/login.html',
                                        controller: 'loginCtrl'


                                    }
                                }

                            })

                            .state('registration', {
                                url: '/registration/:role/:email',
                                views: {
                                    "container": {
                                        templateUrl: 'registration/registration.html',
                                        controller: 'signupCtrl'


                                    }
                                }

                            })
                            .state('root.viewUser', {
                                url: '/viewUser',
                                views: {
                                    "view": {
                                        templateUrl: 'user/user.html',
                                        controller: 'fetchCtrl'


                                    }
                                }

                            })


                }]);
})();