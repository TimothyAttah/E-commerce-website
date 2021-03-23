const express = require( 'express' );
const router = express.Router();
const { getIncome, createIncome } = require( '../controllers/incomeController' );

router.get( '/', getIncome );
router.post( '/create/income', createIncome );

module.exports = router;