module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          name: 'article',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'actor',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'movie',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
