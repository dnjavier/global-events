'use strict';

(function() {

class CateventsController {

  constructor(events, $stateParams) {
    this.category = $stateParams.category;
    this.noEvents = false;

    //Filtered events by Category
    events.getAll().then(response => {
      var data = response.data;
      var filtered = [];
      //var category = this.event.category;

      for(var i=0; i<data.length; i++){
        if(this.category == data[i].category){
          filtered.push(data[i]);
        }
      }
      this.noEvents = this.checkEvents(filtered);
      this.eventsCategory = filtered;
    });

  }

  checkEvents(arr){
    if(arr.length == 0){
      return true;
    }

    return false;
  }

}

angular.module('appApp')
  .controller('CateventsController', CateventsController);

})();
