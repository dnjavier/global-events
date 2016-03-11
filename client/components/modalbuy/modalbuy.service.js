(function() {
  'use strict';

  angular
      .module('appApp')
      .service('modalbuy', modalbuy);

  /** @ngInject */
  function modalbuy($uibModal, $log) {

    this.open = open;

    function open(event) {
      var selected;
      var modalInstance = $uibModal.open({
        animation: 'true',
        templateUrl: 'components/modalbuy/modalbuy.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        size: 'md',
        resolve: {
          event: function () {
            return event;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });

    }   

  }

})();
