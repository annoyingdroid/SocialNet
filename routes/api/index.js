const router = require('express').Router();
const thoughtRt = require('./thoughtRoutes');
const userRt = require('./userRoutes');

router.use('/users', userRt);
router.use('/thoughts', thoughtRt);

module.exports = router;
