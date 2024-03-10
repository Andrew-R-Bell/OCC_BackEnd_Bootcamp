const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    type: { type: String, required: true },
    style: { type: String, required: true },
    label: { type: String, required: true },
    likes: { type: Number, required: true },
    comments: [{ body: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;