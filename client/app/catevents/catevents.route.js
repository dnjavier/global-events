'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('catevents', {
        url: '/category/:category',
        templateUrl: 'app/catevents/catevents.html',
        controller: 'CateventsController',
        controllerAs: 'cat'
      });
  });
