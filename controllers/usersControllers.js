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
		const { userId, isAdmin } = req.body;

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
	getUser: async ( req, res ) => {
		const userId = req.query.userId;
		const firstName = req.query.username;
		try {
			const user = userId
				? await User.findById( userId )
				: await User.findOne( { firstName } );
			const { password, updatedAt, ...other } = user._doc;
			res.status(200).json({ message: 'My Account. ', other });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// getUser: async ( req, res ) => {
	// 	try {
	// 		const user = await User.findById( req.params.id );
	// 		const { password, updatedAt, ...other } = user._doc;
	// 		res.status(200).json({ message: 'My Account. ', other });
	// 	} catch (err) {
	// 		return res.status(500).json({ error: err });
	// 	}
	// },

	// GET FRIENDS
	getFriends: async ( req, res ) => {
		try {
			const user = await User.findById( req.params.userId );
			const friends = await Promise.all(
				user.followings.map( friendId => {
					return User.findById(friendId)
				})
			)
			let friendList = [];
			friends.map( friend => {
				const { _id, firstName, lastName, profilePicture } = friend;
				friendList.push( { _id, firstName, lastName, profilePicture } );
			} );
			res.status( 200 ).json( friendList );
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// FOLLOW A USER
	followUsers: async (req, res) => {
		if (req.body.userId !== req.params.id) {
			try {
				const user = await User.findById(req.params.id);
				const currentUser = await User.findById(req.body.userId);
				if (!user.followers.includes(req.body.userId)) {
					await user.updateOne({ $push: { followers: req.body.userId } });
					await currentUser.updateOne({
						$push: { followings: req.body.params.id },
					});
					res.status(200).json({ message: 'User has been followed.' });
				} else {
					return res
						.status(403)
						.json({ error: 'You already follow this user' });
				}
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res.status(403).json({ error: "You can't follow yourself" });
		}
	},

	// UNFOLLOW A USER
	unfollowUsers: async (req, res) => {
		if (req.body.userId !== req.params.id) {
			try {
				const user = await User.findById(req.params.id);
				// const currentUser = await User.findById(req.params.id);
				const currentUser = await User.findById(req.body.userId);
				if (user.followers.includes(req.body.userId)) {
					await user.updateOne({ $pull: { followers: req.body.userId } });
					await currentUser.updateOne({
						$pull: { followings: req.body.params.id },
					});
					res.status(200).json({ message: 'User has been unfollow.' });
				} else {
					return res
						.status(403)
						.json({ error: 'You don\'t this user' });
				}
			} catch (err) {
				return res.status(500).json({ error: err });
			}
		} else {
			return res.status(403).json({ error: "You can't unfollow yourself" });
		}
	},
};

module.exports = userControllers;
