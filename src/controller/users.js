const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('../config/custom-environment-variables.json');
const { fetchUsers, createUser, updateUser } = require('../services/users');

/**
 * Gets all users.
 *
 * @param {express.Request} req Request of route.
 * @param {express.Response} res Response sends json object holding all the fetched users.
 *
 * @return {Promise<Object>} Fetches articles.
 */
const allUsers = async (req, res) => {
  const data = await fetchUsers();

  res.json(data);
};

/**
 * Registers a new user in the system.
 *
 * @param {express.Request} req Request body holding an object {username, email, password}.
 * @param {express.Response} res Response sends the registered user as JSON Object.
 *
 * @return {Promise<Object>} Registered user.
 */
const registerUser = async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  const data = await createUser(user);
  res.send(data);
};

/**
 * Updates user's img and/or profile bio.
 *
 * @param {express.Request} req Request holding id & new img url & new bio if applied.
 * @param {express.Response} res Response sends the updated user.
 *
 * @return {Promise<Object>} Updated user.
 */
const modifyUser = async (req, res) => {
  const notUpdated = 'negative';
  const { id } = req.params;
  const imgUrl = req.body.imgUrl || notUpdated;
  const bio = req.body.bio || notUpdated;

  const data = await updateUser(id, imgUrl, bio);
  res.send(data);
};

module.exports = { allUsers, registerUser, modifyUser };
