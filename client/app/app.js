'use strict';

angular.module('appApp', [
  'appApp.auth',
  'appApp.admin',
  'appApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'validation.match',
  'ngFileUpload',
  'cloudinary',
  'toastr'
])
  .config(function($urlRouterProvider, $locationProvider) { //, cloudinaryProvider
    $urlRouterProvider
      .otherwise('/how');

    $locationProvider.html5Mode(true);

    //cloudinaryProvider
      //.set("cloud_name", "dlxqbg8py")
      //.set("upload_preset", "pt4fy7fd");
  })
  .config(['cloudinaryProvider', function (cloudinaryProvider) {
  cloudinaryProvider
      .set("cloud_name", "dlxqbg8py")
      .set("upload_preset", "pt4fy7fd");
}]);
