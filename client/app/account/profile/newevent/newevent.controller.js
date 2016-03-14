'use strict';

(function() {

class NeweventController {

  constructor(Auth, events, $state, $stateParams, Upload, cloudinary, toastr) {
    var vm = this;
    vm.events = events;
    vm.$state = $state;
    vm._id = $stateParams._id;
    vm.toastr = toastr;
    vm.edit = false;
    vm.getCurrentUser = Auth.getCurrentUser; //function  
    
    if(vm._id != '') {
      this.searchEvent(vm._id);
      vm.edit = true;
    } else {
      vm.event = vm.setEvent(vm.getCurrentUser().name);
    }
      
    vm.dateOptions = vm.setDatePicker();
    vm.whereOptions = vm.getWhereOptions();
    vm.categoryOptions = vm.getCategoryOptions();
    vm.popup1 = {
      opened: false
    };

    //file
    vm.upload = Upload;
    vm.files = [];
    vm.cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/dlxqbg8py/upload',
      data: {
        upload_preset: 'pt4fy7fd',
        tags: 'events',
        context: 'photo=test'
      }
    };
  }

  //Function called when create an update an event
  create(event) {
    var events = this.events;
    var cleanFields = this.cleanFields;
    var $state = this.$state;
    var setEvent = this.setEvent;
    var createToBD = this.createToBD;
    var splitURL = this.splitURL;
    var toastr = this.toastr;
    this.cloudObj.data.file = document.getElementById('uploader').files[0];

    if(this.validateFields(event, toastr)) {
      var callback;
      if(!this.edit){
        callback = this.createToBD;
      } else {
        callback = this.updateToDB;
      }

      if(typeof this.cloudObj.data.file === 'undefined'
        && this.edit){
        callback(events, event, $state, toastr);
      } else {
        this.uploadImage(event, this.upload, this.cloudObj, callback, splitURL, events, $state, toastr);
      }
      
    }
      
  }

  //Upload the image to Cloudinary
  uploadImage(event, upload, cloudObj, callback, splitURL, events, $state, toastr) {
    event.file.upload = upload.upload(cloudObj)
    .progress(function (e) {
      event.file.progress = Math.round((e.loaded * 100.0) / e.total);
      event.file.status = "Uploading... " + event.file.progress + "%";
      
    }).success(function (data, status, headers, config) {
      event.image = splitURL(data.url);        
      callback(events, event, $state, toastr);

    }).error(function (data, status, headers, config) {
      event.file.result = data;
      console.log('error: ');
      console.log(data);
    });
  }

  //Call the events service to save in DB
  createToBD(events, event, $state, toastr) {
    events.create(event).then(function success(res){
      toastr.success('Event created');
      $state.go('profile.myevents');
    }, function error(res){
      toastr.error('An unexpected error ocurred', 'Error');
    });
  }

  //Modifies the image URL to get size needed
  splitURL(url) {
    let arrUrl = url.split('/');
    url = '';
    for(let i=0; i<arrUrl.length; i++){
      if(i == 6){
        url += 'w_750,h_500/'
      }
      if(i == 7) {
        url += arrUrl[i];
      } else {
        url += arrUrl[i] + '/';
      }                
    }
    return url;
  }

  //Initialize the Date variable
  setEvent(organizer) {
    var event = {
      date: new Date(),
      organizer: organizer,
      openDoors: new Date(),
      chooseSeat: false
    }
    return event;
  }

  //Initialize the Time variable
  setDatePicker() {
    return {
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      showWeeks: false
    }
  }

  //These are the select options for where
  getWhereOptions() {
    return [
      'Estadio Nacional',
      'Parque Viva',
      'Teatro Nacional'
    ];
  }

  //These are the select options for Category
  getCategoryOptions() {
    return [
      'Music',
      'Sports',
      'Train',
      'Cinema',
      'Theater'
    ];
  }

  //All the inputs must be filled
  validateFields(e, toastr){
    this.files = document.getElementById('uploader').files;
    e.file = this.files[0];

    if(e.title > ''
      && typeof e.where !== 'undefined'
      && typeof e.category !== 'undefined'
      && e.desc > ''
      && e.qty > 0
      && e.price >= 0
      && e.limitAge >= 0
    ) {      
      if(typeof e.file !== 'undefined' || typeof e.image !== 'undefined'){
        return true;
      }
    }
    toastr.error('Check required fileds', 'Error');
    return false;
  }

  //Displays the calendar in the view
  openCalendar() {
    this.popup1.opened = true;
  };

  //When edit an event, it must fill the inputs
  searchEvent(_id) {
    this.events.getOne(_id).then(response => {
      this.event = response.data;
      this.event.date = new Date(this.event.date);
    });
  }

  //Called when update the event
  updateToDB(events, event, $state, toastr) {
    events.updateEvent(event).then(response => {
      toastr.success('Event updated');
      $state.go('profile.myevents')
    });   
  }

}

angular.module('appApp')
  .controller('NeweventController', NeweventController);

})();
