const db = require('../db/index')


const getUsersComments = async (req, res, next) => {
    try{
        let comments = await db.any("SELECT * FROM comments WHERE user_id=$1 ORDER BY id DESC", req.params.id);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: comments
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

const deleteComments= async (req, res, next) => {
    try {
        let commentId = req.params.id;
        let comments = ("DELETE FROM comments WHERE id=$1 RETURNING *", commentId)
        res.status(200).json({
            status: "success",
            message: "all users posts",
            payload: comments
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}



const createComments = async (req, res, next) => {
    try {
        let comments = await db.one("INSERT INTO comments (comments_id, comment) VALUES (${post_id}, ${post}) RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "created comment",
            payload: comments
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

module.exports = {getUsersComments, deleteComments, createComments}