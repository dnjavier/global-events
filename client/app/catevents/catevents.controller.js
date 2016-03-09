'use strict';

(function() {

class CateventsController {

  constructor(events, $stateParams) {
    this.category = $stateParams.category;

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
      this.eventsCategory = filtered;
    });

  }

  //Functions

}

angular.module('appApp')
  .controller('CateventsController', CateventsController);

})();
