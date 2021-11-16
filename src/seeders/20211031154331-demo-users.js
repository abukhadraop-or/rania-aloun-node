// password: 12345
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Rania',
          email: 'Rania_aloun@outlook.com',
          password:
            '$2b$10$OQ7HVc9UyXia.7NHtp8Ki.1qQ0AzJpcC7SBwugWmP2fB5ZE4ZKg2e',
          shortBio: 'A happy proud human',
          pictureUrl: 'www.random.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
