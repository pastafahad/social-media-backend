const Post = require("../models/postModel");


const createPost = (req, res) => {

  const { image } = req.body;

  const newPost = new Post({
    title: "title",  
    description: "title", 
    image,
  });

  newPost
    .save()
    .then((response) => {
      res.status(201).json({
        message: "Post created successfully",
        post: response,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error creating post",
        error: err?.message || err,
      });
    });
};


const updatePost = (req, res) => {
  const { id, image } = req.body; 

  Post.findByIdAndUpdate(
    id,
    { title: "On your mind", description: "Add to your post", image }, 
    { new: true }
  )
    .then((response) => {
      if (response) {
        res.json({
          message: "Post updated successfully",
          post: response,
        });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error updating post",
        error: err?.message || err,
      });
    });
};


const deletePost = (req, res) => {
  const postId = req.params.postId;

  Post.findByIdAndDelete(postId)
    .then((response) => {
      if (response) {
        res.json({ message: "Post deleted successfully" });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error deleting post",
        error: err?.message || err,
      });
    });
};

const getAllPosts = (req, res) => {
  Post.find()
    .populate("author")  
    .then((allPosts) => {
      res.json(allPosts);
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error fetching posts",
        error: err?.message || err,
      });
    });
};


const getPostById = (req, res) => {
  const postId = req.params.postId;

  Post.findById(postId)
    .populate("author")
    .then((post) => {
      if (post) {
        res.json({ post });
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Error fetching post",
        error: err?.message || err,
      });
    });
};

module.exports = {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  getPostById,
};
