const express = require('express');
const { Article, Tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const filteredArticles = await Article.findAll({
    include: [
      {
        model: Tag,
        where: {
          id: 2,
        },
      },
    ],
  });

  res.send(JSON.stringify(filteredArticles, null, 2));
});

module.exports = router;
