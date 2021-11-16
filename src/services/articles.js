const { Article, tag } = require('../models');
const { getPagination, getPagingData } = require('../utils/pagination');

/**
 * Get all articles with pagination and the associations included.
 *
 * @param {number} page Page number received from request.
 * @param {number} size Number of articles per page, received from request.
 *
 * @return {Promise<Object>} Paginated article data.
 */
const fetchArticles = async (page, size) => {
  const { limit, offset } = getPagination(page, size);

  const articles = await Article.findAndCountAll({
    include: [
      {
        model: tag,
        attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
        through: {
          attributes: [],
        },
      },
    ],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    distinct: true,
    limit,
    offset,
  });
  return getPagingData(articles, page, limit);
};

/**
 * Create new article.
 *
 * @param {Object} article Article object to be added to database.
 *
 * @return {Promise<Object>} The created article.
 */
const createArticle = async (article) => {
  const { userName, publishDate, articleTitle, liked, link, tags } = article;
  const response = await Article.create({
    userName,
    publishDate,
    articleTitle,
    liked,
    link,
    tags,
  });

  return response.dataValues;
};

/**
 * Fetches an article based on id.
 *
 * @param {number} id Article id.
 *
 * @return {Promise<Object>} The fetched article.
 */
const fetchArticle = async (id) => {
  const article = await Article.findOne({
    include: [
      {
        model: tag,
        attributes: { exclude: ['createdAt', 'updatedAt', 'id'] },
        through: {
          attributes: [],
        },
      },
    ],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    where: { id },
  });
  return article;
};

/**
 * Update likes count of article.
 *
 * @param {number} id Id of the liked article to be updated.
 * @param {number} passed New likes count.
 *
 * @return {string} Message to indicate success.
 */
const updateArticlesLikes = async (id, passed) => {
  await Article.update(
    { liked: passed },
    {
      where: { id },
    }
  );

  return 'likes updated';
};

/**
 * Fetches an article based on id.
 *
 * @param {number} id Article id.
 *
 * @return {Promise<Object>} The fetched article.
 */
const destroyArticle = async (id) => {
  const article = await Article.destroy({ where: { id } });
  return article;
};

module.exports = {
  fetchArticles,
  createArticle,
  fetchArticle,
  updateArticlesLikes,
  destroyArticle,
};
