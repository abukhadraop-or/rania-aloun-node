const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsToMany(models.tag, {
        through: 'TagArticle',
        foreignKey: 'ArticleId',
      });
    }
  }
  Article.init(
    {
      userName: DataTypes.STRING,
      publishDate: DataTypes.DATE,
      articleTitle: DataTypes.STRING,
      liked: DataTypes.INTEGER,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Article',
    }
  );
  return Article;
};
