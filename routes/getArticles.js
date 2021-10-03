const express = require('express');
const { Article, tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const articles = await Article.findAll({
    include: [
      {
        model: tag,
      },
    ],
  });

  res.send(JSON.stringify(articles, null, 2));
});

module.exports = router;
