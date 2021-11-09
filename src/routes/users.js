const express = require('express');

const router = express.Router();
const { allUsers, registerUser, modifyUser } = require('../controller/users');
const validateUser = require('../middleware/validate-user');

/**
 * Fetches all users.
 */
router.get('/', allUsers);

/**
 * Adds a user to the database.
 */
router.post('/', validateUser, registerUser);

/**
 * Updates a user.
 */
router.put('/:id', modifyUser);

module.exports = router;
