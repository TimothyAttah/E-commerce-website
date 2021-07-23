const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
    userId: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      max: 500
    },
    img: {
      type: String
    },
    likes: {
      type: Array,
      default: []
    },
    unlike: {
      type: Array,
      default: []
    }
	},
	{ timestamps: true }
);

// mongoose.model( 'User', PostSchema );
module.exports = mongoose.model('Post', PostSchema);
