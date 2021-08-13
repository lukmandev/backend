const Course = require('../../models/course');


class AdminController{
	async newCourse(req, res){
		const {
			subtitle,
			courseName,
			coursePrice,
			courseDiscount,
			category,
			imageUrl,
			schedule,
			courseTime,
			tools
		} = req.body;

		try {
			await Course.create({
				subtitle,
				courseName,
				coursePrice,
				courseDiscount,
				category,
				imageUrl,
				schedule,
				courseTime,
				tools
			});
			return res.status(200).end();
		} catch(e) {
			console.log(e)
			return res.status(500).end();
		}
	}
	async changeCourse(req, res){
		const {
			_id,
			subtitle,
			courseName,
			coursePrice,
			courseDiscount,
			category,
			imageUrl,
			schedule,
			courseTime,
			tools
		} = req.body;
		try {
			const result = await Course.findOneAndUpdate({_id: _id}, {
				subtitle, 
				courseName,
				courseDiscount,
				coursePrice,
				category,
				imageUrl,
				schedule,
				courseTime,
				tools
			}, {new: true});
			return res.status(200).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
	async deleteCourse(req, res){
		const { _id } = req.body;
		try {
			await Course.deleteOne({_id: _id}).exec();
			return res.status(200).end();
		} catch(e) {
			console.log(e);
			return res.status(500).end();
		}
	}
}


module.exports = new AdminController();