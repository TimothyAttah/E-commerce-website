const Income = require( '../models/IncomeBudgets' );

const getIncome = ( req, res ) => {
  res.send('Hello Income budget')
}


module.exports.getIncome = getIncome