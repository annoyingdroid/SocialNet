const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
  .get()
  .post()
  .put()
  .delete()

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post()
  .delete()

  module.exports = router;
