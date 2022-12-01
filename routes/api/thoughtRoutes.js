const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get(getAllThoughts)
  .post(createThought)

router.route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought)

router.route('/:id/reactions')
  .post(addReaction)
  .delete(removeReaction) 

  module.exports = router;
