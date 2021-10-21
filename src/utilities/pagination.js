/**
 * Sets correct limit and offset based on received data on request, or to defaults if nothing is passed.
 *
 * @param {number} page Requested page number.
 * @param {number} size Requested page size, number of articles per page.
 *
 * @return {Object} Limit & offsets options for the request.
 */
module.exports.getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

/**
 * Sets right articles to the right page, and calculates total needed pages.
 *
 * @param {Object[]} data Passed articles.
 * @param {number}   page Requested page number.
 * @param {number}   limit Number of articles per page.
 *
 * @return {Object} Holding totalItems count, sliced articles, total pages, and the current page.
 */
module.exports.getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: articles } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, articles, totalPages, currentPage };
};
