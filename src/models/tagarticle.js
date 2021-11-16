const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TagArticle extends Model {}
  TagArticle.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      TagId: DataTypes.INTEGER,
      ArticleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'TagArticle',
    }
  );
  return TagArticle;
};
