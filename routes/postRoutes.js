const express = require("express");
const {
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  getPostById,
} = require("../controllers/postControlling");

const router = express.Router();

router.post("/create-post", createPost);

router.put("/update-post", updatePost);

router.delete("/delete/:postId", deletePost);

router.get("/get-posts", getAllPosts);


router.get("/get-post/:postId", getPostById);

module.exports = router;
