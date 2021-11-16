const express = require('express');
const { fetchTags, createTag } = require('../services/tags');
const { formatResponse } = require('../utils/response');

/**
 * Get all tags from tags service.
 *
 * @param {express.Request}  req Request.
 * @param {express.Response} res Response.
 *
 * @return {Promise<Object>} Fetched tags.
 */
const allTags = async (req, res) => {
  const data = await fetchTags();

  res.json(formatResponse(data));
};

/**
 * Create a new tag.
 *
 * @param {express.Request}  req Request.
 * @param {express.Response} res Response.
 *
 * @return {Promise<Object>} Created tag.
 */
const addTag = async (req, res) => {
  const tag = req.body.name;
  const data = await createTag(tag);

  res.json(formatResponse(data));
};

module.exports = {
  allTags,
  addTag,
};
