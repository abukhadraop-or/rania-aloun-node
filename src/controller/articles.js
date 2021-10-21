const express = require('express');
const {
  fetchArticles,
  createArticle,
  updateArticlesLikes,
} = require('../services/articles');

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

  res.send(data);
};

/**
 * Create a new article.
 *
 * @param {express.Request}  req Body holding an object { userName, publishDate, articleTitle, liked Count, link}.
 * @param {express.Response} res Sends the added article as JSON Object.
 *
 *  @return {Promise<Object>} Created article.
 */
const addArticle = async (req, res) => {
  const article = {
    userName: req.body.userName,
    publishDate: req.body.publishDate,
    articleTitle: req.body.articleTitle,
    liked: req.body.liked,
    link: req.body.link,
  };

  const data = await createArticle(article);
  res.json(data);
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
  res.send(data);
};

module.exports = { allArticles, addArticle, updateArticle };
