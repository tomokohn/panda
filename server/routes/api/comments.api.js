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
// @desc    Create An comment
// @access  Public
router.post('/', (req, res) => {
    const newComment = new Comment({
        name: req.body.name
    });

    newComment.save().then(comment => res.json(comment));
});

// @route   DELETE api/comments/:id
// @desc    Delete A comment
// @access  Public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => comment.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;