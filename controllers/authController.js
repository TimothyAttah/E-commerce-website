// const mongoose = require( 'mongoose' );
// const bcrypt = require( 'bcryptjs' );
// const jwt = require( 'jsonwebtoken' );
// const User = mongoose.model( 'User' );

// const signUpUser = async ( req, res ) => {
//   const { firstName, lastName, email, password } = req.body;
//   if ( !firstName || !lastName || !email || !password )
//     return res.status( 404 ).json( { error: 'Please fill in all fields' } )
//   const savedUser = await User.findOne( { email } )
//   if ( savedUser ) return res.status( 404 ).json( { error: 'User with that email already exists.' } );
//   try {
//     const hashedPassword = await bcrypt.hash( password, 12 );
//     const users = await new User( {
//       firstName,
//       lastName,
//       fullName: {firstName, lastName},
//       email,
//       password: hashedPassword
//     } );
//     await users.save();
//     res.status(201).json({message: 'User successfully signed up.', users})
//   } catch (error) {
//      res.status( 500 ).json( { error: error.message } );
//   }
// }

// const signInUser = async ( req, res ) => {
//   const { email, password } = req.body;
//   if ( !email || !password ) return res.status( 404 ).json( { error: 'Please fill in all fields' } );
//   const savedUser = await User.findOne( { email } );
//   if ( !savedUser ) return res.status( 404 ).json( { error: 'User with that email does not exists.' } )
//   const exitPassword = await bcrypt.compare( password, savedUser.password );
//   if(!exitPassword) return res.status(404).json({error: 'Password is incorrect'})
//   try {
//     const token = await jwt.sign({_id: savedUser._id, }, process.env.JWT_SECRET)
//     res.status( 201 ).json( { message: 'User successfully logged in.', token, savedUser } ); 
//   } catch (error) {
//      res.status( 500 ).json( { error: error.message } );
//   }
// }

// const getUser = async ( req, res ) => {
//   try {
//     const users = await User.find();
//     res.status(201).json(users)
//   } catch (error) {
//     res.status( 500 ).json( { error: error.message } );
//   }
// }

// const authUser = async ( req, res ) => {
//   res.send('Hello protected User.')
// }

// module.exports.signUpUser = signUpUser;
// module.exports.signInUser = signInUser;
// module.exports.getUser = getUser;
// module.exports.authUser = authUser;


const authControllers = {
  getAuth: async ( req, res ) => {
    res.send('hellow welcome to auth users')
  }
}

module.exports = authControllers;