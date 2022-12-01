const { Thoughts, Reaction } = require('../models');

// FUNCTIONS TO WRITE
module.exports = {
// getAllThoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .select('-__v')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
// getSinglethought
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.id})
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: "No thought with that ID"})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
// postNewthought
    createThought(req, res) {
        Thoughts.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
// updatethought
    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {runValidators: true, new: true}
        )
        .then((thought) => {
            !thought
                ? res.status(404).json({message: 'No thought with that ID found!'})
                : res.json(thought)
        });
    },
// deletethought
    deleteThought(req, res) {
        Thoughts.findOneAndRemove({_id: req.params.id})
            .then((thought) => 
                !thought
                    ? res.status(404).json({message: 'No thought with that ID found!'})
                    : thought.findOneAndUpdate(
                        {Thoughts: req.param.thoughtId},
                        {$pull: {Thoughts: req.params.thoughtId}},
                        {new:true}
                    )
            )
            .catch((err) => res.status(500).json(err));
    },
// addReaction
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({message: "No thought with that ID"})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },
// removeReaction
    removeReaction(req, res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {reactions: {reactionId : req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({message: "No thought with that ID"})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    }
}
