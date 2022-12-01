const { Users, Thought } = require('../models');

// FUNCTIONS TO WRITE
module.exports = {
// getAllUsers
    getAllUsers(req, res) {
        Users.find({})
        .select('-__v')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
// getSingleUser
    getSingleUser(req, res) {
        Users.findOne({ _id: req.params.id})
        .then((user) => 
            !user
                ? res.status(404).json({ message: "No user with that ID"})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
// postNewUser
    createNewUser(req, res) {
        Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
// updateUser
    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => {
            !user
                ? res.status(404).json({message: 'No user with that name found!'})
                : res.json(user)
        });
    },
// deleteUser
    deleteUser(req, res) {
        Users.findOneAndRemove({_id: req.params.id})
            .then((user) => 
                !user
                    ? res.status(404).json({message: 'No user with that name found!'})
                    : res.json({message : "User successfully deleted"})
                )
            .catch((err) => res.status(500).json(err));
    },
// addFriend
    addFriend(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet: {friends: {_id: req.params.friendId}}},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user
                ? res.status(404).json({message: "No friend with that ID"})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
// removeFriend
    removeFriend(req, res) {
        Users.findOneAndUpdate(
            {_id: req.params.id},
            {$pull: {friends: req.params.friendId}},
            {runValidators: true, new: true}
        )
        .then((user) =>
            !user
                ? res.status(404).json({message: "No friend with that ID"})
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }
}