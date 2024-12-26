const Post = require('../models/postModel');
const PostLike = require('../models/postlikeModel');

// Create Post
const createPost = async (postData) => {
  const post = new Post(postData);
  const savedPost = await post.save();
  if (!savedPost) {
    throw new Error('Post creation failed');
  }
  return savedPost;
};

// Get All Posts
const getAllPosts = async (loggedInUserID) => {
  const posts = await Post.find()
    .populate('userID', 'name profilephoto')

  if (!posts || posts.length === 0) {
    throw new Error('No posts found');
  }

  // For each post, check if the logged-in user has liked it
  const postsWithLikeStatus = await Promise.all(posts.map(async (post) => {
    const likedPost = await PostLike.findOne({
      userID: loggedInUserID,
      postID: post._id,
    });
    
    return {
      _id: post._id,
      user: {
        _id: post.userID._id,
        name: post.userID.name,
        profilephoto: post.userID.profilephoto,
      },
      posttext: post.posttext,
      postphoto: post.postphoto,
      privacy: post.privacy,
      updatedAt: post.updatedAt,
      liked: likedPost ? true : false,
    };
  }));

  return postsWithLikeStatus;
};

// Get Post by ID
const getPostById = async (id) => {
  const post = await Post.findById(id).populate('userID', 'name');
  if (!post) {
    throw new Error(`Post with ID ${id} not found`);
  }
  return post;
};

// Get Posts by User ID
const getPostsByUserId = async (userId) => {
  const posts = await Post.find({ userID: userId });
  if (!posts || posts.length === 0) {
    throw new Error(`No posts found for User with ID ${userId}`);
  }
  return posts;
};

// Update Post
const updatePost = async (id, updateData) => {
  const updatedPost = await Post.findByIdAndUpdate(id, updateData, { new: true });
  if (!updatedPost) {
    throw new Error(`Post with ID ${id} not found for update`);
  }
  return updatedPost;
};

// Delete Post
const deletePost = async (id) => {
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) {
    throw new Error(`Post with ID ${id} not found for deletion`);
  }
  return deletedPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  updatePost,
  deletePost,
};
