const express = require( 'express' );
const router = express.Router();
const auth = require( '../middlewares/auth' );
const {
  getUser, signUpUser, signInUser, authUser
} = require( '../controllers/authController' );

router.get( '/', getUser );

router.post( '/sign-up', signUpUser );

router.post( '/sign-in', signInUser );

router.get( '/protected', auth, authUser );

module.exports = router;
