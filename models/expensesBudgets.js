const mongoose = require( 'mongoose' );

const ExpenseBudgets = new mongoose.Schema( {
  content: {
    type: String,
    required: true
  },
  values: {
    type: Number,
    required: true
  }
}, { timestamps: true } );

module.exports = mongoose.model( 'Expenses', ExpenseBudgets );
