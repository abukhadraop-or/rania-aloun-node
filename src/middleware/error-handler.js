const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).send({
    message: err.message,
    code: statusCode,
  });
};

module.exports = errorHandler;
