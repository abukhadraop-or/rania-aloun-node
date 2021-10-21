const express = require('express');

const router = express.Router();
const { allTags, addTag } = require('../controller/tags');

/**
 * Fetches all the tags.
 */
router.get('/', allTags);

/**
 * Adds a tag to the database.
 */
router.post('/', addTag);

module.exports = router;
