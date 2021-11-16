const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associations(models) {
      User.hasMany(models.Article, {
        foreignKey: 'UserId',
      });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 50],
        },
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [5, 255],
        },
      },
      shortBio: DataTypes.STRING,
      pictureUrl: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
