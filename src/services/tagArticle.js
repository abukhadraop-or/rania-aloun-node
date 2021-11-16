const { TagArticle } = require('../models');

const createAssociation = async (data) => {
  const response = await TagArticle.bulkCreate(data);
  return response;
};

const removeAssociation = async (ArticleId) => {
  const association = await TagArticle.destroy({ where: { ArticleId } });
};

module.exports = { createAssociation, removeAssociation };
