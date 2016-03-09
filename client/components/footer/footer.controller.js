'use strict';

class FooterController {

  constructor($location, $anchorScroll) {

    this.scrollTo = function (idElemento) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(idElemento);
      
      // call $anchorScroll()
      $anchorScroll();
    }

  }
}

angular.module('appApp')
  .controller('FooterController', FooterController);
