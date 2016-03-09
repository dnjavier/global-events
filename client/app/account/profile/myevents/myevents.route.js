'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile.myevents', {
        url: '/myevents',
        templateUrl: 'app/account/profile/myevents/myevents.html',
        controller: 'MyeventsController',
        controllerAs: 'my',
        authenticate: true
      });
  });
