const express = require( 'express' );
const router = express.Router();
const {
  getUser, signUpUser, signInUser
} = require( '../controllers/authController' );

router.get( '/', getUser );

router.post( '/sign-up', signUpUser );

router.post( '/sign-in', signInUser );

module.exports = router;
