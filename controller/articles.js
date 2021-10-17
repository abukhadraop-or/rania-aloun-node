const express = require('express');
const {
  getPagination,
  getPagingData,
} = require('../controller/pagination.controller');
const {
  allArticles,
  addArticle,
  updateArticleLikes,
} = require('../services/articles');
const { Article, tag } = require('../models');

/**
 * Get all articles with pagination and the associations included.
 *
 * @param {express.Request} req Holding the page number, and page size.
 * @param {express.Request} res Response sends json object { totalItems, articles, totalPages, currentPage }.
 *
 */
const getArticles = async (req, res) => {
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
};

/**
 * Create a new article.
 *
 * @param {express.Request} req Body holding an object { userName, publishDate, articleTitle, liked Count, link}.
 * @param {express.Response} res Sends the added article as JSON Object.
 */
const postArticle = async (req, res) => {
  const data = {
    userName: req.body.userName,
    publishDate: req.body.publishDate,
    articleTitle: req.body.articleTitle,
    liked: req.body.liked,
    link: req.body.link,
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
};

/**
 * Update likes count of article.
 *
 * @param {express.Request} req Request body holding JSON Object { id, passed }, passed value holds the updated likes count.
 * @param {express.Response} res Response sends the updated article or an error in case of one.
 */
const updateArticle = async (req, res) => {
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
};

module.exports = {
  getArticles,
  postArticle,
  updateArticle,
};
