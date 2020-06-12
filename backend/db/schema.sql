DROP DATABASE IF EXISTS flash_db;
CREATE DATABASE flash_db;

\c flash_db;

DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName text NOT NULL, 
    lastName text NOT NULL,
    userName text NOT NULL UNIQUE,
    password VARCHAR, 
    email VARCHAR, 
    user_pic VARCHAR
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    hashtag VARCHAR 
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY, 
    comments_id INT REFERENCES post(id),
    comment VARCHAR
);

CREATE TABLE hashtags(
    id SERIAL PRIMARY KEY, 
    post_id INT REFERENCES post(id),
    hashtag VARCHAR
);