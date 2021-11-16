/* eslint-disable max-classes-per-file */

class BaseError extends Error {
  constructor(message, code, status) {
    super(message, code);
    this.message = message;
    this.code = code;
    this.status = status;
  }
}

/**
 * Extended Authentication error class.
 */
class AuthenticationError extends BaseError {
  constructor(message) {
    super(message);
    this.message = message;
    this.code = 401;
    this.status = 'Unauthorized';
  }
}

/**
 * Extended Authentication error class.
 */
class Forbidden extends BaseError {
  constructor(message) {
    super(message);
    this.message = message;
    this.code = 403;
    this.status = 'Forbidden';
  }
}

/**
 * Extended notFound error class.
 */
class NotFoundError extends BaseError {
  constructor(message) {
    super(message);
    this.message = message || 'Page Not Found';
    this.code = 404;
    this.status = 'Not Found';
  }
}

module.exports = { AuthenticationError, Forbidden, NotFoundError };
