const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
	subtitle: {
		type: String,
		required: true
	},
	courseName: {
		type: String,
		required: true
	},
	coursePrice: {
 		type: String,
 		required: true
 	},
 	courseDiscount: {
 		type: String,
 		required: true
 	},
 	category: {
 		type: String,
 		required: true
 	},
 	imageUrl: {
 		type: String,
 		required: true
 	},
 	schedule: {
 		type: String,
 		required: true
 	},
 	courseTime: {
 		type: String,
 		required: true
 	},
 	tools: [
 		{
 			img: {type:String, required:true}
 		}
 	],
});

// schedule == 'график'


module.exports = model('courses', schema, 'courses');