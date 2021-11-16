module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'TagArticles',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: 1,
          TagId: 1,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: 2,
          TagId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: 3,
          TagId: 3,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: 1,
          TagId: 2,
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          ArticleId: 4,
          TagId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TagArticles', null, {});
  },
};
