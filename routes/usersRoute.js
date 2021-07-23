const router = require( 'express' ).Router();
const userControllers = require( '../controllers/usersControllers' );

router.put( '/update/:id', userControllers.updateUser );

router.delete( '/delete/:id', userControllers.deleteUser );

router.get( '/user/:id', userControllers.getUser );


module.exports = router;
