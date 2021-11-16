const { formatResponse } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.code || 500;
  res
    .status(statusCode)
    .send(formatResponse('', statusCode, err.message, err.status));
};

module.exports = errorHandler;
