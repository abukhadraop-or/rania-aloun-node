const express = require('express');
const addTag = require('../routes/addTags');
const addAssociation = require('../routes/addAssociation');
const getTags = require('../routes/getTags');
const articles = require('../routes/articles');

module.exports = function (app) {
  app.use(express.json());
  app.use('/api/articles', articles);
  app.use('/addTag', addTag);
  app.use('/addAssociation', addAssociation);
  app.use('/api/getTags', getTags);
};
