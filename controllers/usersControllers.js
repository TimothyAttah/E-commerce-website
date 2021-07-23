const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const userControllers = {
	// UPDATE USER
	updateUser: async (req, res) => {
		const { password, userId } = req.body;

		if (userId === req.params.id || req.body.isAdmin) {
			if (password) {
				try {
					password = await bcrypt.hash(password, 12);
				} catch (err) {
					return res.status(500).json({ error: err });
				}
			}
			try {
				const user = await User.findByIdAndUpdate(req.params.id, {
					$set: req.body,
				});
				res.status(200).json({ message: 'Account has been updated.' });
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res
				.status(403)
				.json({ error: 'You can update only your account!' });
		}
	},

	// DELETE USER
	deleteUser: async (req, res) => {
		const {userId, isAdmin } = req.body;

		if (userId === req.params.id || isAdmin) {
			try {
				const user = await User.findByIdAndDelete(req.params.id);
				res.status(200).json({ message: 'Account has been deleted.' });
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res
				.status(403)
				.json({ error: 'You can delete only your account!' });
		}
	},
	// GET A USER
	// FOLLOW A USER
	// UNFOLLOW A USER
};

module.exports = userControllers;
