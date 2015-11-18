
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
                    }
                }

            })

            // Registration State
            .state('register', {
                url: '/signUp/:q/:email',
                views: {
                    'header': {
                        templateUrl: 'registration/register.html',
                        controller: 'signupCtrl'
                    }
                }

            })

            // Registration State
            .state('leftMenu', {
                url: '/leftMenu',
                views: {
                    'header': {
                        templateUrl: 'menu/leftmenu.html',
                        controller: 'menuCtrl'
                    },
                    'menu': {
                        templateUrl: 'menu/leftmenu.html',
                        controller: 'menuCtrl'
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
                        templateUrl: 'menu/leftmenu.html',
                        controller: 'menuCtrl'
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
                        templateUrl: 'menu/leftmenu.html',
                        controller: 'menuCtrl'
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
                        templateUrl: 'menu/leftmenu.html',
                        controller: 'menuCtrl'
                    }
                }

            });
});
