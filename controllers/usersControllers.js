const bcrypt = require( 'bcryptjs' );
const User = require( '../models/UserModel' );

const userControllers = {
  // UPDATE USER
  updateUser: async ( req, res ) => {
    const { password, userId } = req.body;
    
      if ( userId === req.params.id || req.user.isAdmin ) {
        if ( password ) {
          try {

            password = await bcrypt.hash(password, 12)
          } catch ( err ) {
            return res.status(500).json({error: err})
          }
        }
        try {
          const user = await User.findByIdAndUpdate( req.params.id, {
            $set: req.body
          } )
          res.status(200).json({message: 'Account has been updated.'})
        } catch (err) {
          return res.status(500).json({ error: err });
        }
      
      } else {
        return res.status(403).json({ error: 'You can update only your account!' });
      }
   
  },
  // DELETE USER 
  // GET A USER
  // FOLLOW A USER
  // UNFOLLOW A USER
};

module.exports = userControllers;