const express = require( 'express' );
const router = express.Router();
const auth = require('../middlewares/auth')
const {
  getIncome, createIncome, editIncome, deleteIncome
} = require( '../controllers/incomeController' );

router.get( '/', getIncome );

router.post( '/create/income', auth, createIncome );

router.patch( '/update/income/:id', auth, editIncome );

router.delete( '/delete/income/:id', auth, deleteIncome );

module.exports = router;
