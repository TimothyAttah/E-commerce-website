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
  }
  // UPDATE A POST
  // DELETE A POST
  // LIKE A POST
  // GET A POST
  // GET TIMELINE POSTS
}

module.exports = postControllers;
