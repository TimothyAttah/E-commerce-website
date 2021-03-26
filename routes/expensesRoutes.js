const express = require( 'express' );
const router = express.Router();
const auth = require('../middlewares/auth')

const {
  getAllExpenses, createExpenses, editExpenses, deleteExpenses
} = require( '../controllers/expensesController' );

router.get( '/', getAllExpenses );

router.post( '/create', auth, createExpenses );

router.patch( '/update/:id', auth, editExpenses );

router.delete( '/delete/:id', auth, deleteExpenses );

module.exports = router;
