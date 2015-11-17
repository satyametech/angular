myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider

            // Login State
            .state('login', {
                url: '/login',
                views: {
                    'header': {
                        templateUrl: 'template/login.html',
                        controller: 'loginCtrl'
                    }
                }

            })

            // Registration State
            .state('register', {
                url: '/signUp/:q/:email',
                views: {
                    'header': {
                        templateUrl: 'template/register.html',
                        controller: 'signupCtrl'
                    }
                }

            })

            // Registration State
            .state('leftMenu', {
                url: '/leftMenu',
                views: {
                    'header': {
                        templateUrl: 'template/leftmenu.html',
                        controller: 'menuCtrl'
                    },
                    'menu': {
                        templateUrl: 'template/leftmenu.html',
                        controller: 'menuCtrl'
                    }
                }

            })

            // Home form State
            .state('home', {
                url: '/home',
                views: {
                    'header': {
                        templateUrl: 'template/home.html',
                        controller: 'homeCtrl'
                    },
                    'menu': {
                        templateUrl: 'template/leftmenu.html',
                        controller: 'menuCtrl'
                    }
                }

            })

            // Home form State
            .state('inviteUser', {
                url: '/inviteUser',
                views: {
                    'header': {
                        templateUrl: 'template/invite.html',
                        controller: 'inviteCtrl'
                    },
                    'menu': {
                        templateUrl: 'template/leftmenu.html',
                        controller: 'menuCtrl'
                    }
                }

            })

            // Home form State
            .state('viewUser', {
                url: '/viewUser',
                views: {
                    'header': {
                        templateUrl: 'template/user.html',
                        controller: 'fetchCtrl'
                    },
                    'menu': {
                        templateUrl: 'template/leftmenu.html',
                        controller: 'menuCtrl'
                    }
                }

            });
});