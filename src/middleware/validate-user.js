const { body, validationResult } = require('express-validator');

const validateUser = [
  body('email').isEmail(),
  body('username').isLength({ min: 5 }),
  body('password').isLength({
    min: 5,
  }),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next(res.status(400).json({ errors: errors.array() }));
    }
    next();
  },
];

module.exports = validateUser;
