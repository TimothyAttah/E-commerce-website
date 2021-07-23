const router = require( 'express' ).Router();
const postControllers = require( '../controllers/postControllers' );

router.post( '/create', postControllers.createPost );

router.put( '/update/:id', postControllers.updatePost );

router.delete( '/delete/:id', postControllers.deletePost );

router.put( '/:id/like', postControllers.likePost );

module.exports = router;
