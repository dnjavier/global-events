'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile.sells', {
        url: '/sells',
        templateUrl: 'app/account/profile/sells/sells.html',
        controller: 'SellsController',
        controllerAs: 'sells',
        authenticate: true
      });
  });
