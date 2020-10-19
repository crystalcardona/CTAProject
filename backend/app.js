const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const PORT = process.env.PORT || 3002;
const app = express();

const usersRouter = require('./routes/usersRoutes');
const postRouter = require('./routes/postsRoutes');
const hashtagRouter = require('./routes/hashtagRoutes');
const commentsRouter = require('./routes/commentsRoutes')

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));app.use(bodyParser.json());
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/posts', postRouter);
// app.use('comments', commentsRouter)
app.use('/hashtags', hashtagRouter);


// app.use((err, req, res, next) => {
//     res.status(500).json({        err    })
// })

app.listen(PORT, () => console.log("Listening", PORT));