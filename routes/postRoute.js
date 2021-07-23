const router = require( 'express' ).Router();
const postControllers = require( '../controllers/postControllers' );

router.post( '/create', postControllers.createPost );

module.exports = router;
