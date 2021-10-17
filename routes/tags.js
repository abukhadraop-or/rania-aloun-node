const express = require('express');
const router = express.Router();
const { getTags, postTag } = require('../controller/tags');

/**
 * Tags routes.
 */
router.get('/', getTags);
router.post('/', postTag);

module.exports = router;
