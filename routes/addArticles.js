const express = require('express');
const { Article } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const data = {
    userName: req.body.userName,
    publishDate: req.body.publishDate,
    articleTitle: req.body.articleTitle,
    liked: req.body.liked,
    link: req.body.link,
  };
  const { userName, publishDate, articleTitle, liked, link } = data;

  Article.create({
    userName,
    publishDate,
    articleTitle,
    liked,
    link,
  })
    .then((add) => res.json(add))
    .catch((err) => console.log(err));
});

module.exports = router;
