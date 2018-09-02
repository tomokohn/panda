const express = require('express');
const router = express.Router();

// Comment Model
const Comment = require('../../models/comment');

// @route   GET api/comments
// @desc    Get All comments
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch((e) => {
            console.log('Failed on mongo find:', e)
            res.status(500).send({ error: e.message });
        })
});

// @route   POST api/comments
// @desc    store An comment
router.post('/', (req, res) => {
    console.log('req',req.body);
    const newComment = new Comment({
        email: req.body.email,
        message: req.body.message,
        commentDate: req.body.commentDate,
        visible: true,
    });

    newComment.save().then(comment => {
        Comment.find()
        .then(comments => res.json(comments));})
        .catch((e) => {
            console.log('Failed on mongo save:', e)
            res.status(500).send({ error: e.message });
        })
});

module.exports = router;