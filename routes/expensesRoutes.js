const express = require( 'express' );
const router = express.Router();

const {
  getExpenses, createExpenses, editExpenses
} = require( '../controllers/expensesController' );

router.get( '/', getExpenses );

router.post( '/create', createExpenses );

router.patch( '/update/:id', editExpenses );

module.exports = router;
