const router = require( 'express' ).Router();
const userControllers = require( '../controllers/usersControllers' );

router.get('/', userControllers.getUsers)


module.exports = router;
