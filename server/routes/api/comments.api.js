const express = require('express');
const router = express.Router();

// Comment Model
const Comment = require('../../models/comment');

// @route   GET api/comments
// @desc    Get All comments
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments));
});

// @route   POST api/comments
// @desc    store An comment
router.post('/', (req, res) => {
    console.log('res',req.body);
    const newComment = new Comment({
        email: req.body.email,
        message: req.body.message,
        commentDate: req.body.commentDate,
        visible: true,
    });

    newComment.save().then(comment => {
        Comment.find()
        .then(comments => res.json(comments));});
});

module.exports = router;