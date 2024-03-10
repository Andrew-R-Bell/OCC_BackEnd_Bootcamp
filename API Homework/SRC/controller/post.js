// Clothes Database

const Post = require("../model/post");

// Create Clothing Post
const createPost = async (req, res) => {
    const { type, style, label, likes, comments } = req.body;

    try {
        const post = await Post.create({
            type,
            style,
            label,
            likes,
            comments,
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read All Clothing Posts
const getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            count: posts.length,
            posts,
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Read A Specific Clothing Post
// http://localhost:4000/api/posts/<object_id>
const getPost = async (req,res) => {
    const { id } = req.params;

        try {
            const post = await Post.findById({_id: id });
            if (!post) return res.status(404).json({ error: "No Post Found."});
            
            res.status(200).json(post);
        }  catch(error) {
            res.status(400).json({ error: error.message });
        }
    }

// Update Clothing Post
const updatePost = async (req,res) => {
    const { id } = req.params;

        try {
            const post = await Post.findByIdAndUpdate(
                {_id: id },
                { ...req.body },
                { new: true, runValidators: true }
                );
                
            if (!post) {
                return res.status(404).json({
                     error: "No Matching Post Found."});
                }
            res.status(200).json(post)({
                message: "The Post Has Been Succesfully Updates",
                post
            });
        }  
        catch(error) {
            res.status(400).json({ error: error.message });
        }
    }




// Delete Clothing Post
const deletePost = async (req,res) => {
    const { id } = req.params;

        try {
            const post = await Post.findByIdAndDelete({_id: id });
            
            if (!post) return res.status(404).json({ error: "No Matching Post Found."});
            
            res.status(200).json({ message: "The Post Has Been Succesfully Removed"    });
        }  catch(error) {
            res.status(400).json({ error: error.message });
        }
    }




// Module export controller
module.exports = {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
};