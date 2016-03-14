'use strict';

(function() {

class SellsController {

  constructor(sells, Auth) {
    var vm = this;
    vm.organizer = Auth.getCurrentUser().name

    sells.getAll(vm.organizer).then(response =>{
      vm.sells = response.data;
      this.filterByOrganizer(vm.sells, vm.organizer);
    });
  }

  filterByOrganizer(sells, organizer) {
    let arrO = [];

    for(let i=0; i<sells.length; i++){
      if(sells[i].event.organizer == organizer){
        arrO.push(sells[i]);
      }
    }

    this.sells = arrO;
    this.filterByEvents(arrO);
  }

  filterByEvents(events){
    let arr = [];

    if(events.length > 0){
      //Old Array
      for(let i=0; i<events.length; i++){
        if(arr.length == 0){
          let money = events[i].qty * events[i].event.price;
          arr.push({event: events[i].event, 
                    total: events[i].qty,
                    money: money});
        } else {
          let flag = false;
          //New Array
          for(let x=0; x<arr.length; x++){
            if(events[i].event._id == arr[x].event._id){
              flag = true;
              arr[x].total += events[i].qty;
            }
          }
          if(!flag){
            let money = events[i].qty * events[i].event.price;
            arr.push({event: events[i].event, 
                      total: events[i].qty,
                      money: money});
          }
        }                
      }
    }  
    this.sells = arr;
    return arr;
  }


}

angular.module('appApp')
  .controller('SellsController', SellsController);

})();
