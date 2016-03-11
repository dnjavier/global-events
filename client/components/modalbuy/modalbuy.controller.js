'use strict';

class ModalController {

  constructor(event, $uibModalInstance) {
    this.event = event;
    this.$uibModalInstance = $uibModalInstance;
    this.secondStep = false;
    this.ticketsQTY = 1;
    this.total = this.ticketsQTY * event.price;
    
  }

  changeVar() {
    this.secondStep = (this.secondStep == false) ? true : false;
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }

  operation(ope) {
    if (ope == '+') {
      if(this.ticketsQTY < 40){
        this.ticketsQTY++;
      }        
    } 

    if(ope == '-') {
      if(this.ticketsQTY > 1){
        this.ticketsQTY--;
      }        
    }
    this.total = this.event.price * this.ticketsQTY;
  }

}

angular.module('appApp')
  .controller('ModalController', ModalController);
