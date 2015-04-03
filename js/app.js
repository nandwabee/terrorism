var SecurityTracker = angular.module('SecurityTracker',['ui.router']);

SecurityTracker.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'http://nandwabee.github.io/terrorism/partials/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'http://nandwabee.github.io/terrorism/partials/about.html',
        })
        
        .state('code', {
            url: '/code',
            templateUrl: 'http://nandwabee.github.io/terrorism/partials/code.html'
        });
        
});

