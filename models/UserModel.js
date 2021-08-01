const { decodeBase64 } = require( 'bcryptjs' );
const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema( {
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
  },
  desc: {
    type: String,
    max: 50
  },
  city: {
    type: String,
    max: 50
  },
  from: {
    type: String,
    max: 50
  },
  relationship: {
    type: Number,
   enum: [1,2,3]
  },
}, { timestamps: true } );

// mongoose.model( 'User', UserSchema );
module.exports = mongoose.model( 'User', UserSchema );

// db.users.insert({
// 	profilePicture: '',
// 	coverPicture: '',
// 	followers: [],
// 	followings: [],
// 	isAdmin: false,
// 	firstName: 'Vivian',
// 	lastName: 'Angel',
// 	email: 'vivian@gmail.com',
// 	password: '$2a$12$5re0u1mxM4opmueDFwpjHemvOPA2dmiHzPw8XBhPU1Ng0Ndmr7qsi',
// 	city: 'Nigeria',
// 	from: 'Lagos',
// 	relationship: 1,
// 	desc: 'Hello wonderful people',
// 	createdAt: ISODate('2021-08-01T07:38:29.592Z'),
// 	updatedAt: ISODate('2021-08-01T07:38:29.592Z'),
// 	__v: 0,
// });