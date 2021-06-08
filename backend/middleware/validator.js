const { check, validationResult } = require("express-validator")
exports.registerRules = () => [
  check(`firstname`, `this field is required ! `).notEmpty(),
  check(`lastname`, `this field is required ! `).notEmpty(),
  check(`email`, ` this field is required!`).notEmpty(),
  check(`age`, ` this field is required!`).notEmpty(),
  check(`photo`, ` this field is required!`).notEmpty(),
  check('countrie', `this field should be a valid email`).notEmpty(),
  check('password', `this field should be at least 4 char`).isLength({ min: 4 }),
  check(`phoneNumber`, ` this field should have at least 8 number`).isLength({
    min: 8,
    max: 13,
  }),
];

exports.registerComment = () => [
  check(`firstname`, `this field is required ! `).notEmpty(),
  check(`lastname`, `this field is required ! `).notEmpty(),
  check(`comment`, `this field is required ! `).notEmpty(),
];


exports.validator = (req, res, next) => {
  const errors = validationResult(req)
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() }
  )
}