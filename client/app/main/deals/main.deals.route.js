'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.deals', {
        url: 'deals',
        templateUrl: 'app/main/deals/main.deals.html',
        controller: 'MainDealsController',
        controllerAs: 'deals'
      });
  });
