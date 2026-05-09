const { body, validationResult } = require('express-validator');

const registerValidation = [
  body('name')
    .trim()
    .isLength({ min: 2 }).withMessage('Tên phải có ít nhất 2 ký tự'),
  
  body('email')
    .isEmail().normalizeEmail().withMessage('Email không hợp lệ'),
  
  body('password')
    .isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
    .matches(/\d/).withMessage('Mật khẩu phải chứa ít nhất 1 số'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('auth/register', { 
      errors: errors.array(), 
      oldData: req.body 
    });
  }
  next();
};

module.exports = { registerValidation, validate };