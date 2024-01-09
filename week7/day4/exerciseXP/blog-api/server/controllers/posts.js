const pool = require("../config/db");

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await pool.query("SELECT * FROM posts");
        res.json(allPosts.rows);
    } catch (err) {
        console.error(err.message);
    }
    };

const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
        res.json(post.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
    };

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await pool.query("INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *", [title, content]);
        res.json(newPost.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
    };

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatePost = await pool.query("UPDATE posts SET title = $1, content = $2 WHERE id = $3", [title, content, id]);
        res.json("Post was updated!");
    } catch (err) {
        console.error(err.message);
    }
    };

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
        res.json("Post was deleted!");
    } catch (err) {
        console.error(err.message);
    }
    };

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };