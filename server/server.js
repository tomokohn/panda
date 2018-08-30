const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const comments = require('./routes/api/comments.api');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config URI
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/api/comments', comments);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));