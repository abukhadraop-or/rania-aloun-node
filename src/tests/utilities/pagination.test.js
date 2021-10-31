const mockedReturnedValuesPagination = {
  limit: 3,
  offset: 0,
};

const mockedReceivedArticles = {
  count: 30,
  rows: [
    {
      Article: {
        dataValues: { id: 1 },
      },
    },
  ],
};

const mockedReturnedData = {
  totalItems: 30,
  articles: [{ Article: { dataValues: { id: 1 } } }],
  totalPages: 10,
  currentPage: 0,
};

const { getPagination, getPagingData } = require('../../utilities/pagination');

describe('Pagination functions', () => {
  it('sets limit and offset to correct values', async () => {
    const returnedValue = await getPagination(0, 3);
    expect(returnedValue).toStrictEqual(mockedReturnedValuesPagination);
  });

  it('Sets right articles to the right page, and calculates total needed pages', async () => {
    const returnedValue = getPagingData(mockedReceivedArticles, 0, 3);
    expect(returnedValue).toStrictEqual(mockedReturnedData);
  });
});
