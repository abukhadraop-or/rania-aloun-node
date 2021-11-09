const { User } = require('../models');

/**
 * Gets all users from database.
 *
 * @return {Promise<Object>} Users.
 */
const fetchUsers = async () => {
  const users = await User.findAll();

  return users;
};

/**
 * Gets user by email from database.
 *
 * @return {Promise<Object>} Users.
 */
const fetchUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

/**
 * Creates a new user.
 *
 * @param {Object} userData New user to be added to the model.
 *
 * @return {Promise<Object>} The created new user.
 */
const createUser = async (userData) => {
  const { username, email, password } = userData;
  const user = await User.findOne({ where: { email } });
  if (user) return 'Email is already registered.';

  try {
    const response = await User.create({
      username,
      email,
      password,
    });

    return response.dataValues;
  } catch (ex) {
    return ex.message;
  }
};

/**
 * Updates user profile picture and\or profile bio.
 *
 * @param {number} id Id of user to be updated.
 * @param {string} imgUrl Url of user's new image or 'negative' if not updated.
 * @param {string} bio  New bio of user or 'negative' if not updated.
 *
 * @return {string} Message to indicate success of update.
 */
const updateUser = async (id, imgUrl, bio) => {
  const toBeUpdatedObj = { id };
  if (imgUrl !== 'negative') {
    toBeUpdatedObj.pictureUrl = imgUrl;
  }
  if (bio !== 'negative') {
    toBeUpdatedObj.shortBio = bio;
  }

  // This will only be called if imgUrl/bio or both is updated.
  await User.update(toBeUpdatedObj, { where: { id } });

  return 'User updated';
};

module.exports = { fetchUsers, fetchUser, createUser, updateUser };
