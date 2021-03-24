const mongoose = require( 'mongoose' );
const Expenses = require( '../models/expensesBudgets' );

const getExpenses = async ( req, res ) => {
  res.send( 'Hello expenses budgets' )
};

module.exports.getExpenses = getExpenses;