const express = require('express');
const { TagArticle } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const data = {
    TagId: req.body.TagId,
    ArticleId: req.body.ArticleId,
  };
  const { TagId, ArticleId } = data;
});

module.exports = router;
