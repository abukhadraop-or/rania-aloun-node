const express = require('express');
const { tag } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const tags = await tag.findAll();

  res.send(JSON.stringify(tags, null, 2));
});

module.exports = router;
