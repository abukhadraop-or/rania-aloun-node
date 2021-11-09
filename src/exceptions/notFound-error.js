/**
 * Extended notFound error class.
 */
class NotFoundError extends Error {
  constructor(message) {
    super((message = 'Not Found'));
    this.status = 404;
  }
}

module.exports = NotFoundError;
