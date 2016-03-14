'use strict';

(function() {

class MyeventsController {

  constructor(Auth, events, toastr) {
    var vm = this;
    vm.getCurrentUser = Auth.getCurrentUser;
    vm.events = events;
    vm.myEvents = [];
    vm.getEventsByOrganizer();
    vm.toastr = toastr;
  }

  getEventsByOrganizer() {
    let myName = this.getCurrentUser().name;
    this.myEvents = [];

    this.events.getAll().then(response => {
      let allEvents = response.data;
      for(let i=0; i<allEvents.length; i++){
        if(allEvents[i].organizer == myName) {
          this.myEvents.push(allEvents[i]);
        }        
      }
    });
  }

  deleteEvent(event) {
    this.events.deleteEvent(event._id);

    //update events list
    this.getEventsByOrganizer();
    this.toastr.success('Event deleted');
  }


}

angular.module('appApp')
  .controller('MyeventsController', MyeventsController);

})();
