const Post = require( '../models/PostModel' );

const postControllers = {

  // CREATE A POST
  createPost: async ( req, res ) => {
    const newPost = new Post( req.body );
    try {
      const savedPost = await newPost.save();
      res.status( 201 ).json( { message: 'New post created successfully.', savedPost } );
    } catch (err) {
      return res.status(500).json({error: err})
    }
  },

  // UPDATE A POST
  updatePost: async ( req, res ) => {
   try {
      const post = await Post.findById(req.params.id);
     if ( post.userId === req.body.userId ) {
       await post.updateOne( { $set: req.body } )
       res.status(200).json({message: 'Your post has been updated successfully', updated: post})
			} else {
				res.status(403).json({ error: 'You can update only your post ' });
			}
   } catch (err) {
     return res.status(500).json({error: err})
   }
  },

  // DELETE A POST
  // LIKE A POST
  // GET A POST
  // GET TIMELINE POSTS
}

module.exports = postControllers;
