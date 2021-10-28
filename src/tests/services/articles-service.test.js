const mockedReturnedArticles = {
  count: 30,
  rows: [
    {
      Article: {
        dataValues: { id: 1 },
      },
    },
  ],
};

const mockedReturnedNewArticle = {
  dataValues: {
    id: 1,
  },
};

jest.mock('../../models', () => ({
  Article: {
    findAndCountAll: jest.fn().mockResolvedValue(mockedReturnedArticles),
    create: jest.fn().mockResolvedValue(mockedReturnedNewArticle),
    update: jest.fn().mockResolvedValue([1]),
  },
}));

jest.mock('../../utilities/pagination', () => ({
  getPagination: jest.fn().mockReturnValue(3, 3),
  getPagingData: jest.fn().mockReturnValue(mockedReturnedArticles),
}));

const { updateArticle } = require('../../controller/articles');
const {
  fetchArticles,
  createArticle,
  updateArticlesLikes,
} = require('../../services/articles');

describe('articles service', () => {
  it('gets all articles from model', async () => {
    const returnedValue = await fetchArticles(1, 3);
    expect(returnedValue).toBe(mockedReturnedArticles);
  });

  it('creates a new article', async () => {
    const returnedValue = await createArticle(mockedReturnedNewArticle);
    expect(returnedValue).toBe(mockedReturnedNewArticle.dataValues);
  });

  it('updates likes count of an article', async () => {
    const returnedValue = await updateArticlesLikes(1, 5);
    expect(returnedValue).toBe('likes updated');
  });
});
