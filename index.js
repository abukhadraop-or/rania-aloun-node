const express = require('express');
const cors = require('cors');
const articles = require('./src/routes/articles');
const tags = require('./src/routes/tags');

const app = express();

app.use(cors());
app.use(express.json());

// Routes.
app.use('/api/articles', articles);
app.use('/api/tags', tags);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = {
  app,
};
