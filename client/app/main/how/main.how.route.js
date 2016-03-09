'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.how', {
        url: 'how',
        templateUrl: 'app/main/how/main.how.html',
        controller: 'MainHowController',
        controllerAs: 'how'
      });
  });
