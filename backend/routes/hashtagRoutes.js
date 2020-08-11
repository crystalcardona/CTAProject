const hashtags = require("express").Router();

const { searchByHashtag, createHashtag, deleteHashtag } = require("../queries/hashtags");


hashtags.post("/getHashtag", searchByHashtag);

hashtags.post("/", createHashtag);

hashtags.delete("/:id", deleteHashtag);


module.exports = hashtags;
