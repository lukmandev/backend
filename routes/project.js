const { Router } = require('express');
const router = Router();


const ProjectController = require('../controllers/project');


router.post(
	'/get-projects', 


	ProjectController.getProjects
);




module.exports = router;