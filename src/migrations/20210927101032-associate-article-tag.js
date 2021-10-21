module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TagArticle', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ArticleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      TagId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TagArticle');
  },
};
