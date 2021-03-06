const router = require( 'express' ).Router();
const postControllers = require( '../controllers/postControllers' );

router.post( '/create', postControllers.createPost );

router.put( '/update/:id', postControllers.updatePost );

router.delete( '/delete/:id', postControllers.deletePost );

router.put( '/:id/like', postControllers.likePost );

router.get( '/:id', postControllers.getPost );

router.get( '/timeline/:userId', postControllers.timelinePost );

router.get( '/profile/:username', postControllers.userAllPosts );


module.exports = router;
