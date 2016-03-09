(function() {
  'use strict';

  angular
      .module('appApp')
      .service('events', events);

  /** @ngInject */
  function events($http) {

    this.getAll = getAll;
    this.getOne = getOne;
    this.create = create;
    this.updateEvent = updateEvent;
    this.deleteEvent = deleteEvent;

    function getAll() {
      return $http.get('/api/events');
    }

    function getOne(id) {
      var url = '/api/events/'+id;
      return $http.get(url);
    }

    function create(event) {
      return $http.post('/api/events', event);
    }

    function updateEvent(event) {
      return $http.put('/api/events/'+ event._id, event);
    }   

    function deleteEvent(id) {
      return $http.delete('/api/events/' + id);
    }   

  }

})();
