const express = require('express');
const { Article } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const data = {
    id: 9,
    userName: 'rania',
    publishDate: '2021-05-08T21:00:00.000Z',
    articleTitle: 'testing',
    liked: 40,
    link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
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
