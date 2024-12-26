// controllers/postController.js
const postService = require('../services/postService');

// Create Post
const createPost = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user;
    const postData = { ...req.body, userID: req.user.id };
    const post = await postService.createPost(postData);
    if (!post) {
      return res.sendResponse(500, false, 'Post creation failed');
    }
    res.sendResponse(201, true, 'Post created successfully', post, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

// Get All Posts
const getAllPosts = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user; // Get tokens from req.user
    const loggedInUserID = req.user._id; // Assuming logged-in user ID is available in req.user
    const posts = await postService.getAllPosts(loggedInUserID);
    if (!posts || posts.length === 0) {
      return res.sendResponse(404, false, 'No posts found');
    }
    res.sendResponse(200, true, 'Posts fetched successfully', posts, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

// Get Post by ID
const getPostById = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user; // Get tokens from req.user
    const post = await postService.getPostById(req.params.id);
    if (!post) {
      return res.sendResponse(404, false, `Post with ID ${req.params.id} not found`);
    }
    res.sendResponse(200, true, 'Post fetched successfully', post, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

// Get Posts by User ID
const getPostsByUserId = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user; // Get tokens from req.user
    const posts = await postService.getPostsByUserId(req.params.userId);
    if (!posts || posts.length === 0) {
      return res.sendResponse(404, false, `No posts found for User with ID ${req.params.userId}`);
    }
    res.sendResponse(200, true, 'Posts fetched successfully', posts, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

// Update Post
const updatePost = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user; // Get tokens from req.user
    const updatedPost = await postService.updatePost(req.params.id, req.body);
    if (!updatedPost) {
      return res.sendResponse(404, false, `Post with ID ${req.params.id} not found for update`);
    }
    res.sendResponse(200, true, 'Post updated successfully', updatedPost, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

// Delete Post
const deletePost = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.user; // Get tokens from req.user
    const deletedPost = await postService.deletePost(req.params.id);
    if (!deletedPost) {
      return res.sendResponse(404, false, `Post with ID ${req.params.id} not found for deletion`);
    }
    res.sendResponse(200, true, 'Post deleted successfully', deletedPost, { accessToken, refreshToken });
  } catch (error) {
    res.sendResponse(500, false, error.message);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  updatePost,
  deletePost,
};
