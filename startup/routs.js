const express = require('express');
const addArticle = require('../routes/addArticles');
const addTag = require('../routes/addTags');
const addAssociation = require('../routes/addAssociation');
const getArticles = require('../routes/getArticles');
const getTags = require('../routes/getTags');
const getFilteredArticles = require('../routes/getFilteredArticles');
const updateArticleLikes = require('../routes/updateArticleLikes');
const addArticleDirectly = require('../routes/addArticleDirectly');

module.exports = function (app) {
  app.use(express.json());
  app.get('/', (req, res) => res.send('TEST'));
  app.use('/addArticle', addArticle);
  app.use('/addTag', addTag);
  app.use('/addAssociation', addAssociation);
  app.use('/getArticles', getArticles);
  app.use('/getTags', getTags);
  app.use('/getFilteredArticles', getFilteredArticles);
  app.use('/updateArticleLikes', updateArticleLikes);
  app.use('/test', addArticleDirectly);
};
