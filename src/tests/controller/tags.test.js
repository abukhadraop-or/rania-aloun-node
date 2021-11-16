const request = require('supertest');

jest.mock('../../services/tags', () => ({
  fetchTags: jest.fn(),
  createTag: jest.fn(),
}));

const { app } = require('../../../index');
const { fetchTags, createTag } = require('../../services/tags');

describe('tags controller', () => {
  it('gets all tags', async () => {
    const res = await request(app).get('/api/tags');
    expect(fetchTags).toHaveBeenCalled();
  });

  it('creates a tag', async () => {
    const tag = {
      name: 'test',
    };

    createTag.mockReturnValue({
      id: 1,
      name: 'test',
      updatedAt: '2021-10-26T14:32:22.964Z',
      createdAt: '2021-10-26T14:32:22.964Z',
    });

    const res = await request(app).post('/api/tags').send(tag);
    expect(res.body.name).toEqual('test');
  });
});
