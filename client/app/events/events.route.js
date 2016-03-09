'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events/:idEvent',
        templateUrl: 'app/events/events.html',
        controller: 'EventsController',
        controllerAs: 'events'
      });
  });
