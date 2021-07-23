const dotenv = require( 'dotenv' );
dotenv.config( { path: './config/.env' } );
const express = require( 'express' );
const cors = require( 'cors' );
const path = require( 'path' );


const app = express();
const connectDB = require( './config/db' );

connectDB();
app.use( express.json() );
app.use( cors() );
 

app.use( '/api/auth', require( './routes/authRoute' ) );
app.use( '/api/users', require( './routes/usersRoute' ) );
app.use( '/api/post', require( './routes/postRoute' ) );

if ( process.env.NODE_ENV === 'production' ) {
  app.use( express.static( 'client/build' ) );

  app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
  } );
};
 
const PORT = process.env.PORT || 8080;

app.listen( PORT, () =>
  console.log( `Server is set and running on port: ${ PORT }` )
);
