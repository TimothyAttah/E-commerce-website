const express = require( 'express' );
const router = express.Router();
const {
  getUser, signUpUser
} = require( '../controllers/userController' );

router.get( '/', getUser );

router.post('/sign-up', signUpUser)

module.exports = router;