'use strict';

angular.module('appApp')
  .directive('sidebar', () => ({
    templateUrl: 'components/sidebar/sidebar.html',
    restrict: 'E',
    controller: 'SidebarController',
    controllerAs: 'sidebar'
  }));
