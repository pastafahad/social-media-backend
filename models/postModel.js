const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is mandatory
  },
  description: {
    type: String,
    required: true, // Description is mandatory
  },
  image: {
    type: String,
    required: true, // Image URL is mandatory
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  
    required: false, // Author is optional
  },
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
