const comments = require("express").Router();

const { getUsersComments, createComments, deleteComments} = require("../queries/hashtags");


comments.post("/getComments", getUsersComments);

comments.post("/", createComments);

comments.delete("/:id", deleteComments);


module.exports = comments;
