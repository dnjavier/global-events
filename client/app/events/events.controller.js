'use strict';

(function() {

class EventsController {

  constructor(events, $stateParams) {
    this.events = events;
    this.eventsFiltered = [];

    var idEvent = $stateParams.idEvent;

    //Get event from DB
    events.getOne(idEvent).then(response => {
      this.event = response.data;
      this.filterEvents(this.event.category);
    });

  }

  //Functions
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

}

angular.module('appApp')
  .controller('EventsController', EventsController);

})();
