'use strict';

angular
    .module('app', [
        'ngRoute',
        'ngSanitize',
        '7minWorkout',
        'mediaPlayer',
        'ui.bootstrap',
        'ngAnimate'
    ])
    .config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
        $routeProvider.when('/start', {templateUrl: 'partials/start.html'});
        $routeProvider.when('/workout', {templateUrl: 'partials/workout.html', controller: 'WorkoutController'});
        $routeProvider.when('/finish', {templateUrl: 'partials/finish.html'});
        $routeProvider.otherwise({redirectTo: '/start'});

        //$locationProvider.html5Mode(true);
        $sceDelegateProvider.resourceUrlWhitelist([
// Allow same origin resource loads.
            'self',
            'http://*.youtube.com/**']);
    });