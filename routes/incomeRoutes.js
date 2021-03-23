const express = require( 'express' );
const router = express.Router();
const {
  getIncome, createIncome, editIncome
} = require( '../controllers/incomeController' );

router.get( '/', getIncome );
router.post( '/create/income', createIncome );
router.patch( '/update/income/:id', editIncome );

module.exports = router;