const User = require('../models/User');

module.exports = (req, res, next) => {
	User.findOne({
			_id: req.params.id
		})
		.then((user) => {
			if (user) {
				if (user._userId.toString() === req.userId) next();
				else throw {
					name: 'you have not acces'
				};
			} else throw {
				name: 'sorry not found it'
			};
		})
		.catch(next);
}