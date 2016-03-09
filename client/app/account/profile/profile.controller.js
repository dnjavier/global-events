'use strict';

(function() {

class ProfileController {

  constructor(Auth, $state) {
    this.getCurrentUser = Auth.getCurrentUser;
    this.menuClass = '';
    if($state.current.name == 'profile'){
      $state.go('profile.myevents');
    }
  }
  
  changeMenu() {
    if(this.menuClass == '') {
      this.menuClass = 'toggled';
      this.showMenu = 'on'
    } else {
      this.menuClass = '';
      this.showMenu = '';
    }
    
  }

}

angular.module('appApp')
  .controller('ProfileController', ProfileController);

})();
