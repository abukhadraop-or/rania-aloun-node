const express = require('express');

const router = express.Router();
const {
  allArticles,
  addArticle,
  updateArticle,
} = require('../controller/articles');

/**
 * Fetches all the articles.
 */
router.get('/', allArticles);

/**
 * Adds an article to the database.
 */
router.post('/', addArticle);

/**
 * Updates an article's likes count.
 */
router.put('/:id', updateArticle);

module.exports = router;
