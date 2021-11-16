const router = require('express-promise-router')();

const {
  allUsers,
  modifyUser,
  registerUser,
  authenticateUser,
} = require('../controller/users');
const validateUser = require('../middleware/validate-user');

/**
 * Fetches all users.
 */
router.get('/', allUsers);

/**
 * Adds a user to the database.
 */
router.post('/signup', validateUser, registerUser);

/**
 * Logs in a user.
 */
router.post('/login', authenticateUser);

/**
 * Updates a user.
 */
router.put('/:id', modifyUser);

module.exports = router;
