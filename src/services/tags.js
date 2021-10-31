const { tag } = require('../models');

/**
 * Gets all tags.
 *
 * @returns {Promise<Object>} Fetched tags from db.
 */
const fetchTags = async () => {
  const tags = await tag.findAll();
  console.log('tn tn tn tn', tags);
  return tags;
};

/**
 * Creates new tag in the database.
 *
 * @param {string} tag Tag name to be added.
 *
 * @returns {{Promise<Object>}} Created Tag.
 */
const createTag = async (tagName) => {
  const response = await tag.create({
    name: tagName,
  });

  return response.dataValues;
};

module.exports = { fetchTags, createTag };
