const router = require( 'express' ).Router();
const authControllers = require( '../controllers/authController' );

router.get( '/', authControllers.getAuth );

module.exports = router;
