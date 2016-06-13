'use strict';

angular.module('sunsetProjectApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        template: '<about></about>'
      });
  });
