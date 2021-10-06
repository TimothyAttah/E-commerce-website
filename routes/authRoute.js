const router = require( 'express' ).Router();
const authControllers = require( '../controllers/authController' );

router.post( '/signup', authControllers.signupUser );

router.post( '/signin', authControllers.signinUser );

module.exports = router;
