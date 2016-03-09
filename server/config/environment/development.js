'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {    
    uri: 'mongodb://localhost/app-dev'
    //uri: 'mongodb://admin:admin@ds031892.mlab.com:31892/app-dev'
  },

  // Seed database on startup
  seedDB: false //true

};
