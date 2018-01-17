var express = require('express')

var router = express.Router();

var centre_controller = require('../controllers/centreController');
var location_controller = require('../controllers/locationController');

//router.get('/',nanoskill_controller.index);

/* GET request for creating a centre. NOTE This must come before routes that display centres (uses id) */
router.get('/centre/create', centre_controller.centre_create_get);

/* POST request for creating centre. */
router.post('/centre/create', centre_controller.centre_create_post);

/* GET request to delete centre. */
router.get('/centre/:id/delete', centre_controller.centre_delete_get);

// POST request to delete centre
router.post('/centre/:id/delete', centre_controller.centre_delete_post);

/* GET request to update centre. */
router.get('/centre/:id/update', centre_controller.centre_update_get);

// POST request to update centre
router.post('/centre/:id/update', centre_controller.centre_update_post);

/* GET request for one centre. */
router.get('/:id', centre_controller.centre_detail);

/* GET request for list of all centre items. */
router.get('/centres', centre_controller.centre_list);




/* GET request for creating a location. NOTE This must come before routes that display location (uses id) */
router.get('/location/:centre_id/create', location_controller.location_create_get);

/* POST request for creating location. */
router.post('/location/:centre_id/create', location_controller.location_create_post);

/* GET request to delete location. */
router.get('/location/:id/delete', location_controller.location_delete_get);

// POST request to delete location
router.post('/location/:id/delete', location_controller.location_delete_post);

/* GET request to update location. */
router.get('/location/:id/update', location_controller.location_update_get);

// POST request to update location
router.post('/location/:id/update', location_controller.location_update_post);

/* GET request for one location. */
router.get('/:id', location_controller.location_detail);

/* GET request for list of all location items. */
router.get('/location/list', location_controller.location_list);


module.exports = router;