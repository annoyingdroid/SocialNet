const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get()
  .post()
  .put()
  .delete()

// /api/users/:userId
router.route('/:userId/friends/:friendId')
  .post()
  .delete()

  module.exports = router;
