'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.about', {
        url: 'about',
        templateUrl: 'app/main/about/main.about.html',
        controller: 'MainAboutController',
        controllerAs: 'about'
      });
  });
