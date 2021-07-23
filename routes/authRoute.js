const router = require( 'express' ).Router();
const authControllers = require( '../controllers/authController' );

router.post( '/', authControllers.registerUser );

module.exports = router;
