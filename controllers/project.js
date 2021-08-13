const Project = require('../models/project');


class ProjectController{
	async getProjects(req, res){
		const { sortBy, id } = req.body;
		const sortFilter = {}
		const findFilter = {}
		if(sortBy){
			if(sortBy === 'desc') sortFilter._id = -1;
			if(sortBy === 'asc') sortFilter._id = 1;
		}else {
			sortFilter._id = -1;
		}
		if(id) findFilter._id = id;
		try {
			const projects = await Project.find(findFilter).sort(sortFilter).exec();
			return res.json({
				projects: projects
			});
		} catch(e) {
			return res.status(500).end();
		}
	}
}



module.exports = new ProjectController();