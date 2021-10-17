const { Article, tag } = require('../models');
const { getPagination, getPagingData } = require('../utilities/pagination');

/**
 * Get all articles with pagination and the associations included.
 *
 * @param {Number} page Page number received from request.
 * @param {Number} size Number of articles per page, received from request.
 *
 * @return {Promise<Object>} Paginated article data.
 */
const allArticles = async (page, size) => {
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
 * @return {string} Message to show success.
 */
const addArticle = async (article) => {
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
 * @param {Number} id Id of the liked article to be updated.
 * @param {Number} passed New likes count.
 *
 * @return {string} Message to show success.
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

module.exports = {
  allArticles,
  addArticle,
  updateArticlesLikes,
};
