'use strict';

angular.module('appApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main.company', {
        url: 'company',
        templateUrl: 'app/main/company/main.company.html',
        controller: 'MainCompanyController',
        controllerAs: 'company'
      });
  });
