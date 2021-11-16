const { tag } = require('../models');

/**
 * Gets all tags.
 *
 * @returns {Promise<Object>} Fetched tags from db.
 */
const fetchTags = async () => {
  const tags = await tag.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  return tags;
};

/**
 * Creates new tag in the database.
 *
 * @param {string} tag Tag name to be added.
 *
 * @returns {{Promise<Object>}} Created Tag.
 */
const createTags = async (data) => {
  const response = await tag.bulkCreate(data);

  return response;
};

module.exports = { fetchTags, createTags };
