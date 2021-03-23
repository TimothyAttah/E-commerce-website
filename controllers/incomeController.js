const Income = require( '../models/IncomeBudgets' );

const getIncome = async ( req, res ) => {
  try {
    const incomes = await Income.find();
    res.status(201).json({message: 'Success', data: incomes})
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}

const createIncome = async ( req, res ) => {
  try {
    const  incomes = req.body;
    const data = await new Income( incomes );
    await data.save();
    res.status( 201 ).json( { message: 'Income created successfully', data } );
  } catch (error) {
    res.status( 500 ).json( { error: error.message } );
  }
}


module.exports.getIncome = getIncome;
module.exports.createIncome = createIncome;