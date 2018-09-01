const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true
    },
    commentDate: {
        type: Number,
        required: true
    }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);