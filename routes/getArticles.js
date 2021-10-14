const express = require('express');
const { Article, tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const articles = await Article.findAll({
    include: [
      {
        model: tag,
      },
    ],
  });
  const result = articles.slice(startIndex, endIndex);
  res.json(result);

  res.send(JSON.stringify(articles, null, 2));
});

module.exports = router;
