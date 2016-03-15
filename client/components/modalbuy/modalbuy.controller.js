'use strict';

class ModalController {

  constructor(event, $uibModalInstance, sells) {
    this.event = event;
    this.$uibModalInstance = $uibModalInstance;
    this.secondStep = false;
    this.ticketsQTY = 1;
    this.total = this.ticketsQTY * event.price;
    this.sells = sells;
    this.sell = {
      event: event._id,
      date: new Date()
    };
    
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

  validateFields(sell) {
    if(sell.name != ''
      && sell.lastname != ''
      && sell.email != ''
      && sell.phone > 0){
      return true;
    }

    return false;
  }

  pay(sell) {
    sell.qty = this.ticketsQTY;

    //if (this.validateFields(sell)) {
      this.sells.create(sell).then(response => {
        console.log('success');
        this.cancel();
      }, function error(res){
        console.log('error');
      });
    //}    
  }

  checkPay(sell) {
    console.log('sell');
    let arr = [];

    this.sells.getAll().then(response => {
      let allSells = response.data;
      for(let i=0; i<allSells.length; i++){
        if(allSells[i].event._id == sell.event){
          arr.push(allSells[i]);
        }
      }
      let n = 0;
      for(let i=0; i<arr.length; i++){
        n += arr[i].qty;
      }

      if(n <= this.event.qty){
        this.pay(sell);
      } else {
        console.log('No available tickets');
      }
    });
  } 

}

angular.module('appApp')
  .controller('ModalController', ModalController);
