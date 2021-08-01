const dotenv = require( 'dotenv' );
dotenv.config( { path: './config/.env' } );
const express = require( 'express' );
const cors = require( 'cors' );
const path = require( 'path' );
const multer = require( 'multer' );


const app = express();
const connectDB = require( './config/db' );

connectDB();
app.use( '/images', express.static( path.join( __dirname, 'public/images' ) ) );


app.use( express.json() );
app.use( cors() );

const storage = multer.diskStorage( {
  destination: ( req, file, cb ) => {
    cb( null, 'public/images' );
  },
  filename: ( req, file, cb ) => {
    cb(null, req.body.name)
  }
})

const upload = multer(storage);
app.post( '/api/upload', upload.single( 'file' ), ( req, res ) => {
  try {
    return res.status(200).json('File uploaded successfully')
  } catch (err) {
    console.log(err);
  }
} );

app.use( '/api/auth', require( './routes/authRoute' ) );
app.use( '/api/users', require( './routes/usersRoute' ) );
app.use( '/api/posts', require( './routes/postRoute' ) );

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
