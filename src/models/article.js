const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsToMany(models.tag, {
        through: 'TagArticles',
        foreignKey: 'ArticleId',
      });
      Article.belongsTo(models.User, {
        foreignKey: 'UserId',
      });
    }
  }
  Article.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userName: DataTypes.STRING,
      publishDate: DataTypes.DATE,
      articleTitle: DataTypes.STRING,
      liked: DataTypes.INTEGER,
      link: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Article',
    }
  );
  return Article;
};
