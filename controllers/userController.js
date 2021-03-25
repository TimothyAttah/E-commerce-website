const { json } = require( 'express' );
const mongoose = require( 'mongoose' );
const User = require( '../models/user' );

const signUpUser = async ( req, res ) => {
  const newUser = req.body;
  if ( !newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password )
    return res.status(404).json({error: 'Please fill in all fields'})
  try {
    const users = await new User( newUser );
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