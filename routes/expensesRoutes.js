const express = require( 'express' );
const router = express.Router();

const {
  getExpenses, createExpenses, editExpenses, deleteExpenses
} = require( '../controllers/expensesController' );

router.get( '/', getExpenses );

router.post( '/create', createExpenses );

router.patch( '/update/:id', editExpenses );

router.delete( '/delete/:id', deleteExpenses );

module.exports = router;
