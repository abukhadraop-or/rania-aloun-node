const { Article, tag } = require('../models');
const { getPagination, getPagingData } = require('../utilities/pagination');

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
      },
    ],
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
  const { userName, publishDate, articleTitle, liked, link } = article;

  const response = await Article.create({
    userName,
    publishDate,
    articleTitle,
    liked,
    link,
  });

  return response.dataValues;
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
  const s = await Article.update(
    { liked: passed },
    {
      where: { id },
    }
  );

  console.log('asdasd', s);
  return 'likes updated';
};

module.exports = { fetchArticles, createArticle, updateArticlesLikes };
