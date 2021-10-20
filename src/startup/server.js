const express = require('express');
const articles = require('../routes/articles');
const tags = require('../routes/tags');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/articles', articles);
  app.use('/api/tags', tags);
};
