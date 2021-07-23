const router = require( 'express' ).Router();
const userControllers = require( '../controllers/usersControllers' );

router.put( '/update/:id', userControllers.updateUser );


module.exports = router;
