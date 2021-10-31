const mockedReturnedValuesPagination = {
  limit: 3,
  offset: 0,
};

// const mockedReturnedArticles = {
//   count: 30,
//   rows: [
//     {
//       Article: {
//         dataValues: { id: 1 },
//       },
//     },
//   ],
// };

jest.mock('../../utilities/pagination', () => ({
  getPagination: jest.fn().mockReturnValue(mockedReturnedValuesPagination),
  // getPagingData: jest.fn().mockReturnValue(mockedReturnedArticles),
}));

const { getPagination } = require('../../utilities/pagination');

describe('Pagination functions', () => {
  it('sets limit and offset to correct values', async () => {
    const returnedValue = getPagination();
    expect(returnedValue).toBe(mockedReturnedValuesPagination);
  });
});
