'use strict';

(function() {

class EventsController {

  constructor(events, $stateParams, modalbuy, $uibModal, $log) { 
    this.events = events;
    this.eventsFiltered = [];

    //Modal
    this.modalbuy = modalbuy;
    this.$uibModal = $uibModal;
    this.$log = $log;

    var idEvent = $stateParams.idEvent;
    //Find event and filter category
    this.getEventDB(idEvent);

  }  

  //Find event by ID from DB
  getEventDB(idEvent){
    this.events.getOne(idEvent).then(response => {
      this.event = response.data;
      this.filterEvents(this.event.category);
    });
  }

  //Filter Events by Category
  filterEvents(category) {
    this.events.getAll().then(response => {
      var data = response.data;
      var filtered = [];

      for(var i=0; i<data.length; i++){
        if(category == data[i].category
          && data[i]._id != this.event._id){
          filtered.push(data[i]);
        }
      }
      this.eventsFiltered = filtered;
    });
  }

  /*** 
  ****  MODAL for buying tickest
  ***/
  openModal() {
    this.modalbuy.open(this.event);
  }

}

angular.module('appApp')
  .controller('EventsController', EventsController);

})();
