const Service = require('../models/service');


class ProjectController{
	async getServices(req, res){
		const { sortBy, id } = req.body;
		const sortFilter = {}
		const findFilter= {}
		if(sortBy){
			if(sortBy === 'desc') sortFilter._id = -1;
			if(sortBy === 'asc') sortFilter._id = 1;
		}else {
			sortFilter._id = -1;
		}
		if(id) findFilter._id = id;
		try {
			const services = await Service.find(findFilter).sort(sortFilter).exec();
			return res.json({
				services: services
			});
		} catch(e) {
			return res.status(500).end();
		}
	}
}



module.exports = new ProjectController();