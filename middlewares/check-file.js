const fs = require('fs');

module.exports = (name) => 
	(req, res, next) => {
		fs.stat(`public/uploads/${req.body[name]}`, (err, stats) => {
			if (err && err.code == 'ENOENT') {
				return res.status(400).json({
					message: `Такой ${req.body[name]} файл не существует`
				});
			}else{
				return next();
			}
		});
	}