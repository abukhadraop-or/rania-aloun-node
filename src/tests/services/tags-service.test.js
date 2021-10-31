const mockedReturnedTags = {
  dataValues: {
    id: 1,
    name: 'article',
    createdAt: 'test date',
    updatedAt: 'test date',
  },
};

const mockedReturnedNewTag = {
  dataValues: {
    id: 2,
    name: 'movie',
    createdAt: 'test date',
    updatedAt: 'test date',
  },
};

jest.mock('../../models', () => ({
  tag: {
    findAll: jest.fn().mockResolvedValue(mockedReturnedTags),
    create: jest.fn().mockResolvedValue(mockedReturnedNewTag),
  },
}));

const { fetchTags, createTag } = require('../../services/tags');

describe('tags service', () => {
  it('gets all tags from model', async () => {
    const returnedValue = await fetchTags();
    expect(returnedValue).toBe(mockedReturnedTags);
  });

  it('created a new article', async () => {
    const returnedValue = await createTag('movie');
    expect(returnedValue).toBe(mockedReturnedNewTag.dataValues);
  });
});
