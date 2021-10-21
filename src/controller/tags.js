const express = require('express');
const { fetchTags, createTag } = require('../services/tags');

/**
 * Get all tags from tags service.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const allTags = async (req, res) => {
  const data = await fetchTags();

  res.json(data);
};

/**
 * Create a new tag.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addTag = async (req, res) => {
  const tag = req.body.name;
  const data = await createTag(tag);

  res.json(data);
};

module.exports = {
  allTags,
  addTag,
};
