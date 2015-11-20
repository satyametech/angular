
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


                },
                

            })

            // Registration State
            .state('register', {
                url: '/register/:role/:email',
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
                        templateUrl: 'menu/topMenu.html',
                        controller: 'menuCtrl'

                    },
                    'menu': {
                        templateUrl: 'menu/topMenu.html',
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
                        templateUrl: 'menu/topMenu.html',
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
                        templateUrl: 'menu/topMenu.html',
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
                        templateUrl: 'menu/topMenu.html',
                        controller: 'menuCtrl'
                    }

                    // 'footer': {
                    //     templateUrl: 'user/footer.html',
                        
                    // },
                }


            });

            
})
// angular
//         .module('formApp', ['ngRoute', 'ngCookies'])
//         .config(config)
//         .run(run);

//     config.$inject = ['$routeProvider', '$locationProvider'];
//     function config($routeProvider, $locationProvider) {
//         $routeProvider

//             .when('/',{
//                 controller:'loginCtrl',
//                 templateUrl:'login/login.html'

//             })
//             .when('/',)

//             .when('/', {
//                 controller: 'HomeCtrl',
//                 templateUrl: 'home/home.view.html',
//                 controllerAs: 'vm'
//             })

//             .when('/login', {
//                 controller: 'LoginController',
//                 templateUrl: 'login/login.view.html',
//                 controllerAs: 'vm'
//             })

//             .when('/register', {
//                 controller: 'RegisterController',
//                 templateUrl: 'register/register.view.html',
//                 controllerAs: 'vm'
//             })

//             .otherwise({ redirectTo: '/login' });
//     }

//     run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
//     function run($rootScope, $location, $cookieStore, $http) {
//         // keep user logged in after page refresh
//         $rootScope.globals = $cookieStore.get('globals') || {};
//         if ($rootScope.globals.currentUser) {
//             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//         }

//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             // redirect to login page if not logged in and trying to access a restricted page
//             var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//             var loggedIn = $rootScope.globals.currentUser;
//             if (restrictedPage && !loggedIn) {
//                 $location.path('/login');
//             }
//         });
//     }













































.run(['$rootScope', '$location', function($rootScope, $location){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     $rootScope.activetab = newVal;
   });
}]);
