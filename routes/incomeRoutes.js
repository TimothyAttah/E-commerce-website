const express = require( 'express' );
const router = express.Router();
const { getIncome } = require( '../controllers/incomeController' );

router.get( '/', getIncome );

module.exports = router;