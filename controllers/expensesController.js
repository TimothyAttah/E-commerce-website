const mongoose = require( 'mongoose' );
const Expenses = require( '../models/expensesBudgets' );

const getExpenses = async ( req, res ) => {
  try {
    const expenses = await Expenses.find();
    res.status( 201 ).json( { message: 'Success', expenses } );
  } catch (error) {
    res.status(500).json({error: error.message})
  }
};

module.exports.getExpenses = getExpenses;