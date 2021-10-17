const { tag } = require('../models');

/**
 * Get all tags.
 *
 * @returns {Promise<Object>} Fetched tags from db.
 */
const allTags = async () => {
  const tags = await tag.findAll();

  return tags;
};

/**
 *
 * @param {string} tag Tag name to be added.
 *
 * @returns
 */
const addTag = async (tagName) => {
  const response = tag.create({
    name: tagName,
  });

  return response;
};

module.exports = {
  allTags,
  addTag,
};
