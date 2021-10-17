const express = require('express');
const {
  getPagination,
  getPagingData,
} = require('../controller/pagination.controller');
const { Article, tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  const articles = await Article.findAndCountAll({
    include: [
      {
        model: tag,
      },
    ],
    distinct: true,
    limit,
    offset,
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
});

module.exports = router;
