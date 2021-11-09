module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Rania',
          email: 'Rania_aloun@outlook.com',
          password:
            '$2b$10$iq8epsg1m9nD5323SALQ8e3B/I2Q5XrcTNiHpmsbxqsY3l11hTp7m',
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
