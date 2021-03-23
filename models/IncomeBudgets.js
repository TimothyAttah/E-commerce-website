const mongoose = require( 'mongoose' );

const IncomeSchema = new mongoose.Schema( {
  content: {
    type: String,
    required: true
  },
  values: {
    type: Number,
    required: true
  }
}, { timestamps: true } );

module.exports = mongoose.model( 'Incomes', IncomeSchema );
