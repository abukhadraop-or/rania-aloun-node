const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('../config/custom-environment-variables.json');
const AuthenticationError = require('../exceptions/authentication-error');
const { fetchUser } = require('../services/users');

/**
 * Authenticates a user in the system.
 *
 * @param {express.Request} req Request body holding an object {username, email, password}.
 * @param {express.Response} res Response sends the registered user as JSON Object.
 *
 * @return {Promise<Object>}
 */
const authenticateUser = async (req, res) => {
  const user = await fetchUser(req.body.email);
  if (!user) throw new AuthenticationError('Invalid Email');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    throw new AuthenticationError('Wrong password, try again');

  const token = jwt.sign({ id: user.id }, config.jwtPrivateKey);
  return res.send(token);
};

module.exports = authenticateUser;
