const router = require( 'express' ).Router();
const userControllers = require( '../controllers/usersControllers' );

router.put( '/update/:id', userControllers.updateUser );

router.delete( '/delete/:id', userControllers.deleteUser );

router.get( '/', userControllers.getUser );

router.put( '/:id/follow', userControllers.followUsers );

router.put( '/:id/unfollow', userControllers.unfollowUsers );

router.get( '/friends/:userId', userControllers.getFriends );


module.exports = router;
