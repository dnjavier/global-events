(function() {
  'use strict';

  angular
      .module('appApp')
      .service('sells', sells);

  /** @ngInject */
  function sells($http) {

    this.getAll = getAll;
    this.getOne = getOne;
    this.create = create;
    this.updateSell = updateSell;
    this.deleteSell = deleteSell;
    this.totalSells = totalSells;

    function getAll(organizer) {
      return $http.get('/api/sells/organizer/'+organizer);
    }

    function getOne(id) {
      var url = '/api/sells/'+id;
      return $http.get(url);
    }

    function create(sell) {
      return $http.post('/api/sells', sell);
    }

    function updateSell(sell) {
      return $http.put('/api/sells/'+ sell._id, sell);
    }   

    function deleteSell(id) {
      return $http.delete('/api/sells/' + id);
    }  

    function totalSells(idEvent) {
      let arr = [];

      getAll().then(response => {
        let allSells = response.data;
        for(let i=0; i<allSells.length; i++){
          if(allSells[i].event._id == idEvent){
            arr.push(allSells[i]);
          }
        }
        let n = 0;
        for(let i=0; i<arr.length; i++){
          n += arr[i].qty;
        }
        console.log(n);
      });
    } 

  }

})();
