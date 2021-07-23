const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authControllers = {
	// REGISTER USER
	signupUser: async (req, res) => {
		// try {
		// 	const { firstName, lastName, email, password } = req.body;
		// 	if (!firstName || !lastName || !email || !password)
		// 		return res.status(422).json({ error: 'Please fill in all fields.' });

		// 	const user = await User.findOne({ email });
		// 	if (user)
		// 		return res
		// 			.status(400)
		// 			.json({ error: 'User with this email already exist' });

		// 	const hashedPassword = await bcrypt.hash(password, 12);
		// 	const users = await new User({
		// 		firstName,
		// 		lastName,
		// 		email,
		// 		password: hashedPassword,
		// 	});
		// 	await users.save();
		// 	res.status(201).json({ message: 'User successfully signed up.', users });
		// } catch (err) {
		// 	res.status(500).json({ error: err });
		// }
		const { firstName, lastName, email, password } = req.body;
		try {
			const hashedPassword = await bcrypt.hash(password, 12);
			const user = await new User( {
				firstName,
				lastName,
				email,
				password: hashedPassword
			} )
			await user.save()
			res.status(201).json({ message: 'User successfully signed up.', user });
		} catch (err) {
			res.status(500).json({ error: err });
		}
	},
	// lOGIN USERS
	signinUser: async (req, res) => {
		// try {
		// 	const { email, password } = req.body;
		// 	if (!email || !password)
		// 		return res
		// 			.status(422)
		// 			.json({ error: 'Please enter your email and password' });
		// 	const user = await User.findOne({ email });
		// 	if (!user)
		// 		return res
		// 			.status(400)
		// 			.json({ error: 'Email or password is Incorrect.' });
		// 	const validPassword = await bcrypt.compare(password, user.password);
		// 	if (!validPassword)
		// 		return res
		// 			.status(400)
		// 			.json({ error: 'Email or password is Incorrect.' });
		// 	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

		// 	res
		// 		.status(201)
		// 		.json({ message: 'User successfully logged in.', token, user });
		// } catch (err) {
		// 	res.status(500).json({ error: err });
		// }
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });
			if (!user)
				return res
					.status(404)
					.json({ error: 'Email or password is Incorrect.' });
			const validPassword = await bcrypt.compare(password, user.password);
			if (!validPassword)
				return res
					.status(400)
					.json({ error: 'Email or password is Incorrect.' });
				res
					.status(201)
					.json({ message: 'User successfully logged in.', user });
		} catch (err) {
			res.status(500).json({ error: err });
		}
	},
};

module.exports = authControllers;
