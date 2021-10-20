const express = require('express');
const router = express.Router();
const {
  getArticles,
  postArticle,
  updateArticle,
} = require('../controller/articles');

/**
 * Articles routes.
 */
router.get('/', getArticles);
router.post('/', postArticle);

router.put('/:id', updateArticle);

module.exports = router;
