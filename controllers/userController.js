const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
const User = mongoose.model( 'User' );

const signUpUser = async ( req, res ) => {
  const newUser = req.body;
  const { firstName, lastName, email, password } = newUser
  if ( !firstName || !lastName || !email || !password )
    return res.status( 404 ).json( { error: 'Please fill in all fields' } )
  const savedUser = await User.findOne( { email } )
  if ( savedUser ) return res.status( 404 ).json( { error: 'User with that email already exists.' } );
  try {
    const hashedPassword = await bcrypt.hash( password, 12 );
    const users = await new User( {
      firstName,
      lastName,
      fullName: {firstName, lastName},
      email,
      password: hashedPassword
    } );
    await users.save();
    res.status(201).json({message: 'User successfully signed up.', users})
  } catch (error) {
     res.status( 500 ).json( { error: error.message } );
  }
}

const getUser = async ( req, res ) => {
  try {
    const users = await User.find();
    res.status(201).json(users)
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

module.exports.signUpUser = signUpUser;
module.exports.getUser = getUser;