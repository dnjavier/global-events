'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, $state, events) {
    this.$state = $state;
    if($state.current.name == 'main'){
      $state.go('main.how');
    }

    this.$http = $http;

    this.listOptions = this.getListOptions();
    this.eventSlider = this.getEventSlider();
    this.mainOptions = this.getMainOptions();

    //Get events from DB
    events.getAll().then(response => {
      this.eventList = response.data;
    });    

   /* $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });*/

    /*$scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });*/
  }

  changeToActive(itemArray, item) {
    for(var i=0; i<itemArray.length; i++){
      itemArray[i].active = false;
    }
    item.active = true;
  }

  getListOptions() {
    return [
      {title: 'Music', iconClass: 'fa fa-music', category: 'Music'},
      {title: 'Sports', iconClass: 'fa fa-futbol-o', category: 'Sports'},
      {title: 'train', iconClass: 'fa fa-train', category: 'Train'},
      {title: 'Cinema', iconClass: 'fa fa-film', category: 'Cinema'},
      {title: 'theater', iconClass: 'fa fa-ticket', category: 'Theater'}
    ]
  }

  getMainOptions(){
    return [
      {
        icon: 'fa fa-credit-card-alt',
        text: 'How to buy?',
        state: 'main.how',
        active: true
      },
      {
        icon: 'fa fa-usd',
        text: 'Deals',
        state: 'main.deals',
        active: false
      },
      {
        icon: 'fa fa-info',
        text: 'About',
        state: 'main.about',
        active: false
      },
      {
        icon: 'fa fa-sign-in',
        text: 'Company?',
        state: 'main.company',
        active: false
      },
    ]
  }

  getEventSlider() {
    return [
      //Este es un ejemplo de carousel: ui-bootstrap carousel
      {image: 'assets/images/concierto.png',
        text: 'Concert',
        id: 0},
      {image: 'assets/images/baseball.png',
        text: 'baseball Game',
        id: 1}
    ]
  }

  searchEvent(text) {
    for(let i=0; i<this.eventList.length; i++){
      if(this.eventList[i].title == text){
        this.$state.go('events', {idEvent:this.eventList[i]._id});
      }
    }
  }

}

angular.module('appApp')
  .controller('MainController', MainController);

})();
