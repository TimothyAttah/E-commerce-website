const mongoose = require( 'mongoose' );
const Expenses = require( '../models/expensesBudgets' );

const getExpenses = async ( req, res ) => {
  try {
    const expenses = await Expenses.find();
    res.status( 201 ).json( { message: 'Success', expenses } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
};

const createExpenses = async ( req, res ) => {
  const expenses = req.body;
  try {
    if ( !expenses.content || !expenses.values ) return res.status( 404 ).json( { error: 'Please fill in all fields' } );
    const newExpenses = await new Expenses( expenses );
    await newExpenses.save();
    res.status( 201 ).json( { message: 'Expenses was created successfully', newExpenses } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

const editExpenses = async ( req, res ) => {
  const { id: _id } = req.params;
  const expenses = req.body;
  try {
    if ( !mongoose.Types.ObjectId.isValid( _id ) ) return res.status( 404 ).json( { error: 'There is no expenses with that id' } );
    const updatedExpenses = await Expenses.findByIdAndUpdate( _id, expenses, { new: true } );
    res.status( 201 ).json( { message: 'Expenses updated successfully!!!', updatedExpenses } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

module.exports.getExpenses = getExpenses;
module.exports.createExpenses = createExpenses;
module.exports.editExpenses = editExpenses;
