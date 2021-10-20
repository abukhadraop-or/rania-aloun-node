const express = require('express');
const { allTags, addTag } = require('../services/tags');

/**
 * Get all tags from tags service.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getTags = async (req, res) => {
  const data = await allTags();

  res.json(data);
};

/**
 * Create a new tag.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const postTag = async (req, res) => {
  const tag = req.body.name;
  const data = await addTag(tag);

  res.json(data);
};

module.exports = {
  getTags,
  postTag,
};
