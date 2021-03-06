const Post = require( '../models/PostModel' );
const User = require( '../models/UserModel' );

const postControllers = {
	// CREATE A POST
	createPost: async (req, res) => {
		const newPost = new Post(req.body);
		try {
			const savedPost = await newPost.save();
			res
				.status(201)
				.json({ message: 'New post created successfully.', savedPost });
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// UPDATE A POST
	updatePost: async (req, res) => {
		try {
			const post = await Post.findById(req.params.id);
			if (post.userId === req.body.userId) {
				await post.updateOne({ $set: req.body });
				res
					.status(200)
					.json({
						message: 'Your post has been updated successfully',
						updated: post,
					});
			} else {
				res.status(403).json({ error: 'You can update only your post ' });
			}
		} catch (err) {
			return res.status(500).json({ error: err });
		}
	},

	// DELETE A POST
	deletePost: async (req, res) => {
		try {
			const post = await Post.findById(req.params.id);
			if (post.userId === req.body.userId) {
				await post.deleteOne();
				res
					.status(200)
					.json({
						message: 'Your post has been deleted successfully',
						deletedPost: post,
					});
			} else {
				res.status(403).json({ error: 'You can delete only your post ' });
			}
		} catch (err) {
			return res.status(500).json({ error: err });
		}
  },
  
	// LIKE A POST
  likePost: async ( req, res ) => {
    try {
      const post = await Post.findById( req.params.id );
      if ( !post.likes.includes( req.body.userId ) ) {
        await post.updateOne( { $push: { likes: req.body.userId } } )
        res.status(200).json({message: 'The post has been liked.'})
      } else {
         await post.updateOne({ $pull: { likes: req.body.userId } });
					res.status(200).json({ message: 'The post has been disliked.' });
      }
    } catch (err) {
      	return res.status(500).json({ error: err });
    }
  },

	// GET A POST
  getPost: async ( req, res ) => {
    try {
      const post = await Post.findById( req.params.id );
      	res.status(200).json({ message: 'My post.', post });
      
    } catch (err) {
      	return res.status(500).json({ error: err });
    }
  },

	// GET TIMELINE POSTS
  timelinePost: async ( req, res ) => {
    try {
      const currentUser = await User.findById( req.params.userId )
      const userPosts = await Post.find( { userId: currentUser._id } )
      const friendPosts = await Promise.all(
        currentUser.followings.map( friendId => {
         return Post.find({userId: friendId})
        })
      )
      res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
      	return res.status(500).json({ error: err });
    }
  },
	// GET USERS ALL POSTS
  userAllPosts: async ( req, res ) => {
		try {
			const user = await User.findOne({firstName: req.params.username})
			const posts = await Post.find( { userId: user._id } );
			res.status( 200 ).json( { message: 'Users all posts', posts } );
    } catch (err) {
      	return res.status(500).json({ error: err });
    }
  }
};

module.exports = postControllers;
