'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile.newevent', {
        url: '/new/:_id',
        templateUrl: 'app/account/profile/newevent/newevent.html',
        controller: 'NeweventController',
        controllerAs: 'new',
        authenticate: true
      });
  });
