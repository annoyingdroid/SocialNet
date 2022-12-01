const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getAllUsers)
  .post(createNewUser)

//api/users/:id
router.route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)

// /api/users/:id/friends/friendId
router.route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend)

  module.exports = router;
