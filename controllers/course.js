const Course = require('../models/course');


class CourseController{
	async getCourses(req, res){
		const { category, sortBy } = req.body;
		const findFilter = {}
		const sortFilter = {}
		if(category) findFilter.category = category;
		if(sortBy){
		 	if(sortBy === 'desc') sortFilter._id = -1;
		 	if(sortBy === 'asc') sortFilter._id = 1;
		}else {
			sortFilter._id = -1;
		}	
		try {
			const courses = await Course.find(findFilter).sort(sortFilter).exec();
			return res.status(200).json({
				courses: courses
			});
		} catch(e) {
			return res.status(500).json();
		}
	}
	async getById(req, res){
		const { id } = req.params;
		try {
			const course = await Course.findOne({_id: id}).exec();
			if(!course){
				return res.status(404).end();
			}
			return res.json({
				course: course
			});
		} catch(e) {
			return res.status(500).end();
		}
	}
}

module.exports = new CourseController();