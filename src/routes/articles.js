const router = require('express-promise-router')();
const {
  addArticle,
  allArticles,
  readArticle,
  updateArticle,
  removeArticle,
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
 * Fetches an article.
 */
router.get('/:id', readArticle);

/**
 * Updates an article's likes count.
 */
router.put('/:id', updateArticle);

/**
 * Deletes an article.
 */
router.delete('/:id', removeArticle);

module.exports = router;
