const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');


const EnrollController = require('../controllers/enroll');


router.post(
	'/course-member', 

	[
		check('courseId', 'Поле courseId отсуствует').exists(),
		check('name', 'Поле name отсуствует').exists(),
		check('phone', 'Поле phone отсуствует').exists(),
	],

	EnrollController.newCourseMember
);

router.post(
	'/course-interested-user', 

	[
		check('courseId', 'Поле courseId отсуствует').exists(),
		check('name', 'Поле name отсуствует').exists(),
		check('phone', 'Поле phone отсуствует').exists(),
	],

	EnrollController.newCourseInterestedUser
);




module.exports = router;