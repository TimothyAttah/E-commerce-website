const express = require( 'express' );
const router = express.Router();

const { getExpenses, createExpenses } = require( '../controllers/expensesController' );

router.get( '/', getExpenses );

router.post( '/create', createExpenses );

module.exports = router;
