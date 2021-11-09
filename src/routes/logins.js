const router = require('express-promise-router')();

// const router = express.Router();
const authenticateUser = require('../controller/logins');
// const validateUser = require('../middleware/validate-user');

/**
 * Logs in a user.
 */
router.post('/', authenticateUser);

module.exports = router;
