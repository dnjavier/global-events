'use strict';

angular.module('appApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      controller: 'FooterController',
      controllerAs: 'foot',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });
