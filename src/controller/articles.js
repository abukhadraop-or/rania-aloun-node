const express = require('express-promise-router');
const {
  fetchArticle,
  fetchArticles,
  createArticle,
  destroyArticle,
  updateArticlesLikes,
} = require('../services/articles');
const {
  createAssociation,
  removeAssociation,
} = require('../services/tagArticle');
const { fetchTags, createTags } = require('../services/tags');
const { formatResponse } = require('../utils/response');
const { NotFoundError } = require('../exceptions/errors');

/**
 * Get all articles with pagination and the associations included.
 *
 * @param {express.Request}  req Holding the page number, and page size.
 * @param {express.Response} res Response sends json object { totalItems, articles, totalPages, currentPage }.
 *
 * @return {Promise<Object>} Fetched articles.
 */
const allArticles = async (req, res) => {
  const { page, size } = req.query;
  const data = await fetchArticles(page, size);

  res.send(formatResponse(data));
};

/**
 * Create a new article, with association to tags if any are added, and with association to the user who created it.
 *
 * @param {express.Request}  req Body holding an object { userName, publishDate, articleTitle, liked Count, link, tags}.
 * @param {express.Response} res Sends the added article as JSON Object.
 *
 * @return {Promise<Object>} Created article.
 */
const addArticle = async (req, res) => {
  const { tags, ...articleData } = req.body;
  const data = await createArticle(articleData);

  const newTags = [];
  const existingTags = [];
  const addedTags = [];

  const receivedTags = tags;
  const allTags = await fetchTags();

  /**
   * Checks if received tags are in db, adds them to newTags array if not.
   */
  if (receivedTags) {
    receivedTags.forEach((receivedTag) => {
      const found = allTags.find(
        (existingTag) => existingTag.dataValues.name === receivedTag.name
      );
      if (!found) newTags.push(receivedTag);
      else {
        existingTags.push(found.dataValues);
      }
    });

    if (newTags.length) {
      const createdTags = await createTags(newTags);
      createdTags.forEach((tag) => addedTags.push(tag.dataValues));
    }

    const newAssociation = [...existingTags, ...addedTags].map((tag) => ({
      ArticleId: data.id,
      TagId: tag.id,
    }));

    await createAssociation(newAssociation);
  }

  res.json(formatResponse(data));
};

/**
 * Get an article.
 *
 * @param {express.Request}  req Holding the id of the article to be fetched.
 * @param {express.Response} res Response sends json object { totalItems, articles, totalPages, currentPage }.
 *
 * @return {Promise<Object>} Fetched articles.
 */
const readArticle = async (req, res) => {
  const data = await fetchArticle(req.params.id);
  if (!data) res.send('Article is not found');
  else {
    res.send(formatResponse(data));
  }
};

/**
 * Update likes count of article.
 *
 * @param {express.Request}  req Request body holding JSON Object { id, passed }, passed value holds the updated likes count.
 * @param {express.Response} res Response sends the updated article or an error in case of one.
 *
 * @return {Promise<Object>} Updated Article.
 */
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { passed } = req.body;

  const data = await updateArticlesLikes(id, passed);
  res.send(formatResponse(data));
};

/**
 * Delete an article.
 *
 * @param {express.Request}  req Holding the id of the article to be deleted.
 * @param {express.Response} res Response sends json object { totalItems, articles, totalPages, currentPage }.
 *
 * @return {Promise<Object>} Deleted article.
 */
const removeArticle = async (req, res) => {
  const data = await destroyArticle(req.params.id);

  if (!data) throw new NotFoundError('Article Not Found');
  await removeAssociation(req.params.id);
  res.send(formatResponse(data, 'Article deleted'));
};

module.exports = {
  allArticles,
  addArticle,
  readArticle,
  updateArticle,
  removeArticle,
};
