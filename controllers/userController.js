const mongoose = require( 'mongoose' );
const User = require( '../models/user' );

const getUser = async ( req, res ) => {
  res.send('Hello User')
}

module.exports.getUser = getUser;