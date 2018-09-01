const express = require('express');
const router = express.Router();

// Comment Model
const Comment = require('../../models/comment');

// router.all('/', function (req, res, next) {
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });


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

// @route   DELETE api/comments/:id
// @desc    Delete A comment
// @access  Public
router.delete('/:id', (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => comment.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;