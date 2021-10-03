const express = require('express');
const { Article } = require('../models');

const router = express.Router();

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { passed } = req.body;

  Article.update(
    { liked: passed },
    {
      where: { id },
    }
  )
    .then(() => {
      res.send(JSON.stringify(Article, null, 2));
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Tutorial with id=${id}`,
      });
    });
});

module.exports = router;
