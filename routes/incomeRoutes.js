const express = require( 'express' );
const router = express.Router();
const {
  getIncome, createIncome, editIncome, deleteIncome
} = require( '../controllers/incomeController' );

router.get( '/', getIncome );

router.post( '/create/income', createIncome );

router.patch( '/update/income/:id', editIncome );

router.delete( '/delete/income/:id', deleteIncome );

module.exports = router;
