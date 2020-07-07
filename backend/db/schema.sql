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
    post_id INT REFERENCES users(id),
    pictures VARCHAR,
    captions VARCHAR,
    hashtag VARCHAR 
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY, 
    comments_id INT REFERENCES posts(id),
    comment VARCHAR
);

CREATE TABLE hashtags(
    id SERIAL PRIMARY KEY, 
    post_id INT REFERENCES posts(id),
    hashtag VARCHAR
);

INSERT INTO users( firstName, lastName, userName, password,  email, user_pic)
VALUES( 'CeeCee', 'Bliss', 'ceebliss', 'pursuit','cc@pursuit.org', 'https://pbs.twimg.com/profile_images/841015882797199361/Wigbpdj4_400x400.jpg');

INSERT INTO posts (post_id, pictures, captions, hashtag)
VALUES( 1, 'https://assets3.thrillist.com/v1/image/2791598/size/tl-full_width_tall_mobile.jpg', 'what a great time here', null);


INSERT INTO hashtags(post_id, hashtag)
VALUES( 1, '#summer19');
