module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Articles',
      [
        {
          userName: 'Robert De Niro',
          publishDate: new Date(),
          articleTitle: 'Cape Fear',
          liked: 10,
          link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Jack Nicholson',
          publishDate: new Date(),
          articleTitle: 'Chinatown',
          liked: 20,
          link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Meryl Streep',
          publishDate: new Date(),
          articleTitle: 'Out of Africa',
          liked: 30,
          link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Elizabeth Taylor',
          publishDate: new Date(),
          articleTitle: 'Who is Afraid of Virginia Woolf?',
          liked: 15,
          link: 'https://css-tricks.com/snippets/css/css-box-shadow/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
