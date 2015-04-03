var SecurityTracker = angular.module('SecurityTracker',['ui.router']);

SecurityTracker.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
        
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
        })
        
        .state('code', {
            url: '/code',
            templateUrl: 'partials/code.html'
        });
        
});

