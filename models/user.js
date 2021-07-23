const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema( {
  username: {
    type: String,
    min: 3,
    max: 20,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    min: 3,
    max: 10,
  },
  lastName: {
    type: String,
    required: true,
    min: 3,
    max: 10,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 20
  },
  profilePicture: {
    type: String,
    default: ''
  },
  coverPicture: {
    type: String,
    default: ''
  },
  followers: {
    type: Array,
    default: []
  },
  followings: {
    type: Array,
    default: []
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true } );

// mongoose.model( 'User', UserSchema );
module.exports = mongoose.model( 'User', UserSchema );
