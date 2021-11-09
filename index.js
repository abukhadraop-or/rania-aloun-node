const express = require('express');
const cors = require('cors');
const articles = require('./src/routes/articles');
const tags = require('./src/routes/tags');
const users = require('./src/routes/users');
const logins = require('./src/routes/logins');
const errorHandler = require('./src/middleware/error-handler');
const NotFoundError = require('./src/exceptions/notFound-error');

const app = express();

app.use(cors());
app.use(express.json());

// Routes.
app.use('/api/articles', articles);
app.use('/api/tags', tags);
app.use('/api/users', users);
app.use('/api/logins', logins);

app.use('*', (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = {
  app,
};
