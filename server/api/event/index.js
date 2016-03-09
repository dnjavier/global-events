'use strict';

var express = require('express');
var controller = require('./event.controller');
console.log('server');
var router = express.Router();

/*router.use(function(req, res, next) {
 res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
 res.header("Access-Control-Allow-Origin", "*"); 
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
*/
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
