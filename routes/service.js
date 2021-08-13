const { Router } = require('express');
const router = Router();


const ServiceController = require('../controllers/service');


router.post(
	'/get-services', 


	ServiceController.getServices
);




module.exports = router;