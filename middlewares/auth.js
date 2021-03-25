const jwt = require( 'jsonwebtoken' );
const mongoose = require( 'mongoose' );

const User = mongoose.model('User')

const auth = ( req, res, next ) => {
  const { authorization } = req.headers;
  if ( !authorization )
    return res.status( 404 ).json( { error: ' Unauthorize user, Permission denied.' } )
  const token = authorization.replace( 'Bearer ', '' )
  jwt.verify( token, process.env.JWT_SECRET, async ( err, payload ) => {
    if ( err ) return res.status( 404 ).json( { error: 'Unauthorize user. Permission denied.' } )
    const { _id } = payload
    
    const userdata = await User.findById( _id );
    req.user = userdata

    next()
  })
}

module.exports = auth;