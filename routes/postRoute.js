const router = require( 'express' ).Router();
const postControllers = require( '../controllers/postControllers' );

router.post( '/create', postControllers.createPost );

router.put( '/update/:id', postControllers.updatePost );

module.exports = router;
