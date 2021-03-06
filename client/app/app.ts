'use strict';

angular.module('sunsetProjectApp', [
  'sunsetProjectApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($urlRouterProvider, $locationProvider, $sceDelegateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $sceDelegateProvider.resourceUrlWhitelist(['**']);
  });
