const express = require('express');
const { tag } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  const data = {
    name: req.body.name,
  };
  const { name } = data;

  tag
    .create({
      name,
    })
    .then((add) => res.json(add))
    .catch((err) => console.log(err));
});

module.exports = router;
