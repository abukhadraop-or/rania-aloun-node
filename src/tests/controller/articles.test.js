const request = require('supertest');

jest.mock('../../services/articles', () => ({
  fetchArticles: jest.fn(),
  createArticle: jest.fn(),
  updateArticlesLikes: jest.fn(),
}));

const { app } = require('../../../index');
const {
  fetchArticles,
  createArticle,
  updateArticlesLikes,
} = require('../../services/articles');

describe('articles controller', () => {
  it('gets all articles', async () => {
    const res = await request(app).get('/api/articles');
    expect(fetchArticles).toHaveBeenCalled();
  });

  it('creates an article', async () => {
    const article = {
      userName: 'rania',
      publishDate: '2021-10-26 13:29:22.912+03',
      articleTitle: 'idk',
      liked: 5,
      link: 'random.com',
    };

    createArticle.mockReturnValue({
      id: 1,
      userName: 'rania',
      publishDate: '2021-10-26T10:29:22.912Z',
      articleTitle: 'idk',
      liked: 5,
      link: 'random.com',
      updatedAt: '2021-10-26T13:30:31.527Z',
      createdAt: '2021-10-26T13:30:31.527Z',
    });

    const res = await request(app).post('/api/articles').send(article);
    expect(res.body.userName).toEqual('rania');
  });

  it('updates likes count', async () => {
    const passedObj = {
      passed: 7,
    };
    updateArticlesLikes.mockReturnValue('likes updated');

    const res = await request(app).put('/api/articles/1').send(passedObj);
    expect(res.text).toEqual('likes updated');
  });
});
