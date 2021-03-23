const mongoose = require( 'mongoose' );

const connectDB = async () => {
  try {
    const mongoDB = await mongoose.connect( process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    } );
    console.log( `MongoDB connected on host: ${ mongoDB.connection.host }` );
  } catch ( error ) {
    console.log( `Error: ${ error }` );
  };
};

module.exports = connectDB;
