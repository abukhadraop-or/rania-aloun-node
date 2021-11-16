const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      tag.belongsToMany(models.Article, {
        through: 'TagArticles',
        foreignKey: 'TagId',
      });
    }
  }

  tag.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
    },
    {
      sequelize,
      modelName: 'tag',
      tableName: 'Tags',
    }
  );
  return tag;
};
